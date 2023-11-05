import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Contact.css'
import axios from 'axios'
function Contact(){
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userMessage: '',
    });
    const [errors, setErrors] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const contactMessage = async(message)=>{
        try{
            //console.log(message)
            const baseURL = process.env.REACT_APP_API_CLIENT_URL;
            const url = `${baseURL}/contact`;
            const data = axios.post(url, {info : message})
            .then((res)=>{
                if(res.status === 201){
                    setIsSent(true)
                    return res.data
                }else{
                    return setErrors(true)
                }
            })
        }catch(err){
            console.error(err)
            setErrors(true)
        }
    }

    const handleinputsChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value,});
    };
    
    const validatePhoneNumber = (value) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(value);
    };
    
    const handleSend = (e) => {
        e.preventDefault();
        const phoneNumberIsValid = validatePhoneNumber(formData.userPhoneNumber);
        if (!phoneNumberIsValid) {
            setErrors(true);
            document.getElementById('userPhoneNumber').style.border = '2px solid red'
            errors? toast.error('Please enter a valid phone number.') :  console.log('');
            return 
        }
        document.getElementById('userPhoneNumber').style.border = 'none'
        setErrors(false);
        contactMessage(formData)
        isSent? toast.success(`Message sent successfully`) :  console.log('');
        errors? toast.error('Please try again.') :  console.log('');
        setFormData({ userName: '',  userEmail: '', userPhoneNumber: '',userMessage: '' });
    }

    return(
        <div id='contact' >
            <h2 className='text-center'>Get In Touch</h2>
            <div className='container my-2 '>
                <form onSubmit={handleSend} id='contForm' className='row w-100'>
                    <span className='col-md-6 col-sm-12'>
                        <input onChange={handleinputsChange} className='px-2 ' type="text" required value={formData.userName} id="userName" name="userName"  placeholder='Full Name *'/>
                        <input onChange={handleinputsChange} className='px-2 ' type='email' required value={formData.userEmail} id='userEmail' name='userEmail' placeholder='Email *'/>
                        <input onChange={handleinputsChange} className='px-2 ' type='text' required value={formData.userPhoneNumber} id='userPhoneNumber' name='userPhoneNumber' placeholder='Phone Number *'/>
                        <button className='btn ' type='submit'>Send</button>
                    </span>
                    <span className='col-md-6 col-sm-12'>
                        <textarea onChange={handleinputsChange} className='px-2' required value={formData.userMessage} id="userMessage" name="userMessage" placeholder='Message *'/>
                    </span>
                </form>
            </div>
            <div className='rights py-2'>Last update 05-11-2023 ©️ Jamal Boujbari Portfolio</div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default Contact;