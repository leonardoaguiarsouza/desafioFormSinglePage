import { useEffect, useState } from 'react'

import './styles.css'
import Box from '../../components/Box'
import CustomInput from '../../components/CustomInput'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const [name, setName] = useState(localStorage.getItem('name') ?? '');
    const [email, setEmail] = useState(localStorage.getItem('email') ?? '');
    const [phone, setPhone] = useState(localStorage.getItem('phone') ?? '');
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState(localStorage.getItem('birthday') ?? '');
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

    const dateValidation = (birthdayDate) => {
        let currentDate = new Date();

        return Math.abs(new Date(birthdayDate).getFullYear() - currentDate.getFullYear()) < 121 ?? false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsNameValid(nameRegex.test(name));
        setIsEmailValid(emailRegex.test(email));
        setIsPhoneValid(phoneRegex.test(phone.replace(/[^\d]/g, ''))); // pega o valor do campo sem a mask
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
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('phone');
            localStorage.removeItem('birthday');
            navigate("/sucess", {state: true});
        }
    }, [
        isNameValid,
        isEmailValid,
        isPhoneValid,
        isPasswordValid,
        isBirthdayValid,
        areTermsAccepted
    ]);

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('birthday', birthday);
    }, [
        name,
        email,
        phone,
        birthday,
    ]);

    return (
        <Box>
            <form onSubmit={e => handleSubmit(e)}>
                <Header>
                    <strong>Intern Sign Up</strong>
                </Header>

                <div className="fields">
                    <div className="inputGroup">
                        <CustomInput type="text" value={name} label="Full Name" required={true} placeholder="Name" validate={{ text: "Fullname Invalid", handler: isNameValid }} handleChange={setName} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="email" value={email} label="Email" required={true} placeholder="foo@bar.com" validate={{ text: "Email Invalid", handler: isEmailValid }} handleChange={setEmail} />
                        <CustomInput type="text" value={phone} label="Phone" mask="(99) 9 9999-9999" required={false} placeholder="(83) 00000-0000" validate={{ text: "Phone Invalid", handler: isPhoneValid }} handleChange={setPhone} />
                    </div>
                    <div className="inputGroup">
                        <CustomInput type="password" label="Password" required={true} placeholder="Enter your password" validate={{ text: "Password Invalid", handler: isPasswordValid }} handleChange={setPassword} />
                        <CustomInput type="date" value={birthday} label="Birthday" required={true} validate={{ text: "Age Invalid", handler: isBirthdayValid }} handleChange={setBirthday} />
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