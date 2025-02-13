import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, CarouselRef } from "react-round-carousel";

import image1 from "../../assets/images/111.jpg";
import image2 from "../../assets/images/111.jpg";
import image3 from "../../assets/images/111.jpg";
import image4 from "../../assets/images/111.jpg";

import styles from "./Product.module.css";
import "./product.css"

const langs = [
  "010000010111",
  "100100101011",
  "011010110101",
  "110010101010",
  "101111111111",
  "111111100010",
  "010010101011",
  "100100101010",
  "001000000001",
  "110010101110",
  "001010101001",
  "110000000110",
  "011010101001",
  "100110111110",
  "010101010101",
  "110010101110",
  "100000011111",
];

const Char = ({ value, x, y, speed }) => {
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPos((yPos) => {
        const newYPos = yPos > window.innerHeight ? 0 : yPos + speed;
        return newYPos;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [speed]);

  const flick = Math.random() * 100;
  const char = flick < 10 ? 0 : value;

  return (
    <span
      style={{ position: "absolute", left: x, top: yPos, color: "#0000FF" }}
    >
      {char}
    </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * text.length);
    const speed = Math.floor(Math.random() * 6) + 3;
    const charArray = [];

    for (let i = text.length - 1; i >= 0; i--) {
      charArray.push({ value: text[i], y: (y + text.length - i) * 20, speed });
    }

    setChars(charArray);
  }, [text]);

  return (
    <>
      {chars.map((char, index) => (
        <Char
          key={index}
          value={char.value}
          x={x}
          y={char.y}
          speed={char.speed}
        />
      ))}
    </>
  );
};

const MatrixRain = () => {
  const [streams, setStreams] = useState([]);
  const createStreams = () => {
    const streamArray = [];

    for (let i = 0; i < window.innerWidth; i += 20) {
      streamArray.push({
        text: langs[Math.floor(Math.random() * langs.length)],
        x: i,
      });
    }

    setStreams(streamArray);
  };
  useEffect(() => {
    createStreams();
  }, []);

  const reset = () => {
    createStreams();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
        height: "100%",
        overflow: "hidden",
      }}
    >
      {streams.map((stream, index) => (
        <Stream key={index} text={stream.text} x={stream.x} />
      ))}
    </div>
  );
};

const handleClick = (id) => {
  // const baseUrl = window.location.protocol + "//" + window.location.host;
  // localStorage.setItem("bookId", id);
  // window.open(baseUrl + "/book", "_blank");
};

export const items = [
  {
    alt: "A random photo",
    image: image1,
    content: (
      <div
        className="test"
        onClick={() => handleClick(1)}
        style={{ width: "400px", height: "400px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image2,
    content: (
      <div
        className="test"
        onClick={() => handleClick(2)}
        style={{ width: "400px", height: "400px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image3,
    content: (
      <div
        className="test"
        onClick={() => handleClick(3)}
        style={{ width: "400px", height: "400px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image4,
    content: (
      <div
        onClick={() => handleClick(4)}
        style={{ width: "400px", height: "400px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
];

const Product = () => {
  const navigate = useNavigate();
  const [bookId, setBookId] = React.useState(1);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [scaleBook, setScaleBook] = React.useState(false);
  const carouselRef = React.useMemo(
    () => (node) => {
      if (node !== null) {
        let bookId = (node.getSelectedIndex() + 1) % items.length;
        if (Math.abs(bookId) === 0) bookId = items.length;
        localStorage.setItem("bookId", bookId);
        setBookId(bookId);
      }
    },
    []
  );

  return (
    <>
      <div className={styles.wrapper}>
        <div>{}</div>
        <div className={styles.navigator}>
          {/* <Link>Города.</Link>
          <Link>Сотрудничество.</Link>
          <Link>Книги.</Link>
          <Link>Кабинет автора.</Link> */}
        </div>

        <div className={styles.list}>
          <div className="product-carousel">
            {/* <Carousel
              itemWidth={400}
              ref={carouselRef}
              items={items}
              slideOnClick
            /> */}
          </div>
          <div className={styles.wrappe}>
            <textarea rows={10} cols={50}>
Пишите, звоните. Печать разных форматов, на разном материале. Старый город, ул. Советская, дом 89. Тел +73735(26-63-87) с понедельника по пятницу с 09.00 - 17.00
            </textarea>
          </div>
        </div>
        <button onClick={() => navigate(-1)} className={styles.button}>
          {"<--"}Назад
        </button>
        <div className={styles.footer}></div>
      </div>
      {/* <MatrixRain></MatrixRain> */}
    </>
  );
};

export default Product;
