import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../../styles/layouts/main-layout.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title
}) => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />

      <main className="main-content">
        <div className="content-wrapper">
          {title && (
            <div className="page-header">
              <h1 className="page-title">{title}</h1>
            </div>
          )}
          <div className="page-content">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;