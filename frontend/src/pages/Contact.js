import React from "react";
import Contactdetails from "./Contactdetails";
import Breadcrumb from "./Breadcrump";
import Image1 from "../images/blog.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <Navbar/>
            <Breadcrumb
                page={"Contact"}
                image={Image1}
            />
            <Contactdetails />
            <Footer/>
        </>
    );
}