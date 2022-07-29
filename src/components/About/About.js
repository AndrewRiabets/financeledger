import peopleWebp from '../../images/about/people.webp';
import peopleWebp2x from '../../images/about/people@2x.webp';
import peopleJpg from '../../images/about/people.jpg';
import peopleJpg2x from '../../images/about/people@2x.jpg';

import s from './About.module.css';

export default function About() {
  return (
    <>
      <section id="About" className={s.about_container}>
        <div>
          <picture>
            <source
              srcSet={`${peopleWebp}, ${peopleWebp2x}`}
              type="image/webp"
            />
            <source srcSet={`${peopleJpg}, ${peopleJpg2x}`} type="image/jpeg" />
            <img src={peopleJpg} className={s.aboutImg} alt="City" />
          </picture>
        </div>
        <div className={s.about_info_wrapper}>
          <p className={s.about_headline}>What are you loocking for</p>
          <h2 className={s.about_title}>We provide bespoke solutions</h2>
          <p className={s.about_text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className={s.about_btn}>Read More</button>
        </div>
      </section>
    </>
  );
}
