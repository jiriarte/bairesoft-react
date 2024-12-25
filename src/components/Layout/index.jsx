import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumbs from '../Breadcrumbs';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0.5rem;
  }
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Main>
      <Navbar />
      {!isHomePage && <Breadcrumbs />}
      <Content>
        {children}
      </Content>
      <Footer />
    </Main>
  );
};

export default Layout;
