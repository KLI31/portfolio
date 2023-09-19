const ContactCard = ({ socialApp, contact, icon, add }) => {
  return (
    <div className="contact__card">
      {add && <i className={`bx bxl-${icon} contact__card-icon`}></i>}
      <i className={`bx bx-${icon} contact__card-icon`} />
      <h3 className="contact__card-title">{socialApp}</h3>
      <span className="contact__card-data">{contact}</span>

      <a href="" className="contact__button ">
        Write me <i className="bx bx-right-arrow-alt contact__button-icon" />
      </a>
    </div>
  );
};

export default ContactCard;
