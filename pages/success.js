import React from "react";
import styles from "../styles/home.module.css";

export const Success = () => {
  return (
    <div>
      <div className={`${styles.container}`}>
        <h3>Thank you for your order!!!</h3>
        <p>Your payment order with Klarna is Successful...</p>
      </div>
    </div>
  );
};

export default Success;
