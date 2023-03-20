import React from "react";
import "../styles/sideicons.css";
import {RiCheckboxMultipleBlankLine} from "react-icons/ri";
import {IoMdSettings} from "react-icons/io";
export default function SideIcons(){
    return(
        <div className="sideicon">
            <p><RiCheckboxMultipleBlankLine className="side"/></p>
            <span>
                <p><IoMdSettings className="sidee"/></p>
                <p>DARK</p>
            </span>
        </div>
    )
}

