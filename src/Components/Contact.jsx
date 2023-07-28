import React, { useRef } from 'react'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
                            <img src="https://n9k9k9a4.rocketcdn.me/wp-content/uploads/2021/04/con2.png" alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h3 style={{ color: '#000' }}> Get a Quote</h3>

                            {/* <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Email</label>
                                <input type="email" name="email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form> */}
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