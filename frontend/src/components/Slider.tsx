/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const ImageSlider = ({ slides, SliderData }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <img src="" alt="" />
      <img
        src="/icons/left-ic.svg"
        style={{ height: 32 }}
        className="left-arrow pointer"
        onClick={prevSlide}
      />
      <img
        src="/icons/l-right-ic.svg"
        style={{ height: 32 }}
        className="right-arrow pointer"
        onClick={nextSlide}
      />
      {SliderData.map((slide: any, index: number) => {
        return (
          <div
            style={{}}
            className={index === current ? "slide active" : "slide"}
            key={index}>
            {index === current && (
              <img
                src={slide.image}
                height={500}
                style={{ borderRadius: 12 }}
                alt="travel image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
