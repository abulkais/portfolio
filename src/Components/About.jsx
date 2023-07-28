import React from 'react'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <section className='about-sec' id='about'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>

                            <img src="https://newtemplate.net/demo/resume/template/default/images/about-image.png" alt="" />

                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <h3>About Me</h3>
                                <h5>Web Developer</h5>
                                <p>I am a skilled Web Developer with a passion for creating dynamic and user-friendly websites. Proficient in HTML, CSS, JavaScript, and Bootstrap, I craft visually appealing and responsive web pages. My expertise extends to backend development with MySQL and Core Java, enabling robust database management and server-side functionality. Additionally, I leverage React for building interactive and seamless user interfaces. My proficiency in Git ensures efficient version control and collaborative development. With a strong commitment to staying updated with the latest industry trends, I strive to deliver exceptional digital experiences.</p>
                                <hr />
                                <ul class="list-inline about-info">
                                    {/* <li> <span>Name :</span> <p>Abul kaish</p> </li> */}
                                    <li> <span>Email :</span> <p><a href="mailto:sadiq@example.com">abulkaish827@gmail.com</a></p> </li>
                                    <li> <span>Number :</span> <p> <a href="tel:+91 8271057255">+91 8271-057-255</a> </p> </li>
                                    <li> <span>Designation :</span> <p>Web Developer {'</>'}</p> </li>
                                    <li><span>Address : </span><p>New Ashok Nagar, Delhi 96</p></li>
                                    <li style={{width:'100%'}}><span>Hobbies : </span><p><b>1.</b> Coding <b>2.</b> Reading books</p>  </li>
                                </ul>
                              
                                <Link  className='banner-btn btn-color' to="webdeveloper.pdf" target="_blank" download>Resume</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About