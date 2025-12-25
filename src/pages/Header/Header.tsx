import React from "react";

const TopSection: React.FC = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-bar">
          <div className="site-brand">
            <a className="site-logo-link" href="@">
              Сладкий сундук
            </a>
          </div>

          <div className="site-location">
            <div className="site-location-box">
              <a href="#">
                <img className="site-location-icon" src="images/map-marker.png" alt="" />
              </a>
              <div className="site-location-text">
                г. Санкт Петербург,
                <br /> ул. Куйбышева 31
              </div>
            </div>
          </div>

          <div className="site-phone-link">
            <div className="site-phone">
              <div className="site-phone-icon">
                <img src="images/phone-icon-main.png" alt="" />
              </div>
              <div className="number">
                <a className="site-phone-main" href="#">
                  8 (812) 844-95-49
                </a>
              </div>
            </div>
            <div className="site-phone-caption">Ежедневно с 9:00 до 20:00</div>
          </div>
        </div>

        <div className="banner-main">
          <div className="banner-label">
            <span className="banner-label-text">Вкуснейшие</span>
          </div>

          <div className="banner-title">
            Пирожные и капкейки <br />
            от 150 ₽/шт. с доставкой
            <br /> по Санкт Петербургу
          </div>

          <div className="banner-subtitle">
            Приготовим за 3 часа в день заказа. <br />
            Доставка на авто в холодильнике.
          </div>

          <div className="banner-cta-wrap">
            <a href="#" className="banner-cta">
              Перейти в каталог
            </a>
          </div>

          <div className="banner-decor">
            <img className="banner-berry-1" src="images/accent-berry-a.png" alt="" />
            <img className="banner-berry-2" src="images/accent-berry-b.png" alt="" />
            <img className="banner-berry-3" src="images/accent-berry-c.png" alt="" />
            <img className="banner-leaf" src="images/accent-leaf.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
