import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <p>© Copyright 2023</p>
                    </div>
                    <div className='col-md-6'>
                       <div className='d-flex' style={{gap:'40px', float:'right'}}>
                        <a href='' className='fa fa-facebook'> Facebook</a>
                        <a href='' className='fa fa-linkedin'> Linked-in</a>
                        <a href='' className='fa fa-instagram'> instagram</a>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer