import React from 'react';

function Sidebar() {

  return (
    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            <li className="menu--item">
              <a href="/dashboard" className="menu--link active" title='Tableau De Bord'>
                <i className="uil uil-apps menu--icon" />
                <span className="menu--label">Tableau De Bord</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Mes Emplois'>
                <i className="uil uil-book-alt menu--icon" />
                <span className="menu--label">Mes Emplois</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="/jobs" className="menu--link" title='Emplois'>
                <i className="uil uil-book-alt menu--icon" />
                <span className="menu--label">Emplois</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Mes Formations'>
                <i className="uil uil-analysis menu--icon" />
                <span className="menu--label">Mes Formations</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="/trainings" className="menu--link" title='Formations'>
                <i className="uil uil-analysis menu--icon" />
                <span className="menu--label">Formations</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Mes Certifications'>
                <i className="uil uil-award menu--icon" />
                <span className="menu--label">Mes Certifications</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="/create-cv" className="menu--link" title='Créer Mon CV'>
                <i className="uil uil-plus-circle menu--icon" />
                <span className="menu--label">Créer Mon CV</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Mes CVs'>
                <i className="uil uil-plus-circle menu--icon" />
                <span className="menu--label">Mes CVs</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Mes Souscriptions'>
                <i className="uil uil-comments menu--icon" />
                <span className="menu--label">Mes Souscriptions</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Services'>
                <i className="uil uil-bell menu--icon" />
                <span className="menu--label">Services</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Paramètres'>
                <i className="uil uil-cog menu--icon" />
                <span className="menu--label">Paramètres</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="#" className="menu--link" title='Laisser Un Message'>
                <i className="uil uil-comment-alt-exclamation menu--icon" />
                <span className="menu--label">Laisser Un Message</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;