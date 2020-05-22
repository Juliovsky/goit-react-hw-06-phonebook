import React from "react";
import styles from './inputForm.module.css'

function InputSearch({getFilterValue, filter}) {

    return (
        <>
                <h3 className={styles.title}>Find contacts by name</h3>
                <input
                    name='filter'
                    placeholder="search"
                    type="text"
                    onChange={(e)=>getFilterValue(e.target.value)}
                    value={filter}
                />
        </>
    )

}

export default InputSearch