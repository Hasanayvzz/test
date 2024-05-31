import React from "react";

const SVGFavoriteBlogs = ({ fill }: any) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.7487 4.66406C5.20495 4.66406 2.33203 7.53698 2.33203 11.0807C2.33203 17.4974 9.91537 23.3307 13.9987 24.6876C18.082 23.3307 25.6654 17.4974 25.6654 11.0807C25.6654 7.53698 22.7924 4.66406 19.2487 4.66406C17.0787 4.66406 15.1595 5.74148 13.9987 7.39056C13.407 6.54777 12.621 5.85995 11.7071 5.38535C10.7932 4.91075 9.77846 4.66334 8.7487 4.66406Z"
        fill={fill ? fill : "#D9D9D9"}
        fillOpacity="0.75"
        stroke="gray"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SVGFavoriteBlogs;
