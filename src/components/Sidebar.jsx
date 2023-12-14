import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarItems = [
  {
    title: "Tableau de Bord",
    link: "/dashboard",
    icon: "apps",
  },
  {
    title: "Mes Emplois",
    link: "/my-jobs",
    icon: "book-alt",
  },
  {
    title: "Emplois",
    link: "/jobs",
    icon: "book-alt",
  },
  {
    title: "Mes Formations",
    link: "/my-formations",
    icon: "analysis",
  },
  {
    title: "Formations",
    link: "/formations",
    icon: "analysis",
  },
  {
    title: "Mes Certifications",
    link: "/my-certifications",
    icon: "award",
  },
  {
    title: "Créer Mon CV",
    link: "/create-cv",
    icon: "plus-circle",
  },
  {
    title: "Mes CVs",
    link: "/my-cvs",
    icon: "plus-circle",
  },
  {
    title: "Bibliothèque",
    link: "/library",
    icon: "book-alt",
  },
  {
    title: "Mes Souscriptions",
    link: "/my-subscriptions",
    icon: "comments",
  },
  {
    title: "Services",
    link: "/services",
    icon: "bell",
  },

]

const sidebarBottomItems = [
  {
    title: "Paramètres",
    link: "/settings",
    icon: "cog"
  },
  {
    title: "Laisser Un Message",
    link: "/contact",
    icon: "comment-alt-exclamation"
  },
]

export default function Sidebar() {

  return (
    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            {
              sidebarItems.map((item) => (
                <li className="menu--item">
                  <NavLink to={item.link} className={({ isActive }) => `menu--link ${isActive ? "active" : ""}`} title={item.title}>
                    <i className={`uil uil-${item.icon} menu--icon`} />
                    <span className="menu--label">{item.title}</span>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            {
              sidebarBottomItems.map((item) => (
                <li className="menu--item">
                  <NavLink to={item.link} className={({ isActive }) => `menu--link ${isActive ? "active" : ""}`} title={item.title}>
                    <i className={`uil uil-${item.icon} menu--icon`} />
                    <span className="menu--label">{item.title}</span>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
