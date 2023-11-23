import { Form, FormPartial } from "@n7studio/react-original-form";
import React, { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { AuthInput, DateInput, DropdownInput, GenderSelectInput, TextAreaInput } from "../../components";

const accountTypeOptions = [
    {
        label: "Particulier",
        value: "personal",
    },
    {
        label: "Entreprise",
        value: "company",
    },
];

function InformationsStep() {
    return (
        <FormPartial>
            <AuthInput label="Nom" name="firstName" placeholder="Nom" icon="user" />
            <AuthInput label="Prénom" name="lastName" placeholder="Prénom" icon="user" />
            <DateInput label="Date de naissance" name="birthdate" placeholder="Votre date de naissance" />
            <DropdownInput label="Type de compte" name="accountType" placeholder="Votre type de compte" options={accountTypeOptions} />
        </FormPartial>
    )
}

function PersonalStep() {
    return (
        <FormPartial>
            <GenderSelectInput name="gender" />
            <AuthInput label="Pays d'origine" name="country" placeholder="Pays d'origine" icon="globe" />
            <AuthInput label="Numéro de téléphone" name="phone" placeholder="Numéro de téléphone" icon="phone" />
            <TextAreaInput label="Description des compétences" name="skillsDescription" placeholder="Veuillez décrire vos compétences..." />
        </FormPartial>
    )
}

function AgreementStep() {
    return (
        <FormPartial>
            <div className="ui search focus mt-15">
                <div className="input">
                    <input type="checkbox" id="isProspectionMember" name="isProspectionMember" />
                    <label style={{ color: "white" }} for="isProspectionMember">Faire Parti De L'Equipe De Prospection</label>
                </div>
            </div>
            <div className="ui search focus mt-15">
                <div className="input">
                    <input type="checkbox" id="isDeliveryMember" name="isDeliveryMember" />
                    <label style={{ color: "white" }} for="isDeliveryMember">Faire Parti De L'Equipe De Livraison</label>
                </div>
            </div>
            <div className="ui search focus mt-15">
                <div className="input">
                    <input type="checkbox" id="isNewsletterMember" name="isNewsletterMember" />
                    <label style={{ color: "white" }} for="isNewsletterMember">Accepter La NewsLetter</label>
                </div>
            </div>
        </FormPartial>
    )
}

export default function SetupAccountPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const maxSteps = 3;
    const hasPrevious = currentStep !== 0;
    const hasNext = currentStep !== maxSteps - 1;

    const previous = () => {
        (hasPrevious) && setCurrentStep(currentStep - 1);
    }

    const next = () => {
        (hasNext) && setCurrentStep(currentStep + 1);
    }

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
                                    <Form
                                        onSubmit={(values) => {
                                            console.log(values);
                                        }}
                                    >
                                        <Stepper activeStep={currentStep}>
                                            <Step onClick={() => setCurrentStep(0)} label="1" />
                                            <Step onClick={() => setCurrentStep(1)} label="2" />
                                            <Step onClick={() => setCurrentStep(2)} label="3" />
                                            <Step onClick={() => setCurrentStep(3)} label="4" />
                                        </Stepper>
                                        {currentStep === 0 && (<InformationsStep />)}
                                        {currentStep === 1 && (<PersonalStep />)}
                                        {currentStep === 2 && (<AgreementStep />)}
                                        <div style={{ display: "flex", gap: "1em" }}>
                                            {hasPrevious && (<button className="login-btn" type="button" onClick={previous}>Précédent</button>)}
                                            {
                                                hasNext ? (<button className="login-btn" type="button" onClick={next}>Suivant</button>) :
                                                    (<button className="login-btn" type="submit">Confirmer</button>)
                                            }
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="sign_footer"><img src="/assets/images/adiveLogo.png" width={30} alt />
                            © 2023 <strong>ADIVE</strong>. Tous Droits Réservés.</div>
                    </div>
                </div>
            </div >
        </div >


    );
}