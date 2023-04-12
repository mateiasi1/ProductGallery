import React, { useContext } from "react";
import "./dropdownStyles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

const DropDownMenu = () => {
    const navigate = useNavigate();
    const { themeValue } = useContext(ThemeContext);
    return (
        <div className="dropdown">
            <button
                className="btn"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: themeValue ? "#fff" : "#000" }}
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
