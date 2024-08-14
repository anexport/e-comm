import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
`;

const Nav = styled.nav`
    a {
        margin-left: 20px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        display: flex;
        align-items: center;

        & > svg {
            margin-right: 8px;
        }
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/"><Logo>KeyVault</Logo></Link>
            <Nav>
                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link>
                <Link to="/account"><FontAwesomeIcon icon={faUser} /> My Account</Link>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
