import "./StyleFooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Luis Rambao</h1>

        <div className="footer__social">
          <a
            href="https://twitter.com/Nerrax_Xd"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/luisdavid_22/"
            className="footer__social-link"
            target="blank"
          >
            <i class="ui uil-instagram"></i>
          </a>

          <a
            href="https://github.com/KLI31"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Luis David Rambao.All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
