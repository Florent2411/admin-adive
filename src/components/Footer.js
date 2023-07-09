import React from 'react';

function Footer() {

  return (
    <footer className="footer mt-40"  style={{ /* position: "fixed", */ bottom: 0, marginTop: 0}}>
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-lg-12">
                <div className="item_f1">
                  <a href="#">Copyright Policy</a>
                  <a href="#">Terms</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="footer_bottm">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="fotb_left">
                        <li>
                          <a href="#">
                            <div className="footer_logo">
                              <img src="/assets/images/adiveLogo.png" alt />
                            </div>
                          </a>
                        </li>
                        <li>
                          <p>© 2023 <strong>ADIVE</strong>. Tous Droits Réservés.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <div className="edu_social_links">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                        <a href="#"><i className="fab fa-pinterest-p" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  );
}

export default Footer;