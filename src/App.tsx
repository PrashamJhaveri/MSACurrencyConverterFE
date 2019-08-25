import * as firebase from 'firebase';
import * as React from 'react';


import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './App.css';
import Exchange from "./components/Exchange";
import Form from "./components/Form";
import Titles from "./components/Titles";
firebase.initializeApp({
  apiKey: "AIzaSyCECL6ZgVbIsw0FtRU6iLnI2bpiTQC7Sao",
  authDomain: "dloplantool.firebaseapp.com"
})

{/* <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img alt="profile picture" src={firebase.auth().currentUser.photoURL}/> */}

interface IState{
  rate: any,
  baseCurrency: any,
  date: any,
  newBaseCurrency: any,
  error: any,
  isSignedIn: any
}

class App extends React.Component<{}, IState>{
  private uiConfig = {
    Callbacks: {
      signInSuccess: () => false
    },
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }
  constructor(props:any){
    super(props);

    this.state = {
      baseCurrency: "",
      date: "",
      error: "",
      isSignedIn: false,
      newBaseCurrency: "",
      rate: ""
    } 
  }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      // console.log("user", user)
    })
  }

  public getRate = async (e: any) => {   
    e.preventDefault(); 
    const base = e.target.elements.base.value;
    const newBase = e.target.elements.newBase.value;
    const amount = e.target.elements.amount.value;
    
    if(base && newBase){
      const apiCall = await fetch(`https://orion.apiseeds.com/api/exchangerates/convert/${base}/${newBase}?amount=${amount}&apikey=kvqE00Fb270NKLwud2VRJhpZy7MWStfixvro08VpuXlTRnAOivmMYNTtlVMz59x9`);
      const data = await apiCall.json(); 
       if(data.from.code && data.to.code){
        this.setState({
          baseCurrency: data.from.code,
          date: data.from.updated,
          error: "",
          newBaseCurrency: data.to.code,
          rate: data.result.format
        });
      }
    }
    else{
      this.setState({
        baseCurrency: undefined,
        date: undefined,
        error: "Unable to Convert the given Currency. Please Enter Another.",
        newBaseCurrency: undefined,
        rate: undefined
      });
    }


  } 

  public LogOut(){
    firebase.auth().signOut();
  }




  public render(){
    return(
      <div>
        {this.state.isSignedIn ? (
          <span>
            <div>
              
              <Titles 
                LogOut={this.LogOut}
                UserPic = {firebase.auth().currentUser!.photoURL}
              />
              <p> Welcome, {firebase.auth().currentUser!.displayName} </p>
              <Form getRate={this.getRate}/> 
              <Exchange 
                  baseCurrency ={this.state.baseCurrency}
                  date ={this.state.date} 
                  error ={this.state.error}
                  newBaseCurrency ={this.state.newBaseCurrency}
                  rate ={this.state.rate} 
              />
            </div>
            
          </span>
        ):(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}/>
        )}

        
      </div>
    );
  }
}
export default App;