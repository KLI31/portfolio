import "./StyleScroll.css";

export const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollUp");
    if (scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollUp">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};
