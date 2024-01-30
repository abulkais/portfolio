import React, { useRef } from 'react'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import contactImg from '../contact-girl.webp';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_svjmpsg', 'template_36di0pb', form.current, '4jOPDvn-6uvyRBRbZ')
            .then((result) => {
                console.log(result.text);
                alert('Message sent');
                 window.location.reload(true);

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <section className='contact_sec' id='contact'>
                <div className='container'>
                    <div className='row'>
                        {/* <h3>Have a project on Mind?</h3> */}
                        <div className='col-md-6'>
                            <img src={contactImg} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h3 style={{ color: '#000' }}> Get a Quote</h3>


                            <form ref={form} onSubmit={sendEmail}>

                                <div className="mb-4">
                                   
                                    <input type="text" name='name' className="form-control" placeholder='Name' autoComplete='off' required />

                                </div>

                                <div className="mb-4">
                                  
                                    <input type="email" name='email' className="form-control" placeholder='Email'  autoComplete='off'  required/>

                                </div>

                                <div className="mb-4">
                                   
                                    <input type="tel" name='number' className="form-control" placeholder='Number'  autoComplete='off' required/>
                                </div>
                                <div className="mb-4">
                                  
                                    <input type="text" name='subject' className="form-control" placeholder='Subject'  autoComplete='off' required/>
                                </div>
                                <div className="mb-4">
                                    
                                    <textarea  style={{height:'auto'}} name="message" id="" className="form-control"  autoComplete='off' rows="3" placeholder='Message(Optional)'></textarea>
                                </div>

                                <button type="submit" value="Send"  className="banner-btn btn-color w-100" style={{padding:'15px 0px'}}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact