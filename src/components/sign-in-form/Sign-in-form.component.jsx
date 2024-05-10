import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInwithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss'; 
import Button, { BUTTON_TYPE_CLASSESS } from "../button/Button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
 
    const resetFormFileds = () => {
        setFormFields(defaultFormFields);
    }


    const signInWithGoogle = async() => {
        await signInwithGooglePopup();
        // const {user} = await signInwithGooglePopup();
        // createUserDocumentFromAuth(user); // move to user context file.
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFileds();
        }catch(error){
            if(error.code === 'auth/invalid-credential'){
                alert("inCorrect password or email");
            }else{
                console.log(error);
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value} )
    }
    

    return (
        <div className="sign-in-container">
            <h2>Already have an Account?</h2>
            <span>signIn with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name = "email" value={email}/>
                
                <FormInput label="Password"  type="password" required onChange={handleChange} name = "password" value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick = {signInWithGoogle} buttonType={BUTTON_TYPE_CLASSESS.google}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;