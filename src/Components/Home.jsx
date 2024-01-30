import React from 'react'

const Home = () => {
    return (
        <>
            <div className='home-area' id='home'>
                <div className='container h-100' style={{ marginTop: '200px' }}>
                    <div className='row h-100'>
                        <div className='col-12 col-md-7 home-content'>
                            <h5>Hello, my name is <strong>Abul Kaish</strong></h5>
                            <h1>I'm a <strong>Developer {'</>'}</strong></h1>
                           <p>Experienced Developer proficient in various technologies. Passionate about problem-solving and creating efficient solutions. Constantly learning and adapting to deliver high-quality software products.</p>
                            <div style={{display:'flex', gap:'30px'}}>
                            <a className='banner-btn' href="#about"> About me</a>
                            </div>
                        </div>
                    </div>
                    <div class="image-item row h-100 align-items-center"> <img src="https://newtemplate.net/demo/resume/template/default/images/big-profile.png" alt=""/> </div>
                </div>
            </div>


        </>
    )
}

export default Home