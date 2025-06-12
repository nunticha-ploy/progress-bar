"use client"
import React, { useState } from "react";
import styles from "./page.module.css";

export default function ProgressBar(){
    const [progress, setProgress] = useState(0);

    function updateProgress(){
        setProgress((prevProgress) => Math.min(prevProgress+10, 100));
    };

    return (
        <div className={styles.container}>
            <h1>Progress Bar</h1>
            <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
                <div tabIndex={0} style={{ width: `${progress}%`,backgroundColor: "#007bff",height: "24px",borderRadius: "4px",}}></div>
            </div>
             <p>{progress}% Complete</p>
             <button className={styles.button} onClick={updateProgress}>Increase Progress</button>
        </div>
    )
}