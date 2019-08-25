import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
// import picc from './logo.png';



const Titles = (props: any) => (
    <div>
        <AppBar position="static" style={{backgroundColor: '#2c3242'}}>
            <Toolbar>
                <img src={props.UserPic || ''} width="60" height="60" />
                <Typography style={{margin: '0px 0px 0px 20px'}}>
                    Exchange Currency
                </Typography>
          
                <form onSubmit={props.LogOut}>
                    <Button style={{margin: '0px 0px 0px 1050px'}} type="submit" variant="contained">Log Out</Button>
                </form>
            </Toolbar>
        </AppBar>        
    </div>


);

export default Titles;