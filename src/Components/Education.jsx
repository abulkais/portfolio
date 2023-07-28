import React from 'react'

const Education = () => {
    return (

        <>
            <section id='education'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-3'>
                            <h3>Education Details</h3>
                        </div>
                        <div className='col-md-3'>
                            <div className='education_inner'>
                                <h4>2019 - 2022</h4>
                                <p><b>BCA  - </b> Monad University, Noida (UP)</p>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>Percentage 70% </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='education_inner'>
                                <h4>2017 - 2019</h4>
                                <p><b>12<sup>th</sup> (PCM) - </b> BSS College, Supaul (Bihar)</p>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width:'62%'}}>Percentage 62% </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='education_inner'>
                                <h4>2016 - 2017</h4>
                                <p><b>10<sup>th</sup> - </b> Williams High School, Supaul (Bihar)</p>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{width:'68%'}}>Percentage 68% </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;