import { useEffect, useState } from 'react'

import './styles.css'
import Box from '../../components/Box'
import CustomInput from '../../components/CustomInput'
import Header from '../../components/Header'

function Home() {
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

    const nameRegex = new RegExp("^.*(?=.{4,})(?=.*\\s)(?=.*[a-zA-Z]).*$");
    const emailRegex = new RegExp("^[a-z0-9]+([\\.-]?[a-z0-9]+)*@[a-z0-9]+([\\.-]?[a-z0-9]+)*(\\.\\w{2,3})+$");
    const passwordRegex = new RegExp("^\\d{6,9}$");
    const phoneRegex = new RegExp("^\\d{11,11}$");

    function dateValidation(birthdayDate) {
        let currentDate = new Date();

        return Math.abs(new Date(birthdayDate).getFullYear() - currentDate.getFullYear()) < 121 ?? false;
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsNameValid(nameRegex.test(name));
        setIsEmailValid(emailRegex.test(email));
        setIsPhoneValid(phoneRegex.test(phone));
        setIsPasswordValid(passwordRegex.test(password));
        setIsBirthdayValid(dateValidation(birthday));
        setAreTermsAccepted(termsAccepted);
    }

    useEffect(() => {
        if (
            isNameValid === true &&
            isEmailValid === true &&
            isPhoneValid === true &&
            isPasswordValid === true &&
            isBirthdayValid === true &&
            areTermsAccepted === true
        ) {
            document.querySelector("form").submit();
        }
    }, [
        isNameValid,
        isEmailValid,
        isPhoneValid,
        isPasswordValid,
        isBirthdayValid,
        areTermsAccepted
    ]);

    return (
        <Box>
            <form action="/sucess" method="GET" onSubmit={e => handleSubmit(e)}>
                <Header>
                    <strong>Intern Sign Up</strong>
                </Header>

                <div className="fields">
                    <div className="inputGroup">
                        <CustomInput type="text" label="Full Name" required={true} placeholder="Name" validate={{ text: "Fullname Invalid", handler: isNameValid }} handleChange={setName} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="email" label="Email" required={true} placeholder="foo@bar.com" validate={{ text: "Email Invalid", handler: isEmailValid }} handleChange={setEmail} />
                        <CustomInput type="number" label="Phone" required={false} placeholder="(83) 00000-0000" validate={{ text: "Phone Invalid", handler: isPhoneValid }} handleChange={setPhone} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="password" label="Password" required={true} placeholder="Enter your password" validate={{ text: "Password Invalid", handler: isPasswordValid }} handleChange={setPassword} />
                        <CustomInput type="date" label="Birthday" required={true} validate={{ text: "Age Invalid", handler: isBirthdayValid }} handleChange={setBirthday} />
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttonGroup">
                        <CustomInput type="checkbox" validate={{ text: "You must accept the terms", handler: areTermsAccepted }} handleChange={setTermsAccepted} />
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </Box>
    )
}

export default Home