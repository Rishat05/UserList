import React, { useContext } from 'react';
import { UserContext } from '../App';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;

        const data = { name, password, phone, email };
        //console.log(data);
        if (data.name && data.password && data.phone && data.email) {

            setUserData([...userData, data]);
            navigate('/showdata');
        }

        e.target.name.value = '';
        e.target.password.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
    }

    const handleDeleteForm = () => {
        document.getElementById('form-row').style.display = 'none';
    }
    const handleForm = () => {
        document.getElementById('form-row').style.display = 'block';
    }
    const handlePassword = (e) => {

        const strongPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const weakPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{8,}$/

        if (strongPass.test(e.target.value)) {
            document.getElementById('password').style.outlineColor = 'green';
        }
        else if (weakPass.test(e.target.value)) {
            document.getElementById('password').style.outlineColor = 'yellow';
        }
        else {
            document.getElementById('password').style.outlineColor = 'red';

        }
    }
    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            document.getElementById('email').style.outlineColor = 'green';
        }
        else {
            document.getElementById('email').style.outlineColor = 'red';
        }
    }

    const handlePhoneNumber = (e) => {
        const phoneRegEx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
        if (phoneRegEx.test(e.target.value)) {
            document.getElementById('phone-number').style.outlineColor = 'green';
        }
        else {
            document.getElementById('phone-number').style.outlineColor = 'red';
        }
    }
    return (
        <div className='w-75 mx-auto'>

            <form className={`my-5`} onSubmit={handleSubmit} >
                <div id='form-row'>
                    <div className='d-flex justify-content-between'>
                        <input type="text" placeholder='Username' name='name' className='border rounded' required />
                        <input type="text" placeholder='Password' name='password' className='border rounded' required onChange={handlePassword} id='password' />
                        <input type="text" placeholder='Phone' name='phone' className='border rounded' required onChange={handlePhoneNumber} id='phone-number' />
                        <input type="text" placeholder='Email' name='email' className='border rounded' required onChange={handleEmail} id='email' />
                        <button type="button" className="btn btn-outline-danger border-0" onClick={handleDeleteForm}><FontAwesomeIcon icon={faCircleXmark} size='xl'></FontAwesomeIcon></button>
                    </div>
                </div>

                <button className='my-2 btn btn-outline-primary border-0 d-flex justify-content-start' onClick={handleForm}>
                    <FontAwesomeIcon icon={faCirclePlus} size='xl' />
                    <p className='ms-2'>Add More</p>
                </button>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button className='my-1 mx-2 btn btn-outline-primary border-0' onClick={handleForm}>Import</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;