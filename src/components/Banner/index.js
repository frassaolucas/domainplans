import React from 'react';

import './styles.css';
import bannerFurniture from '../../assets/images/banner-furniture.svg';
import bannerOffice from '../../assets/images/banner-office.svg';

const Banner = () => (
  <div className="banner">
    <div className="banner__content">
      <img src={bannerFurniture} alt="Banner - Funiture" className="banner__img banner__img--left"/>
      <img src={bannerOffice} alt="Banner - Office" className="banner__img banner__img--right"/>
      <div className="headline">
        <span className="headline__sub">
          Hospedagem de Sites
        </span>
        <h1 className="headline__main">Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
        <div className="features">
          <div className="features__item">
            <div className="check-mark"></div>
            <span>
              99,9% de disponibilidade: seu site sempre no ar
            </span>
          </div>

          <div className="features__item">
            <div className="check-mark"></div>
            <span>
              Suporte 24h, todos os dias
            </span>
          </div>

          <div className="features__item">
            <div className="check-mark"></div>
            <span>
              Painel de Controle cPanel
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
 );
 
 export default Banner;