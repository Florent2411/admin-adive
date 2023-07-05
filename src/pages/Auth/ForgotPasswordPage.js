
function ForgotPasswordPage() {
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
                            <h2>Réinitialisation Du Mot De Passe</h2>
                            <form>
                                <div className="ui search focus mt-50">
                                    <div className="ui left icon input swdh95">
                                        <input
                                            className="prompt srch_explore"
                                            type="email"
                                            name="emailaddress"
                                            id="id_email"
                                            required
                                            maxLength={64}
                                            placeholder="Email" />
                                        <i className="uil uil-envelope icon icon2" />
                                    </div>
                                </div>
                                <button className="login-btn" type="submit">Réinitialiser</button>
                            </form>
                            <p className="mb-0 mt-30"> <a href="/">Se Connecter</a></p>
                        </div>
                        <div className="sign_footer"><img src="/assets/images/adiveLogo.png" width={30} alt />
                            © 2023 <strong>ADIVE</strong>. Tous Droits Réservés.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;