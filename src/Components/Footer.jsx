import React from 'react'

const Footer = () => {
    return (
        <section className='footer pt-4 pb-2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <p>© Copyright 2024 All Rights Reserved.</p>
                    </div>
                    <div className='col-md-6'>
                       <div className='d-flex' style={{gap:'40px', float:'right'}}>
                        <a href='https://github.com/abulkais' className='fa fa-github'> GitHub</a>
                        <a href='https://www.linkedin.com/in/abul-kaish' className='fa fa-linkedin'> Linked-in</a>
                        <a href='https://www.instagram.com/abul_kaish_' className='fa fa-instagram'> instagram</a>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer