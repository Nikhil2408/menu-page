import React, {useState} from "react";

import styles from "../../styles/FAQ.module.css";

function FAQ(props){

    const [faqStatus, setFaqStatus] = useState(false);

    function toggleFaqStatus(){
        setFaqStatus(!faqStatus);
    }

    return (
        <div className={styles.FAQ}>
            <button onClick = {toggleFaqStatus}>
                <div>{props.faq.question}</div>
                <div><i class="fa-solid fa-circle-chevron-down"></i></div>
            </button>
            {
                faqStatus
                ?
                <div>
                    <p>{props.faq.answer}</p>  
                </div>
                :
                ""
            }
            
        </div>
    )
}

export default FAQ;