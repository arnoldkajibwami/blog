import React from "react";
import { Link } from "react-router-dom";
import "./breadcrump.css"

export default function Breadcrumb(props) {
  return (
    <>
      <div className="breadcrumbs">
      {/* <div className="breadcrumbs" style={{ backgroundImage: `url(${props.image})` }}> */}
        <div className="container position-relative d-flex flex-column align-items-center breadcrumbsall" >
          <h2>{props.page}</h2>
          <ol>
            <li><Link to='/' className="breadcrumbHome ">Home</Link></li>
            <li className="pageli">{props.page}</li>
          </ol>
        </div>
      </div>
    </>
  );

}