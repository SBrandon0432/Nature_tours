import React from "react";
import Logo from '../../Assets/img/logo-green-2x.png'

const Footer = ( ) => {



  return (
    <section className="footer">
    <div className="footer__logo-box">
        <img src={Logo} className="footer__logo" alt="Full Logo"/>
    </div>
    <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="https://github.com/SBrandon0432" className="footer__link"> Company </a></li>
                    <li className="footer__item"><a href="https://www.linkedin.com/in/sam-brandon/" className="footer__link"> Contact us </a></li>
                    <li className="footer__item"><a href="https://github.com/SBrandon0432" className="footer__link"> Carriers </a></li>
                    <li className="footer__item"><a href="https://github.com/SBrandon0432" className="footer__link"> Privacy policy </a></li>
                    <li className="footer__item"><a href="https://github.com/SBrandon0432" className="footer__link"> Terms </a></li>
                </ul>
            </div>
        </div>

        <div className="col-1-of-2">
            <p className="footer__copyright">
                Build By <a className="footer__link" href="https://github.com/SBrandon0432"> Sam Brandon    </a>
                  Currently Seeking job opportunity as a Frontend software engineer. Check out my
                <a className="footer__link" href="https://www.linkedin.com/in/sam-brandon/"> Linkedin </a>
                for contact information and
                <a className="footer__link" href="https://www.linkedin.com/in/sam-brandon/overlay/1635478557658/single-media-viewer/"> resume. </a>

                Check out some of my other current work in Three.js as well
                <a className="footer__link" href="https://master.d258lkzp17ij6b.amplifyapp.com/">
                    right here!
                </a>


            </p>
        </div>
    </div>

</section>
  )
}


export default Footer;
