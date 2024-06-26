import React from 'react'
import MyPDF from './ReactJSDeveloper.pdf';

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

                            <h3>About Me</h3>
                            <h5> Frontend Developer</h5>
                            <p>I am a skilled Web Developer with a passion for creating dynamic and user-friendly websites. Proficient in <mark><b>HTML, CSS, JavaScript, Bootstrap, ReactJS and Redux</b></mark>, I craft visually appealing and responsive web pages. My expertise extends to backend development with <mark><b>Java, and SQL(MySql)</b></mark> enabling robust database management and server-side functionality. Additionally, I leverage React for building interactive and seamless user interfaces. My proficiency in Git ensures efficient version control and collaborative development. With a strong commitment to staying updated with the latest industry trends, I strive to deliver exceptional digital experiences.</p>
                            <hr />
                            <ul class="list-inline about-info">

                                <li> <span>Email :</span> <p><a href="mailto:sadiq@example.com">abulkaish827@gmail.com</a></p> </li>
                                <li> <span>Number :</span> <p> <a href="tel:+91 8271057255">+91 8271-057-255</a> </p> </li>
                                <li> <span>Designation :</span> <p> ReactJS Developer {'</>'}</p> </li>
                                <li><span>Address : </span><p>New Ashok Nagar, Delhi 96</p></li>
                                <li style={{ width: '100%' }}><span>Hobbies : </span><p><b>1.</b> Programming <b>2.</b> Reading Books</p>  </li>
                            </ul>

                        
                            <a href={MyPDF} download="resume.pdf" className='banner-btn btn-color' > Download Resume </a>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About