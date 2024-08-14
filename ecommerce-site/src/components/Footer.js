import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>&copy; 2024 KeyVault. All rights reserved.</p>
            <p>Contact us: support@keyvault.com</p>
        </FooterWrapper>
    );
};

export default Footer;
