import Styles from './Footer.module.css'; 

export const Footer = () => {
    return (
        <footer className={`${Styles.container}`}>
        <a href="/index.html" className={`${Styles.logo}`}>
          <span className={`${Styles.logo__name}`}>pindie</span>
          <span className="footer__logo-copy">, XXI век</span>
        </a>
        <ul className={`${Styles.social__list}`}>
          <li className="social-list__item">
            <a href="" className={`button ${Styles.social__list__link}`}>YT</a>
          </li>
          <li className="social-list__item">
            <a href="" className={`button ${Styles.social__list__link}`}>ВК</a>
          </li>
          <li className="social-list__item">
            <a href="" className={`button ${Styles.social__list__link}`}>TG</a>
          </li>
        </ul>
      </footer>
    );
}