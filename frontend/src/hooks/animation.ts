export const handleScroll = (e: any) => {
  // console.log("window scrolled",window.scrollY);
  if (window.scrollY !== 0) {
    document.getElementById("header")?.classList.add("fixed-top");
  } else {
    document.getElementById("header")?.classList.remove("fixed-top");
  }
};
