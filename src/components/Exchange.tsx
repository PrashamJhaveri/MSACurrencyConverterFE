import Typography from '@material-ui/core/Typography';
import * as React from 'react';


const Exchange = (props: any) => (            
    <div >
        <Typography style={{display: 'inline-block', textAlign: 'center', width: '100%', fontSize:'20px'}}>
            {props.newBaseCurrency && props.baseCurrency && props.rate && <p>{props.rate}</p>}
            {props.date && <p> As of {props.date}</p>}
            {props.error && <p> {props.error}</p>}
        </Typography>
    </div>
);

export default Exchange;
