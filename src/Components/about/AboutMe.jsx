import "./StyleAbout.css";
import Image from "../../assets/luisdavid.jpg";
import Cv from "../../assets/Cv.pdf";
const AboutMe = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={Image} alt="Cargando..." className="about__img" />
        <div className="about__data">
          <div className="about__description">
            <div style={{ marginBottom: 9 }}>
              Apasionado desarrollador frontend con experiencia en la creación
              de experiencias web cautivadoras. Mi objetivo es combinar diseño y
              desarrollo para ofrecer soluciones funcionales y visualmente
              atractivas.
            </div>
            Disfruto explorar nuevas tecnologías, investigar sobre diseño de
            experiencia de usuario (UI/UX) y participar en comunidades de
            desarrollo para mantenerme inspirado y actualizado.
          </div>
          <a download="" href={Cv} className="button button--flex">
            Download CV
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M12.375 13.75H13.75C14.1147 13.75 14.4644 13.6051 14.7223 13.3473C14.9801 13.0894 15.125 12.7397 15.125 12.375C15.125 12.0103 14.9801 11.6606 14.7223 11.4027C14.4644 11.1449 14.1147 11 13.75 11H12.375C12.0103 11 11.6606 11.1449 11.4027 11.4027C11.1449 11.6606 11 12.0103 11 12.375C11 12.7397 11.1449 13.0894 11.4027 13.3473C11.6606 13.6051 12.0103 13.75 12.375 13.75ZM12.375 16.5C12.0103 16.5 11.6606 16.6449 11.4027 16.9027C11.1449 17.1606 11 17.5103 11 17.875C11 18.2397 11.1449 18.5894 11.4027 18.8473C11.6606 19.1051 12.0103 19.25 12.375 19.25H20.625C20.9897 19.25 21.3394 19.1051 21.5973 18.8473C21.8551 18.5894 22 18.2397 22 17.875C22 17.5103 21.8551 17.1606 21.5973 16.9027C21.3394 16.6449 20.9897 16.5 20.625 16.5H12.375ZM27.5 12.2925C27.4857 12.1662 27.458 12.0417 27.4175 11.9213V11.7975C27.3514 11.6561 27.2632 11.5262 27.1562 11.4125L18.9062 3.1625C18.7926 3.05555 18.6626 2.96736 18.5213 2.90125C18.4802 2.89542 18.4385 2.89542 18.3975 2.90125C18.2578 2.82114 18.1036 2.76972 17.9438 2.75H9.625C8.53098 2.75 7.48177 3.1846 6.70818 3.95818C5.9346 4.73177 5.5 5.78098 5.5 6.875V26.125C5.5 27.219 5.9346 28.2682 6.70818 29.0418C7.48177 29.8154 8.53098 30.25 9.625 30.25H23.375C24.469 30.25 25.5182 29.8154 26.2918 29.0418C27.0654 28.2682 27.5 27.219 27.5 26.125V12.375C27.5 12.375 27.5 12.375 27.5 12.2925ZM19.25 7.43875L22.8113 11H20.625C20.2603 11 19.9106 10.8551 19.6527 10.5973C19.3949 10.3394 19.25 9.98967 19.25 9.625V7.43875ZM24.75 26.125C24.75 26.4897 24.6051 26.8394 24.3473 27.0973C24.0894 27.3551 23.7397 27.5 23.375 27.5H9.625C9.26033 27.5 8.91059 27.3551 8.65273 27.0973C8.39487 26.8394 8.25 26.4897 8.25 26.125V6.875C8.25 6.51033 8.39487 6.16059 8.65273 5.90273C8.91059 5.64487 9.26033 5.5 9.625 5.5H16.5V9.625C16.5 10.719 16.9346 11.7682 17.7082 12.5418C18.4818 13.3154 19.531 13.75 20.625 13.75H24.75V26.125ZM20.625 22H12.375C12.0103 22 11.6606 22.1449 11.4027 22.4027C11.1449 22.6606 11 23.0103 11 23.375C11 23.7397 11.1449 24.0894 11.4027 24.3473C11.6606 24.6051 12.0103 24.75 12.375 24.75H20.625C20.9897 24.75 21.3394 24.6051 21.5973 24.3473C21.8551 24.0894 22 23.7397 22 23.375C22 23.0103 21.8551 22.6606 21.5973 22.4027C21.3394 22.1449 20.9897 22 20.625 22Z"
                fill="var(--container-color)"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
