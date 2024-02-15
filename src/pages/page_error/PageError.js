import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "../reset.css";
import './pageError.css';

const PageError = () => {
  return (
    <div className="page-error">
      <Header />
      <Footer />
    </div>
  );
};

export default PageError;