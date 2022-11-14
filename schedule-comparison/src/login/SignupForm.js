import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Input from "./Input";

function SignupForm({ loginState }) {
    const [text, setText] = useState("Sign up");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    return(
        <form className="p-8 login-window text-center w-1/6 bg-neutral-300 dark:bg-neutral-800 rounded-lg" onSubmit={(event) => {
            // implement database functionality for sign up
            event.preventDefault();
            let data = new FormData();
            data.append("user", user);
            data.append("pass", pass);
            fetch("http://localhost:8000/signup", {method: "POST", body: data, credentials: "include"})
                .then(statusCheck)
                .then(res => res.text())
                .then(res => {
                    loginState(true);
                    setText(res);
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                })
                .catch(res => {
                    setText(res.message);
                    setTimeout(() => {
                        setText("Sign up");
                    }, 1000);
                });
        }}>
            <h1 className="text-5xl dark:text-neutral-200">{text}</h1>
            <hr className="border-neutral-800 dark:border-neutral-200 mx-auto mt-8 mb-5 w-8"></hr>
            <Input name="Username" type="text" changeState={setUser}></Input>
            <Input name="Password" type="password" changeState={setPass}></Input>
            <button className="w-3/5 dark:text-neutral-800 p-3 mt-3 rounded-lg bg-neutral-200 dark:bg-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-100">Sign up</button>
        </form>
    )
}

/**
 * checks a fetch response to make sure status is ok
 * @param {Response} res - the response object attained by fetch
 * @returns the response object, or an error if res is not ok
 */
async function statusCheck(res) {
    if (!res.ok) {
        throw new Error(await res.text());
    }
    return res;
}

export default SignupForm;