import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {reactLocalStorage} from 'reactjs-localstorage';
import history from '../history';

import CustomTopNavigation from '../components/topnavigation';
import { accountData } from '../data.js'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Hydra from '../asset/hydra.png'

// import {
//     Program, Provider, web3
//   } from '@project-serum/anchor';


// import { Connection, PublicKey } from '@solana/web3.js';
// const { SystemProgram, Keypair } = web3;
// if (reactLocalStorage.get("publicKey") == null || reactLocalStorage.get("publicKey") == "") {
//     const baseAccount = Keypair.generate();
//     reactLocalStorage.set("publicKey", baseAccount.publicKey);
//     reactLocalStorage.set("secretKey", JSON.stringify(Array.from(baseAccount.secretKey)))
// } else {
//     history.push('/dashboard');
// }

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white",
        fontFamily: "Open-Sans",
        width: "100%",
    }
})

export default function Landing() {
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [account, setAccount] = useState([])

    const login = () => {
        for (let i =0; i<accountData.length ; i++) {
            if (accountData[i].username == username && accountData[i].password == password) {
                reactLocalStorage.set("account", JSON.stringify(accountData[i]))
                setAccount(accountData[i])
                history.push('/dashboard')
                return
            }
        }
        alert("Invalid username or password")
    }

    const signup = () => {
        history.push('/signup')
    }

    return (
        <div>
            <CustomTopNavigation title={"Login"} loginPage={true}/>
            <div style={{margin: 10}}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                    
                    <div style={{height: "20vh"}}></div>
                    <img src={Hydra} style={{height: "20vh", marginBottom: "20vh"}} />
                    <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            style={{marginBottom:20}}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            style={{marginBottom:20}}
                        />
                    </div>
                    <div style={{display: "flex", flexDirection: "row", padding: 5, width: "80%", justifyContent: "space-between"}}>
                        <Button variant="contained" classes={{root: classes.root}} onClick={()=>{login()}}>Login</Button>
                        <div style={{width: "5vw"}}></div>
                        <Button variant="contained" classes={{root: classes.root}} onClick={()=>{signup()}}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
