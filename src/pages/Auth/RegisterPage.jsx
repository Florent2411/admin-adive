import { Form } from "@n7studio/react-original-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, ref, string } from "yup";
import { AuthInput } from "../../components";
import { registerRequest } from "../../redux/actions/authActions";

const registerSchema = object({
    username: string().required("Veuillez saisir votre nom d'utilisateur"),
    email: string().email().required("Veuillez saisir votre adresse email"),
    password: string().required("Veuillez saisir votre mot de passe"),
    password2: string().required("Veuillez confirmer votre mot de passe").oneOf([ref("password")], "Les mots de passe ne correspondent pas"),
});
function RegisterPage() {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handlSubmit = (values) => {
        dispatch(registerRequest(values));
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
                                    <h2>Enregistrez-Vous pour profiter de plusieurs services</h2>
                                    <Form
                                        validationSchema={registerSchema}
                                        onSubmit={({ password2, ...values }) => {
                                            handlSubmit(values);
                                        }}
                                    >
                                        <AuthInput label="Nom d'utilisateur" name="username" placeholder="Nom d'utilisateur" icon="user" />
                                        <AuthInput label="Adresse email" name="email" placeholder="Email" icon="envelope" />
                                        <AuthInput label="Mot de passe" name="password" placeholder="Mot de passe" icon="key-skeleton-alt" />
                                        <AuthInput label="Confirmation de mot de passe" name="password2" placeholder="Confirmation de votre mot de passe" icon="key-skeleton-alt" />
                                        <div style={{ display: "flex", gap: "1em" }}>
                                            <button disabled={loading} className="login-btn" type="submit">{
                                                loading ? "En cours..." : "Créer un compte"
                                            }</button>
                                        </div>
                                    </Form>
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