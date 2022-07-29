import s from './TeamSocialLinks.module.css';
import sprite from '../../images/sprite.svg';

export default function TeamSocialLinks() {
  return (
    <>
      <ul className={s.team_socialLinks}>
        <li className={s.team_socialLinks_item}>
          <a href="https://facebook.com/">
            <svg className={s.icon} width="35" height="35">
              <use href={`${sprite}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.team_socialLinks_item}>
          <a href="https://twitter.com/">
            <svg className={s.icon} width="35" height="35">
              <use href={`${sprite}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={s.team_socialLinks_item}>
          <a href="https://youtube.com/">
            <svg className={s.icon} width="40" height="35">
              <use href={`${sprite}#youtube`}></use>
            </svg>
          </a>
        </li>
        <li className={s.team_socialLinks_item}>
          <a href="https://linkedin.com/">
            <svg className={s.icon} width="31" height="35">
              <use href={`${sprite}#linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}
