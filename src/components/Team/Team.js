import person1Webp from '../../images/team/person1.webp';
import person1Webp2x from '../../images/team/person1@2x.webp';
import person1Jpg from '../../images/team/person1.jpg';
import person1Jpg2x from '../../images/team/person1@2x.jpg';

import person2Webp from '../../images/team/person2.webp';
import person2Webp2x from '../../images/team/person2@2x.webp';
import person2Jpg from '../../images/team/person2.jpg';
import person2Jpg2x from '../../images/team/person2@2x.jpg';

import person3Webp from '../../images/team/person3.webp';
import person3Webp2x from '../../images/team/person3@2x.webp';
import person3Jpg from '../../images/team/person3.jpg';
import person3Jpg2x from '../../images/team/person3@2x.jpg';

import TeamSocialLinks from './TeamSocialLinks';
import s from './Team.module.css';

export default function Team() {
  return (
    <>
      <section className={s.team_container}>
        <p className={s.team_baseline}>Who we are</p>
        <h2 className={s.team_title}>Our Professional Team</h2>
        <p className={s.team_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.team_card_list}>
          <li>
            <div className={s.team_img_thumb}>
              <picture>
                <source
                  srcSet={`${person1Webp}, ${person1Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person1Jpg}, ${person1Jpg2x}`}
                  type="image/jpeg"
                />
                <img className={s.team_img} src={person1Jpg} alt="man" />
              </picture>
              <div className={s.team_card_socialLinks_overlay}>
                <TeamSocialLinks />
              </div>
            </div>
            <p className={s.team_person_name}>John Doe</p>
            <p className={s.team_person_position}>President</p>
          </li>
          <li>
            <div className={s.team_img_thumb}>
              <picture>
                <source
                  srcSet={`${person2Webp}, ${person2Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person2Jpg}, ${person2Jpg2x}`}
                  type="image/jpeg"
                />
                <img className={s.team_img} src={person2Jpg} alt="woman" />
              </picture>
              <div className={s.team_card_socialLinks_overlay}>
                <TeamSocialLinks />
              </div>
            </div>
            <p className={s.team_person_name}>Jane Doe</p>
            <p className={s.team_person_position}>Vice President</p>
          </li>
          <li>
            <div className={s.team_img_thumb}>
              <picture>
                <source
                  srcSet={`${person3Webp}, ${person3Webp2x}`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person3Jpg}, ${person3Jpg2x}`}
                  type="image/jpeg"
                />
                <img className={s.team_img} src={person3Jpg} alt="man 2" />
              </picture>
              <div className={s.team_card_socialLinks_overlay}>
                <TeamSocialLinks />
              </div>
            </div>
            <p className={s.team_person_name}>Steve Smith</p>
            <p className={s.team_person_position}>Marketing Head</p>
          </li>
        </ul>
      </section>
    </>
  );
}
