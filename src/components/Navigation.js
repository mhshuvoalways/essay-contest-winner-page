import React, { useState } from 'react';
import Logo from '../assets/images/others/logo.png';

const Navigation = () => {
    const [state, setState] = useState({ show: false });

    return (
        <nav className="navbar navbar-expand-lg navbar-light our-nav fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="our-nav__img" src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setState({ show: !state.show })}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${state.show ? 'collapse__show' : 'collapse__hide'}`}>
                    <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Dates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Awards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Magazine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">Guideline </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active nav__item-color" aria-current="page" href="/">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
