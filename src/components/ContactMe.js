import React from 'react';
import coding from './../assets/coding.jpeg';

const ContactMe = () => {
    return (
        <div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16 mb-32'>
            <div>
                <div className='text-2xl'>Contact Me</div>
                <div className="line mt-2"></div>
            </div>
            <div className='flex items-center justify-evenly'>
                <img src={coding} alt='a boy coding' className='h-60 max-sm:hidden image rounded-2xl' />
                <div>
                    <div className='flex flex-col gap-5 text-sm'>
                        <input className='input h-10 p-4 w-[300px] rounded-md' placeholder='Name*' />
                        <input className='input h-10 p-4 rounded-md' placeholder='Email id*' type='email' />
                        <textarea className='input h-24 p-4 rounded-md' placeholder='Message*' />
                    </div>
                    <div className='flex mt-10 justify-center items-center cursor-pointer max-sm:text-sm text-white h-12 rounded-2xl navbut'>
                        Send
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
