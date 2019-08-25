import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import picc from './logo.png';



const Form = (props: any) => (
    <div style={{textAlign: 'center'}}>
        <form onSubmit={props.getRate}>
            <img style={{margin: '10px 0px 0px 50px'}} src={picc}/>
            <div>
                
                <TextField style={{margin: '0px 10px'}} type="text" name = "base" placeholder="Currency Code"/>
                <TextField  style={{margin: '0px 10px'}} type="text" name = "newBase" placeholder="Converting Code"/>
                <TextField  style={{margin: '0px 10px'}} type="text" name = "amount" placeholder="Amount"/>
                <Button style={{margin:'0px 10px'}} type="submit" variant="contained">Convert</Button>
            </div>

        </form>
    </div>


);
export default Form;