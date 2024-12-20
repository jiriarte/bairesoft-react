import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.primaryLight};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
