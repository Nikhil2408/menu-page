import React from "react";

import styles from "../../styles/FAQsContainer.module.css";
import FAQ from "./FAQ";

function FAQsContainer(props){
    return (
        <div className={styles.FAQsContainer}>
            <h2>Frequently Asked Questions (FAQs)</h2>

            <div className={styles.FAQsList}>
                {
                    props.faqs.map(faq => {
                        return <FAQ faq={faq}/>
                    })
                }
            </div>
        </div>
    )
}

export default FAQsContainer;