import sprite from '../../images/sprite.svg';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={s.footer_container}>
        <div>
          <ul className={s.footer_socialLinks}>
            <li className={s.footer_socialLinks_item}>
              <a href="https://facebook.com/">
                <svg className={s.icon} width="35" height="35">
                  <use href={`${sprite}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li className={s.footer_socialLinks_item}>
              <a href="https://twitter.com/">
                <svg className={s.icon} width="35" height="35">
                  <use href={`${sprite}#twitter`}></use>
                </svg>
              </a>
            </li>
            <li className={s.footer_socialLinks_item}>
              <a href="https://youtube.com/">
                <svg className={s.icon} width="40" height="35">
                  <use href={`${sprite}#youtube`}></use>
                </svg>
              </a>
            </li>
            <li className={s.footer_socialLinks_item}>
              <a href="https://linkedin.com/">
                <svg className={s.icon} width="31" height="35">
                  <use href={`${sprite}#linkedin`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={s.footer_copyright}>Copyright © 2021 - FinanceLedger</p>
        </div>
      </footer>
    </>
  );
}
