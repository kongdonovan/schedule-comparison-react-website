import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function AccountContainer({setLoginState}) {
    return(
        <div className="flex space-x-14 justify-center login-signup-window mt-40">
            <LoginForm loginState={setLoginState}></LoginForm>
            <SignupForm loginState={setLoginState}></SignupForm>
        </div>
    )
}

export default AccountContainer;