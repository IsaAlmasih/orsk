import React from "react";

import styles from "./MainPage.module.css";
import "swiper/css";

import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const MainPage = () => {
  const navigate = useNavigate();
  return (

      <div className={styles.wrapper}>
        <div>{}</div>
        <div className={styles.navigator}>
          <Link>Календари</Link>
          <Link>Полиграфия.</Link>
          <Link>Печать.</Link>
          {/* <Link></Link> */}
        </div>
        {/* <div className={styles.intro}></div> */}
        <div className={styles.list}>
          <Link to={"product/1"}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className={styles.swiper}
            >
              <SwiperSlide>
                <Link
                  className={styles.cart}
                  // to={"http://000000000000.ru/fond/1"}
                >
                  <img src={img} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img2} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img3} alt="" />
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className={styles.text}>
              <a href={"https://vk.com/id386521997"}>Орск Принт</a>
            </div>
          </Link>{" "}
          <Link to={"https://vk.com/id386521997"}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className={styles.swiper}
            >
              <SwiperSlide>
                <Link className={styles.cart} to={"https://vk.com/id386521997"}>
                  <img src={img} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img2} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className={styles.cart}>
                  <img src={img3} alt="" />
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className={styles.text}>
              <a href={"https://vk.com/id386521997"}>Орск Принт</a>
            </div>
          </Link>
        </div>
      </div>

  );
};

export default MainPage;
