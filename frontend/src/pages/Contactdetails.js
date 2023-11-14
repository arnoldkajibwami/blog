import React from "react";
import ImageContact from "../images/blog.jpg"
import './contact.css'

export default function Contactdetails() {
    return (
        <>
            <section id="contact" className="mt-5 contact">

                <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-center mb-5">Stay In Touch we Us</h3>

                    <div className="row gy-4 mb-5">
                        <div className="col-lg-6 itemRaduis">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-map"></i>
                                <h3>Our Address</h3>
                                <p>DRC/ Goma</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 itemRaduis">
                            <div className="info-item d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>Groupealing@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 itemRaduis">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>+243 999 888 777</p>
                            </div>
                        </div>

                    </div>

                    <div className="row gy-4 mt-1">

                        <div className="col-lg-6 ">
                            <div action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-lg-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-danger" type="submit">Send Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 img-contact">
                            <img src={ImageContact} alt="" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}