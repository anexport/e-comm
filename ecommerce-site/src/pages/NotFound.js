import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
`;

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Return to Home</a>
        </NotFoundWrapper>
    );
};

export default NotFound;
