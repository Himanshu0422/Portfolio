import React, { forwardRef, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import coding from './../assets/coding.jpeg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-hot-toast';

const ContactMe = forwardRef((props, externalRef) => {
    const form = useRef();
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        form.current.reset();

        emailjs
            .send('service_68pzrcv', 'template_ce75tp7', data, 'hNBZbW44Wr4i6nFsW')
            .then(
                () => {
                    toast.success('Thanks for reaching out! I\'ll get back to you soon.');
                    console.log('SUCCESS!');
                },
                (error) => {
                    toast.error('Oops! Something went wrong. Please try again later.')
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.div
            className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16 mb-32'
            ref={externalRef}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                hidden: { opacity: 0, scale: 0.5 }
            }}
        >
            <div ref={ref}>
                <div className='text-2xl'>Contact Me</div>
                <div className="line mt-2"></div>
            </div>
            <div className='flex items-center justify-evenly'>
                <img src={coding} alt='a boy coding' className='h-60 max-sm:hidden image rounded-2xl' />
                <div>
                    <form className='flex flex-col gap-5 text-sm' onSubmit={sendEmail} ref={form}>
                        <input className='input h-10 p-4 w-[300px] rounded-md' placeholder='Name*' name='from_name' required />
                        <input className='input h-10 p-4 rounded-md' placeholder='Email id*' type='email' name='to_email' required />
                        <textarea className='input h-24 p-4 rounded-md' placeholder='Message*' name='message' required />
                        <button className='flex mt-10 justify-center items-center cursor-pointer max-sm:text-sm text-white h-12 rounded-2xl navbut'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center items-center gap-10 mt-4'>
                <a href="https://leetcode.com/himanshu1571/">
                    <i className="fa-solid fa-code text-2xl"></i>
                </a>
                <a href="https://github.com/himanshu0422">
                    <i className="fa-brands fa-github text-2xl"></i>
                </a>
                <a href="mailTo:himanshumittal035@gmail.com">
                    <i className="fa-solid fa-envelope text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/himanshumittal035/">
                    <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
            </div>

        </motion.div>
    )
});

export default ContactMe;
