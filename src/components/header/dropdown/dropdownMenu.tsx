import React from "react";
import "./dropdownStyles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = () => {
    return (
        <div className="dropdown">
            <button
                className="btn  dropdownColor"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="#">
                        Product Gallery
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default DropDownMenu;
