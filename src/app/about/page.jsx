import React from "react";

import styles from "./styles.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>О нас</h1>
      <div className={styles.flex}>
        <img src="my-shop/src/assets/113.jpg" alt="" />
        <div className={styles.text}>
          <h2>
            <center>Добро пожаловать на наш сайт.</center>
          </h2>
          <p>
            Пишите, звоните. Печать разных форматов, на разном материале. Старый
            город, ул. Советская, дом 89. Тел +73735(26-63-87) с понедельника по
            пятницу с 09.00 - 17.00
            <strong></strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
