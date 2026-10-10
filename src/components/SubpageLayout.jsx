import React from 'react';
import SidebarNav from './SidebarNav';
import './SubpageLayout.css';

export default function SubpageLayout({ children }) {
  return (
    <div className="subpage-canvas">
      <SidebarNav />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

