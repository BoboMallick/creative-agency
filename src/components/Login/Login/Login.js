import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
firebase.initializeApp(firebaseConfig)
const Login = () => {
    //User LoggedIn Context 
    // User Information State
    const [user,setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL:'',
    });

    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const history = useHistory();
    const  location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    // Google Sign In
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then( res => {
           const {displayName,email,photoURL} = res.user;
           const userInfo = {
               isSignIn: true,
               name: displayName,
               email: email,
               photoURL:photoURL,
           }
           setUser(userInfo);
           setLoggedInUser(userInfo);
           storeAuthToken();
           history.replace(from);
          })
          .catch( error => {
           console.log(error);
          });
    }
    const storeAuthToken=() => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

  
    return (
        
        <div className="mt-5">
        <Link to="/" className='text-white logo pt-5 pb-5'><img className="logo" src={logo} alt="" /></Link>            
        <div className="login mt-5">    
            <h2 className="mb-5" style={{textAlign: "center"}}>Login with</h2>
            <img className="justify-content-start google" src={require('../../../images/logos/google2.png')} alt="" />       
            <button onClick={handleGoogleSignIn} className="btn_g">Continue with google</button>
        </div>
    </div>
    );
};

export default Login;