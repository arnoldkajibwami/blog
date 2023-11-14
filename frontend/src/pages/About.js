import React from "react";
import "./about.css"
import Breadcrumb from "./Breadcrump";
import Image1 from "../images/blog.jpg"
import AboutDetails from "./AboutDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <Breadcrumb
                page={"About"}
                image={Image1}
            />
            <AboutDetails/>
           <Footer/>
        </>
    );
}