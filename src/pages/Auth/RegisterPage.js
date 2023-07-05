import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";

function RegisterPage() {
    const [goSteps, setGoSteps] = useState(0);

    return (
        <div className="sign_in_up_bg">
            <div className="container">
                <div className="row justify-content-lg-center justify-content-md-center">
                    <div className="col-lg-12">
                        <div className="main_logo25" id="logo">
                            <a href="#"><img src="/assets/images/adiveLogo.png" width={100} alt /></a>
                            <a href="#"><img className="logo-inverse" src="/assets/images/adiveLogo.png" width={100} alt /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div className="sign_form">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="instructor-signup-tab" role="tabpanel" aria-labelledby="instructor-tab">
                                    <p>Enregistrez-Vous pour profiter de plusieurs services</p>
                                    <form>
                                        <Stepper activeStep={goSteps}>
                                            <Step onClick={() => setGoSteps(0)} label="1" />
                                            <Step onClick={() => setGoSteps(1)} label="2" />
                                            <Step onClick={() => setGoSteps(2)} label="3" />
                                            <Step onClick={() => setGoSteps(3)} label="4" />
                                        </Stepper>
                                        {goSteps === 0 && (
                                            <>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="email"
                                                            name="emailaddress"
                                                            id="id_email"
                                                            required
                                                            maxLength={25}
                                                            placeholder="Email" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="email"
                                                            name="emailaddress"
                                                            id="id_email"
                                                            required
                                                            maxLength={25}
                                                            placeholder="Confirmez Email" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input className="prompt srch_explore"
                                                            type="password"
                                                            name="password"
                                                            id="id_password"
                                                            required
                                                            maxLength={10}
                                                            placeholder="Mot De Passe" />
                                                        <i className="uil uil-key-skeleton-alt icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="mt-15">
                                                    <select class="ui hj145 dropdown cntry152 prompt srch_explore selection">
                                                        <option disabled>Selectionnez Un Type</option>
                                                        <option value="1">Particulier</option>
                                                        <option value="2">Entreprise</option>
                                                    </select>
                                                </div>
                                                <button className="login-btn" onClick={() => setGoSteps(1)}>
                                                    Suivant
                                                </button>
                                            </>
                                        )}
                                        {goSteps === 1 && (
                                            <>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="text"
                                                            required
                                                            maxLength={25}
                                                            placeholder="Nom" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="text"
                                                            required
                                                            maxLength={25}
                                                            placeholder="Prénom" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="date"
                                                            required
                                                            placeholder="Date De Naissance" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <button className="login-btn" onClick={() => setGoSteps(0)}>
                                                    Précédent
                                                </button>
                                                <button className="login-btn" onClick={() => setGoSteps(2)}>
                                                    Suivant
                                                </button>
                                            </>
                                        )}
                                        {goSteps === 2 && (
                                            <>
                                                <div className="ui search focus mt-15">
                                                    <div className="mt-15">
                                                        <select class="ui hj145 dropdown cntry152 prompt srch_explore selection">
                                                            <option disabled>Selectionnez Un Genre</option>
                                                            <option value="1">Masculin</option>
                                                            <option value="2">Féminin</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="text"
                                                            required
                                                            maxLength={25}
                                                            placeholder="Pays D'Origine" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="ui left icon input swdh95">
                                                        <input
                                                            className="prompt srch_explore"
                                                            type="number"
                                                            required
                                                            placeholder="Numéro De Téléphone" />
                                                        <i className="uil uil-envelope icon icon2" />
                                                    </div>
                                                </div>
                                                <div class="ui search focus mt-15">
                                                    <div class="ui form swdh30">
                                                        <div class="field">
                                                            <textarea
                                                                rows="3"
                                                                name="description"
                                                                id="id_about"
                                                                placeholder="Décrire Les Compétences..."
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="login-btn" onClick={() => setGoSteps(1)}>
                                                    Précédent
                                                </button>
                                                <button className="login-btn" onClick={() => setGoSteps(3)}>
                                                    Suivant
                                                </button>
                                            </>
                                        )}
                                        {goSteps === 3 && (
                                            <>
                                                <div className="ui search focus mt-15">
                                                    <div className="input">
                                                        <input type="checkbox" id="age1" name="age" value="30" />
                                                        <label style={{ color: "white" }} for="age1">Faire Parti De L'Equipe De Prospection</label>
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="input">
                                                        <input type="checkbox" id="age1" name="age" value="30" />
                                                        <label style={{ color: "white" }} for="age1">Faire Parti De L'Equipe De Livraison</label>
                                                    </div>
                                                </div>
                                                <div className="ui search focus mt-15">
                                                    <div className="input">
                                                        <input type="checkbox" id="age1" name="age" value="30" />
                                                        <label style={{ color: "white" }} for="age1">Accepter La NewsLetter</label>
                                                    </div>
                                                </div>
                                                <button className="login-btn" onClick={() => setGoSteps(1)}>
                                                    Précédent
                                                </button>
                                                <button className="login-btn" onClick={() => setGoSteps(3)}>
                                                    Suivant
                                                </button>
                                            </>
                                        )}
                                        {/* <button className="login-btn" type="submit">Créer Son Compte</button> */}
                                    </form>
                                </div>
                            </div>
                            <p className="mb-0 mt-30">Déjà Un Compte ? <a href="/">Se Connecter</a></p>
                        </div>
                        <div className="sign_footer"><img src="/assets/images/adiveLogo.png" width={30} alt />
                            © 2023 <strong>ADIVE</strong>. Tous Droits Réservés.</div>
                    </div>
                </div>
            </div >
        </div >


    );
}

export default RegisterPage;