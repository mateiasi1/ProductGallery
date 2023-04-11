import React from "react";
import "./dropdownStyles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
    const navigate = useNavigate();

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
                    <button
                        className="dropdown-item"
                        onClick={() => navigate("/products")}
                    >
                        Product Gallery
                    </button>
                </li>
            </ul>
        </div>
    );
};
export default DropDownMenu;
