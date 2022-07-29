import cases1Webp from '../../images/cases/cases1.webp';
import cases1Webp2x from '../../images/cases/cases1@2x.webp';
import cases1Jpg from '../../images/cases/cases1.jpg';
import cases1Jpg2x from '../../images/cases/cases1@2x.jpg';

import cases2Webp from '../../images/cases/cases2.webp';
import cases2Webp2x from '../../images/cases/cases2@2x.webp';
import cases2Jpg from '../../images/cases/cases2.jpg';
import cases2Jpg2x from '../../images/cases/cases2@2x.jpg';

import cases3Webp from '../../images/cases/cases3.webp';
import cases3Webp2x from '../../images/cases/cases3@2x.webp';
import cases3Jpg from '../../images/cases/cases3.jpg';
import cases3Jpg2x from '../../images/cases/cases3@2x.jpg';

import cases4Webp from '../../images/cases/cases4.webp';
import cases4Webp2x from '../../images/cases/cases4@2x.webp';
import cases4Jpg from '../../images/cases/cases4.jpg';
import cases4Jpg2x from '../../images/cases/cases4@2x.jpg';

import cases5Webp from '../../images/cases/cases5.webp';
import cases5Webp2x from '../../images/cases/cases5@2x.webp';
import cases5Jpg from '../../images/cases/cases5.jpg';
import cases5Jpg2x from '../../images/cases/cases5@2x.jpg';

import cases6Webp from '../../images/cases/cases6.webp';
import cases6Webp2x from '../../images/cases/cases6@2x.webp';
import cases6Jpg from '../../images/cases/cases6.jpg';
import cases6Jpg2x from '../../images/cases/cases6@2x.jpg';

import s from './BusinesCases.module.css';

export default function BusinesCases() {
  return (
    <>
      <section className={s.cases_container} id="Cases">
        <p className={s.cases_baseline}>This is what we do</p>
        <h2 className={s.cases_title}>Busines Cases</h2>
        <p className={s.cases_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <ul className={s.cases_gallery_list}>
          <li className={s.cases_gallery_list_item}>
            <a href={cases1Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases1Webp}, ${cases1Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases1Jpg}, ${cases1Jpg2x}`}
                  type="image/jpeg"
                />
                <img
                  className={s.cases_img}
                  src={cases1Jpg}
                  alt="people at the table"
                />
              </picture>
            </a>
          </li>
          <li className={s.cases_gallery_list_item}>
            <a href={cases2Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases2Webp}, ${cases2Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases2Jpg}, ${cases2Jpg2x}`}
                  type="image/jpeg"
                />
                <img
                  className={s.cases_img}
                  src={cases2Jpg}
                  alt="working with notepad"
                />
              </picture>
            </a>
          </li>
          <li className={s.cases_gallery_list_item}>
            <a href={cases3Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases3Webp}, ${cases3Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases3Jpg}, ${cases3Jpg2x}`}
                  type="image/jpeg"
                />
                <img className={s.cases_img} src={cases3Jpg} alt="handshake" />
              </picture>
            </a>
          </li>
          <li className={s.cases_gallery_list_item}>
            <a href={cases4Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases4Webp}, ${cases4Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases4Jpg}, ${cases4Jpg2x}`}
                  type="image/jpeg"
                />
                <img
                  className={s.cases_img}
                  src={cases4Jpg}
                  alt="group handshake"
                />
              </picture>
            </a>
          </li>
          <li className={s.cases_gallery_list_item}>
            <a href={cases5Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases5Webp}, ${cases5Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases5Jpg}, ${cases5Jpg2x}`}
                  type="image/jpeg"
                />
                <img
                  className={s.cases_img}
                  src={cases5Jpg}
                  alt="laptop on the table"
                />
              </picture>
            </a>
          </li>
          <li className={s.cases_gallery_list_item}>
            <a href={cases6Jpg} data-lightbox="gallery">
              <picture>
                <source
                  srcSet={`${cases6Webp}, ${cases6Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${cases6Jpg}, ${cases6Jpg2x}`}
                  type="image/jpeg"
                />
                <img
                  className={s.cases_img}
                  src={cases6Jpg}
                  alt="skyscrapers"
                />
              </picture>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
