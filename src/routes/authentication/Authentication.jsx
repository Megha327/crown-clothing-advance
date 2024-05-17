// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
import SignInForm from "../../components/sign-in-form/Sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
// import { auth, signInwithGooglePopup, signInwithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './authentication.styles.scss';


const Authentication = () => {

   
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm/>
        </div>
    )
}

export default Authentication;