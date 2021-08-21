import React from 'react'
import './LoginT.css'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const LoginT=()=>{
    return(
      
        <div className="Logint">
            <div className="logint__in">
         new customer<span> <button> sign up</button></span>
          
        </div>
        <div className="logint__in" style={{display:"flex",textAlign:"center"}}>
         <LocalMallIcon/> <span>order</span>
        </div>
        <div className="logint__in" style={{display:"flex",textAlign:"center"}} >
            <AccountCircleIcon/> my account
        </div>
        </div>
    )
}

export default LoginT;