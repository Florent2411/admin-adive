import React from "react";

const Training = ({ training, onClick }) => {

  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div className="fcrse_1 mt-30">
          <a style={{ cursor: "pointer" }} onClick={onClick} className="fcrse_img">
            <img src={training.image.data[0].attributes.formats.thumbnail.url} alt /> <div className="course-overlay">
              <div className="badge_seller">{training.avec_certificat ? "Avec Certification" : "Sans Certification"}</div>
              <div className="crse_reviews">
                <i className="uil uil-star" />{training.langue}
              </div>
              <span className="play_btn1"><i className="uil uil-play" /></span>
              <div className="crse_timer">
                {training.nombre_heures} Heures
              </div>
            </div>
          </a>
          <div className="fcrse_content">
            <div className="eps_dots more_dropdown">
              <a hstyle={{ cursor: "pointer" }} onClick={onClick}><i className="uil uil-ellipsis-v" /></a>
            </div>
            <div className="vdtodt">
              <span className="vdt14">Date de formation :</span>
              <span className="vdt14">{training.date_formation.slice(0, 10)}</span>
            </div>
            <a style={{ cursor: "pointer" }} onClick={onClick} className="crse14s">{training.Theme}</a>
            <a href="#" className="crse-cate">{training.description.slice(0, 100)}</a>
            <div className="auth1lnkprce">
              <p className="cr1fot">Par <a href="#">{training.formateur.data.Nom} {training.formateur.data.Prenoms}</a></p>
              <div className="prce142">{training.prix_formation} FCFA</div>
              <button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt" /></button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Training;
