import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/actions/authActions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <header className="header clearfix">
      <button type="button" id="toggleMenu" className="toggle_menu">
        <i className="uil uil-bars" />
      </button>
      <button id="collapse_menu" className="collapse_menu">
        <i className="uil uil-bars collapse_menu--icon " />
        <span className="collapse_menu--label" />
      </button>
      <div className="main_logo" id="logo">
        <a href="#"><img src="/assets/images/adiveLogo.png" width={100} alt /></a>
        <a href="#"><img src="/assets/images/adiveLogo.png" width={100} alt /></a>
      </div>
      <div className="top-category">
        <div className="ui compact menu cate-dpdwn">
          <div className="ui simple dropdown item">
            <a href="#" className="option_links p-0" title="categories"><i className="uil uil-apps" /></a>
            <div className="menu dropdown_category5">
              <a href="#" className="item channel_item">Mise en rélation emploi</a>
              <a href="#" className="item channel_item">Formation professionnelle</a>
              <a href="#" className="item channel_item">Service de livraison</a>
              <a href="#" className="item channel_item">Prospection commerciale</a>
              <a href="#" className="item channel_item">Stratégie de marketing digital</a>
              <a href="#" className="item channel_item">Rédaction de contenu web</a>
              <a href="#" className="item channel_item">Conception graphique</a>
              <a href="#" className="item channel_item">Vente en ligne</a>
            </div>
          </div>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>
            <a href="#" className="option_links" title="cart"><i className="uil uil-shopping-cart-alt" /><span className="noti_count">2</span></a>
          </li>
          <li className="ui simple dropdown item">
            <a href="#" className="opts_account" title="Account">
              <img src="/assets/images/hd_dp.jpg" alt />
            </a>
            <div className="menu dropdown_category5" style={{ marginLeft: -70 }}>
              <a href="#" className="item channel_item">Mon Profil</a>
              <a href="#" className="item channel_item">Paramètres</a>
              <a onClick={handleLogout} className="item channel_item">Déconnexion</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;