import React from "react";

import styles from "../../styles/Header.module.css";

function Header(props){

    return (
        <div className={styles.Header}>
            <h1>Our Menu</h1>
            <div></div>
            <ul>
                <li onClick={props.onTypeSelect}>All</li>
                <li onClick={props.onTypeSelect}>Breakfast</li>
                <li onClick={props.onTypeSelect}>Lunch</li>
                <li onClick={props.onTypeSelect}>Shakes</li>
            </ul>
        </div>
    )
}

export default Header;