import { Form } from '@n7studio/react-original-form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from "yup";
import { AuthInput, LoadingButton } from '../../components';
import { loginRequest } from "../../redux/actions/authActions";

const loginSchema = object({
  email: string().email().required("Veuillez saisir votre adresse email"),
  password: string().required("Veuillez saisir votre mot de passe"),
});

function LoginPage() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


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
              <Form
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  const { email, password } = values;
                  dispatch(loginRequest(email, password));
                }}
              >
                <AuthInput name="email" placeholder="Adresse Email" icon="envelope" />
                <AuthInput name="password" type="password" placeholder="Mot de passe" icon="key-skeleton-alt" />
                <LoadingButton loading={loading} title="Se Connecter" type="submit" />
              </Form>

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