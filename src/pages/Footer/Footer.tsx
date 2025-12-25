import React from "react";

const OrderFooter: React.FC = () => {
  return (
    <div className="callback-section">
      <div className="container">
        <div className="callback-card">
          <div className="callback-title">
            Чтобы сделать заказ, укажите ваш телефон
          </div>
          <div className="callback-subtitle">
            Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
          </div>

          <div className="callback-form">
            <input type="tel" placeholder="Номер телефона" />
          </div>

          <div className="callback-button-wrap">
            <a href="#" className="callback-button">
              Сделать заказ
            </a>
          </div>

          <div className="callback-approve">
            Нажалая на кнопку, вы соглашаетесь с условиями обработки персональных данных
          </div>

          <div className="callback-checkmark">
            <img
              className="callback-checkmark-icon"
              src="images/check-symbol.png"
              alt=""
            />
          </div>

          <div className="legal-links">
            <div className="legal-link1">Согласие на обработку данных</div>
            <div className="legal-link2">Служба поддержки</div>
            <div className="legal-link3">Политика конфиденциальности</div>
            <div className="legal-link4">
              © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
            </div>
          </div>
        </div>
      </div>

      <div className="callback-decor">
        <img
          className="callback-clouds"
          src="images/footer-clouds-strip.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default OrderFooter;
