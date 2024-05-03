// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
import SignInForm from "../../components/sign-in-form/Sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
// import { auth, signInwithGooglePopup, signInwithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './authentication.styles.scss';


const Authentication = () => {

    // useEffect(() => async () =>{
    //     const response =  await getRedirectResult(auth);
    //     console.log("response:", response);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);


    /*comment out code for login from google popup in authentication page */
    // const logGoogleUserWithPopup = async() => {
    //     const {user} = await signInwithGooglePopup();
    //     console.log("response with google popup", user);
    //     const userDocRef  = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUserWithPopup}>Sign in with google Popup</button> */}
            <SignInForm />
            <SignUpForm/>
            {/* <button onClick={signInwithGoogleRedirect}>Sign in with google Redirect</button> */}
        </div>
    )
}

export default Authentication;