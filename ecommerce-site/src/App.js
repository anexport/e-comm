import AdminPage from './pages/AdminPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/CheckoutPage';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Orders from './components/OrderHistory';
import NotFound from './pages/NotFound';

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
            <Footer />
        </Router>
      </ThemeProvider>
    );
}

export default App;
