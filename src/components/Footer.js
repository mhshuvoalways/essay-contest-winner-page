import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="footer__social__para">
              <p>
                Mononomosuumi is an Indian Edutech Platform, that brings
                together technology to the education sector and providing
                requisite support to students, writers and school
                administrations. It provides writing related extracurricular
                activities accessible through technology-driven solutions.
              </p>
              <p>Contact us: essay.monomousumi@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="footer__social__social">
              <h4>Social Media</h4>
              <hr />
              <div className="footer__social__icon">
                <a
                  target="_blank"
                  href="
                                https://www.facebook.com/Monomousumi"
                  rel="noopener noreferrer"
                >
                  <i className="footer__social-media fab fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="
                                https://www.instagram.com/monomousumi"
                  rel="noopener noreferrer"
                >
                  <i className="footer__social-media fab fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="
                                https://twitter.com/monomousumi_mk"
                  rel="noopener noreferrer"
                >
                  <i className="footer__social-media fab fa-pinterest"></i>
                </a>
                <a
                  target="_blank"
                  href="
                                https://www.youtube.com/channel/UCBztOuTpBK2ONIBLlNo0Nkw"
                  rel="noopener noreferrer"
                >
                  <i className="footer__social-media fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
