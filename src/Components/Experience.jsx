import React from 'react'

const Experience = () => {
    return (
        <>

            <section className='experience_sec' id='experience'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3>Amazing <span>experience</span> with those companies</h3>
                            <p>Thrilling experience with Top software development companies! They delivered cutting-edge solutions, exceeding expectations. Exceptional teamwork, agile methodologies, and unmatched expertise led to flawless products. Highly satisfied with their professionalism and commitment. Would eagerly recommend!</p>
                            <a href='#contact' className='banner-btn btn-color'>Contact Now!</a>
                        </div>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='experience_sec_inner'>
                                        <a target='blank' href="https://webscruise.com">
                                            <img src="https://webscruise.com/media/logo-dark.png" alt="" />
                                            <h5>WEBSCRUISE</h5>
                                        </a>
                                        <h5>2021 - 2022</h5>
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div className='experience_sec_inner'>
                                        <a target='blank' href="https://sisgain.com">
                                            <img src="https://sisgain.ae/assets/images/main_logo.webp" alt="" />
                                            <h5>SISGAIN</h5>
                                        </a>

                                        <h5>2022 - Present</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Experience