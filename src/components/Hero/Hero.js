// import showcaseWebp from '../../images/hero/showcase.webp';
// import showcaseWebp2x from '../../images/hero/showcase@2x.webp';
// import showcaseJpg from '../../images/hero/showcase.jpg';
// import showcaseJpg2x from '../../images/hero/showcase@2x.jpg';

import s from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={s.hero_container}>
        <div className={s.hero_info}>
          <h1 className={s.hero_title}>The Sky Is The Limit</h1>
          <p className={s.hero_text}>
            We provide word class financial assistance
          </p>

          <button type="button" className={s.hero_btn}>
            Read More
          </button>
        </div>
        {/* <div className={s.bgWrapper}>
          <picture>
            <source
              srcSet={`${showcaseWebp}, ${showcaseWebp2x}`}
              type="image/webp"
            />
            <source
              srcSet={`${showcaseJpg}, ${showcaseJpg2x}`}
              type="image/jpeg"
            />
            <img src={showcaseJpg} className={s.heroBg} alt="City" />
          </picture>
        </div> */}
      </div>
    </>
  );
}
