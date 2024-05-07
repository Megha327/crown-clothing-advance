/*
    default button

    inverted vutton

    google sign in button

*/

import { BaseButton, GoogleSigninButton, InvertedButton } from "./button.styles";

// import './button.styles.scss';

export const BUTTON_TYPE_CLASSESS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSESS.base) => (
    {
        [BUTTON_TYPE_CLASSESS.base]: BaseButton,
        [BUTTON_TYPE_CLASSESS.google]: GoogleSigninButton,
        [BUTTON_TYPE_CLASSESS.inverted]: InvertedButton
    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return(
        <CustomButton
            {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default Button;

