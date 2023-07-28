import React from 'react';

const Header = () => {
    return (
        <>

           
                <nav className="navbar navbar-expand-lg navbar-light header-area">
                    <div className="container">
                        <a className="navbar-brand" href="#" style={{color:'#fff'}}>Kaish</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                <li className="nav-item">
                                    <a className="nav-link " href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#technologies">Technologies </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#education">Education </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-btn" href="#contact">Get a Quote </a>
                                </li>



                            </ul>

                        </div>
                    </div>

                </nav>
            

        </>
    )
}

export default Header;