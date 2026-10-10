import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNav.css';

export default function SidebarNav() {
  return (
    <nav className="sidebar-nav" aria-label="Main Navigation">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        end
      >
        /homepage
      </NavLink>

      <NavLink
        to="/photography"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /photography
      </NavLink>

      <NavLink
        to="/filmmaking"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /filmaking
      </NavLink>

      <NavLink
        to="/music"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /music
      </NavLink>

      <NavLink
        to="/dance-performance"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /dance&performance
      </NavLink>

      <NavLink
        to="/art"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /art
      </NavLink>

      <NavLink
        to="/community"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        /community
      </NavLink>
    </nav>
  );
}

