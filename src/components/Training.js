import React, { useState } from "react";
import { Avatar } from 'antd';

const Training = ({ training, onClick }) => {

    console.log(training)

    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="fcrse_1 mt-30">
                    <a style={{ cursor: "pointer" }} onClick={onClick} className="fcrse_img">
                        <img src={training.attributes.image.data[0].attributes.formats.thumbnail.url} alt />
                        <div className="course-overlay">
                            <div className="badge_seller">{training.attributes.avec_certificat ? "Avec Certification" : "Sans Certification"}</div>
                            <div className="crse_reviews">
                                <i className="uil uil-star" />{training.attributes.langue}
                            </div>
                            <span className="play_btn1"><i className="uil uil-play" /></span>
                            <div className="crse_timer">
                                {training.attributes.nombre_heures} Heures
                            </div>
                        </div>
                    </a>
                    <div className="fcrse_content">
                        <div className="eps_dots more_dropdown">
                            <a href="#"><i className="uil uil-ellipsis-v" /></a>
                            <div className="dropdown-content">
                                <span><i className="uil uil-share-alt" />Share</span>
                                <span><i className="uil uil-heart" />Save</span>
                                <span><i className="uil uil-ban" />Not Interested</span>
                                <span><i className="uil uil-windsock" />Report</span>
                            </div>
                        </div>
                        <div className="vdtodt">
                            <span className="vdt14">Date de formation :</span>
                            <span className="vdt14">{training.attributes.date_formation.slice(0, 10)}</span>
                        </div>
                        <a style={{ cursor: "pointer" }} onClick={onClick} className="crse14s">{training.attributes.Theme}</a>
                        <a href="#" className="crse-cate">{training.attributes.description.slice(0, 100)}</a>
                        <div className="auth1lnkprce">
                            <p className="cr1fot">Par <a href="#">{training.attributes.formateur.data.attributes.Nom} {training.attributes.formateur.data.attributes.Prenoms}</a></p>
                            <div className="prce142">{training.attributes.prix_formation} FCFA</div>
                            <button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt" /></button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Training;