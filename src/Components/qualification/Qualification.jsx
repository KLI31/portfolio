import "./StyleQualification.css";
import { useState } from "react";
const Qualification = () => {
  const [active, setActive] = useState(1);

  const activeButton = (index) => {
    setActive(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualificatoin__container container">
        <div className="qualification__tabs">
          <div
            className={
              active === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => activeButton(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              active === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => activeButton(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              active === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingenieria en sistemas</h3>
                <span className="qualification__subtitle">
                  Universidad de Córdoba
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Enfasis en desarrollo web
                </h3>
                <span className="qualification__subtitle">
                  Universidad Nacional de Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>03/2022 - 06/2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingles</h3>
                <span className="qualification__subtitle">
                  Evolve your English
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>03/2021 - 03/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Programador Web</h3>
                <span className="qualification__subtitle">
                  Universidad Nacional de Colombia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>02/2022 - 11/2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              active === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Mantenimiento de aplicaciones con React Native
                </h3>
                <span className="qualification__subtitle">Freelancer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>01/2023 - 07/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
