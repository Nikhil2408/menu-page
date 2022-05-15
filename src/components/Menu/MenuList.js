import React from "react";

import styles from "../../styles/MenuList.module.css";
import MenuItem from "./MenuItem";

function MenuList(props){
    return (
        <div className={styles.MenuList}>
            {
                props.foodItemsList.map(foodItem => {
                    return <MenuItem foodItem = {foodItem}/>
                })
            }
        </div>
    )
}

export default MenuList;