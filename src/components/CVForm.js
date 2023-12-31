import React from 'react';

function CVForm({ cvData, onChange, picture }) {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="sign_form" style={{padding: 20}}>
                <h2>Création Du CV</h2>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input
                            className="prompt srch_explore"
                            type="text"
                            name="name"
                            value={cvData.name}
                            onChange={onChange}
                            placeholder="Nom & Prénom" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="occupation"
                            value={cvData.occupation}
                            onChange={onChange}
                            placeholder="Profession" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="email"
                            name="email"
                            value={cvData.email}
                            onChange={onChange}
                            placeholder="Email" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="address"
                            value={cvData.address}
                            onChange={onChange}
                            placeholder="Adresse" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="number"
                            name="phone"
                            value={cvData.phone}
                            onChange={onChange}
                            placeholder="Contact" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="file"
                            name="picture"
                            //value={picture}
                            onChange={onChange}
                            placeholder="Photo" />
                    </div>
                </div>
                <div class="ui search focus mt-15">
                    <div class="ui form swdh30">
                        <div class="field">
                            <textarea
                                rows="2"
                                placeholder="A Propos De Moi..."
                                name="about"
                                value={cvData.about}
                                onChange={onChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="skills"
                            value={cvData.skills}
                            onChange={onChange}
                            placeholder="Compétences" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="hobbies"
                            value={cvData.hobbies}
                            onChange={onChange}
                            placeholder="Centres D'Intérets" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="hobbies"
                            value={cvData.experiences}
                            onChange={onChange}
                            placeholder="Expériences Professionnelles" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="date"
                            name="birthDate"
                            value={cvData.birthDate}
                            onChange={onChange}
                            placeholder="Date De Naissance" />
                    </div>
                </div>
                <div className="ui search focus mt-15">
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            name="education"
                            value={cvData.education}
                            onChange={onChange}
                            placeholder="Etudes & Formations" />
                    </div>
                </div>
                <div class="ui search focus mt-15">
                    <div class="ui form swdh30">
                        <div class="field">
                            <textarea
                                rows="2"
                                placeholder="Langue..."
                                name="langue"
                                value={cvData.langue}
                                onChange={onChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="ui search focus mt-15">
                    <div class="ui form swdh30">
                        <div class="field">
                            <textarea
                                rows="2"
                                placeholder="Autres Informations..."
                                name="other"
                                value={cvData.other}
                                onChange={onChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CVForm;