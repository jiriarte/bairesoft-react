import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Navbar />
      <Content>
        {children}
      </Content>
      <Footer />
    </Main>
  );
};

export default Layout;
