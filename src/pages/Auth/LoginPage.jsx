import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/actions/authActions";

function LoginPage() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    dispatch(login(email, password))
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
              <h2>Ravi De Vous Revoir</h2>
              <p>Connectez-Vous A Votre Compte Adive!</p>
              <div className="ui search focus mt-15">
                <div className="ui left icon input swdh95">
                  <input
                    className="prompt srch_explore"
                    type="email"
                    name="emailaddress"
                    id="id_email"
                    required
                    maxLength={25}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
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
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot De Passe" />
                  <i className="uil uil-key-skeleton-alt icon icon2" />
                </div>
              </div>
              <button disabled={loading} className="login-btn" type="submit" onClick={handleLogin}>
                {loading ? "En cours..." : "Connecter"}
              </button>
              <p className="sgntrm145">Ou <a href="/forgot-password">Mot De Passe Oublié ?</a>.</p>
              <p className="mb-0 mt-30 hvsng145">Pas De Compte ? <a href="/register">Créer Son Compte</a></p>
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

export default LoginPage;