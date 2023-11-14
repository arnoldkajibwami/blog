import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"

import "./footer.css"

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <Link to="/admin/dashboard"><h3>Blog</h3></Link>
                                    <p>
                                        BLOG <br />
                                        KINSHASA/RDC<br /><br />
                                        <strong>Phone:</strong> +243 999 888 777<br />
                                        <strong>Email:</strong> blog@congo.cd<br />
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i><BiLogoFacebook /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i><BiLogoInstagram /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i><BiLogoTwitter /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i><BiLogoLinkedin /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Links</h4>
                                <ul>
                                    <li><Link to="/ " onClick={BackToTOP} className="nav-links"> Home</Link></li>
                                    <li><Link to="/about " onClick={BackToTOP} className="nav-links"> Apropos</Link></li>
                                    <li><Link to="/Articles" onClick={BackToTOP} className="nav-links"> Articles</Link></li>
                                    <li><Link to="/contact " onClick={BackToTOP} className="nav-links"> contact</Link></li>
                                    <li><Link to="/login " onClick={BackToTOP} className="nav-links"> Log In</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div onClick={BackToTOP} className="m-3 backtotop">
                            <button className="buttonfooter">
                                <div class="text">
                                    <span>Back</span>
                                    <span>to</span>
                                    <span>top</span>
                                </div>
                                <div class="clone">
                                    <span>Back</span>
                                    <span>to</span>
                                    <span>top</span>
                                </div>
                                <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <strong><span><Link to="www.sudkivu.cd" className="Madename">Blog</Link></span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made by <Link to="https://auctux.com/" className="Madename">Auctux</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}