import React, { useEffect, useState } from "react";

import "./Carousel.css";

export const Carousel = () => {
  const images = [
    { id: 0, img: "/public/carousel_images/image000.jpg" },
    { id: 1, img: "/public/carousel_images/image001.jpg" },
    { id: 2, img: "/public/carousel_images/image002.jpg" },
    { id: 3, img: "/public/carousel_images/image003.jpg" },
    { id: 4, img: "/public/carousel_images/image004.jpg" },
    { id: 5, img: "/public/carousel_images/image005.jpg" },
    { id: 6, img: "/public/carousel_images/image006.jpg" },
  ];

  const [activeImage, setActiveImage] = useState(0);
  const currentImage = (id: number) => setActiveImage(id);

  useEffect(() => {
    const interval = setInterval(() => {
      turnNextImage();
      console.log(activeImage);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeImage]);

  const turnPrevImage = () => {
    if (activeImage <= 0) {
      setActiveImage(6);
    } else {
      setActiveImage((prev) => --prev);
    }
  };
  const turnNextImage = () => {
    if (activeImage >= images.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage((prev) => ++prev);
    }
  };
  return (
    <>
      <section className="carousel">
        <div className="carousel__main">
          <img src={images[activeImage].img} />
        </div>
        <div className="carousel__prev" onClick={turnPrevImage}>
          ＜
        </div>
        <div className="carousel__next" onClick={turnNextImage}>
          ＞
        </div>
        <ul className="carousel__thumbnails">
          {images.map((img) => (
            <li key={img.id} className={activeImage === img.id ? "current" : ""} onClick={() => currentImage(img.id)}>
              <img src={img.img} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
