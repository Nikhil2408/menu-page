import React from "react";

import styles from "../../styles/MenuItem.module.css";

function MenuItem(props){
    return (
        <div className={styles.MenuItem}>
            {props.foodItem.image}
            <div className={styles.itemContent}>
                <div className={styles.foodName_price}>
                    <p className={styles.foodName}>{props.foodItem.name}</p>
                    <p className={styles.price}>$ {props.foodItem.price}</p>
                </div>
                <p className={styles.about}>{props.foodItem.about}</p>
            </div>
        </div>
    )
}

export default MenuItem;