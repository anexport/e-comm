import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full screen height */
`;

const Spinner = styled.div`
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #00ff7f;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => (
    <SpinnerWrapper>
        <Spinner />
    </SpinnerWrapper>
);

export default LoadingSpinner;
