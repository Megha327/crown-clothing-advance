import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss'; 
import Button from "../button/Button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const { setCurrentUser } = useContext(UserContext);  //not use anymore

    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    
    const resetFormFileds = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password does not match");
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            // setCurrentUser(user);
           
            await createUserDocumentFromAuth(user, {displayName});

            resetFormFileds();


        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("can not create user, its already in use");
            }else{
                console.log("user creation encountred an error", error);
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value} )
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>signup with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label = "Display Name"  
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name = "displayName" 
                    value={displayName}
                />
                
                <FormInput label="Email" type="email" required onChange={handleChange} name = "email" value={email}/>
                
                <FormInput label="Password"  type="password" required onChange={handleChange} name = "password" value={password}/>

                <FormInput label="Confirm Password"  type="password" required onChange={handleChange} name = "confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;