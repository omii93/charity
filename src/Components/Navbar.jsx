import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {

    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg py-3 px-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="./Images/Background/logo (6).png" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3 ">
                                    <NavLink className={(e) => { return e.isActive ? "red fw-semibold  " : " m" }} to={"/"} >Home</NavLink>

                                </li>
                                <li class="nav-item mx-3">
                                    <NavLink className={(e) => { return e.isActive ? "red fw-semibold   " : "m " }} to={"/About"}>About Us</NavLink>
                                </li>
                                <li class="nav-item mx-3">
                                    <NavLink className={(e) => { return e.isActive ? "red fw-semibold " : "m " }} to={"/Couses"}>Couses</NavLink>
                                </li>

                                <li class="nav-item mx-3">
                                    <NavLink className={(e) => { return e.isActive ? "red fw-semibold " : "m " }} to={"/Contact"}>Contact Us</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>


        </>
    );
}

export default Navbar;
