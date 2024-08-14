import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.primary};
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.secondary};
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.accent};
    }

    button {
        background-color: ${({ theme }) => theme.colors.primary};
        border: none;
        color: ${({ theme }) => theme.colors.background};
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-family: ${({ theme }) => theme.fonts.primary};
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-2px);
    }
`;

export default GlobalStyles;
