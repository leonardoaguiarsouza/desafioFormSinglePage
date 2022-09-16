import { useEffect, useState } from 'react'

import './App.css'
import CustomInput from './components/CustomInput'
import Header from './components/Header'

function App() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [birthday, setBirthday] = useState();
    const [termsAccepted, setTermsAccepted] = useState(false);

    const [isNameValid, setIsNameValid] = useState();
    const [isEmailValid, setIsEmailValid] = useState();
    const [isPhoneValid, setIsPhoneValid] = useState();
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [isBirthdayValid, setIsBirthdayValid] = useState();
    const [areTermsAccepted, setAreTermsAccepted] = useState();

    const nameRegex = new RegExp('');
    const emailRegex = new RegExp("^[a-z0-9]+([\\.-]?[a-z0-9]+)*@[a-z0-9]+([\\.-]?[a-z0-9]+)*(\\.\\w{2,3})+$");
    const passwordRegex = new RegExp('');
    const birthdayRegex = new RegExp('');
    const phoneRegex = new RegExp('');

    function handleSubmit(e) {
        e.preventDefault();

        setIsNameValid(nameRegex.test(name));
        setIsEmailValid(emailRegex.test(email));
        setIsPhoneValid(phoneRegex.test(phone));
        setIsPasswordValid(passwordRegex.test(password));
        setIsBirthdayValid(birthdayRegex.test(birthday));
        setAreTermsAccepted(termsAccepted);

        if (
            isNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isPasswordValid &&
            isBirthdayValid &&
            areTermsAccepted
        ) {
            document.querySelector("form").submit();
        }
    }

    return (
        <div className="box">
            <Header />

            <form onSubmit={e => handleSubmit(e)}>
                <div className="fields">
                    <div className="inputGroup">
                        <CustomInput type="text" label="Full Name" /*required={true}*/ placeholder="Name" validate={{ text: "Fullname Invalid", handler: isNameValid }} handleChange={setName} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="email" label="Email" /*required={true}*/ placeholder="foo@bar.com" validate={{ text: "Email Invalid", handler: isEmailValid }} handleChange={setEmail} />
                        <CustomInput type="number" label="Phone" /*required={false}*/ placeholder="(83) 00000-0000" validate={{ text: "Phone Invalid", handler: isPhoneValid }} handleChange={setPhone} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="password" label="Password" /*required={true}*/ placeholder="Enter your password" validate={{ text: "Password Invalid", handler: isPasswordValid }} handleChange={setPassword} />
                        <CustomInput type="date" label="Birthday" /*required={true}*/ validate={{ text: "Age Invalid", handler: isBirthdayValid }} handleChange={setBirthday} />
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttonGroup">
                        <CustomInput type="checkbox" validate={{ text: "You must accept the terms", handler: areTermsAccepted }} handleChange={setTermsAccepted} />
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default App
