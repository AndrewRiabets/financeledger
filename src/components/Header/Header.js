import s from './Header.module.css';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [headerBgc, setHeaderBbc] = useState(false);
  const screenWidth = window.screen.width;

  window.onscroll = function (e) {
    if (
      (window.scrollY > 120 && screenWidth < 768) ||
      (window.scrollY > 70 && screenWidth > 767)
    ) {
      setHeaderBbc(true);
    } else {
      setHeaderBbc(false);
    }
  };
  return (
    <>
      <header id="Home" className={headerBgc ? s.header_changeColor : s.header}>
        <div className={s.logo_wrapper}>
          <Link
            activeClass={s.siteNav_item_active}
            to="Home"
            spy={true}
            smooth={true}
            offset={-5000}
            duration={500}
            className={s.logo_text}
          >
            <svg className={s.logo_icon} width="39" height="30">
              <use href={`${sprite}#logo`}></use>
            </svg>
            <span className={s.logo_accent}>Finance</span>Ledger
          </Link>
        </div>
        <div>
          <nav>
            <ul className={s.siteNav}>
              <li className={s.siteNav_item}>
                <Link
                  activeClass={s.siteNav_item_active}
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-5000}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className={s.siteNav_item}>
                <Link
                  activeClass={s.siteNav_item_active}
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className={s.siteNav_item}>
                <Link
                  activeClass={s.siteNav_item_active}
                  to="Cases"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  Cases
                </Link>
              </li>
              <li className={s.siteNav_item}>
                <Link
                  activeClass={s.siteNav_item_active}
                  to="Blog"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li className={s.siteNav_item}>
                <Link
                  activeClass={s.siteNav_item_active}
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
