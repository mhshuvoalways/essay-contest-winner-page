import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__social">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="footer__social__para">
                            <p>
                                This is a platform to express and share feelings, experiences to make our life better. Everyone is welcome to contribute in this forum as far as it’s not harming other’s sentiments. Let’s make the world better place to stay by sharing “words”.</p>
                            <p>Contact us: monomousumi18@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="footer__social__social">
                            <h4>Social Media</h4>
                            <hr />
                            <div className="footer__social__icon">
                                <a target="_blank" href="
                                https://www.facebook.com/Monomousumi" rel="noopener noreferrer"><i className="footer__social-media fab fa-facebook"></i></a>
                                <a target="_blank" href="
                                https://www.instagram.com/monomousumi" rel="noopener noreferrer"><i className="footer__social-media fab fa-instagram"></i></a>
                                <a target="_blank" href="
                                https://www.youtube.com/channel/UCBztOuTpBK2ONIBLlNo0Nkw" rel="noopener noreferrer"><i className="footer__social-media fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
