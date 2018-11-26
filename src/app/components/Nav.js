import React from "react";

export default function Nav(props) {
    return(
        <li className="nav-item px-lg-2 px-sm-5 px-2">
            <a href="#!" className="nav-link text-light">{props.nav}</a>
        </li>
    );
};