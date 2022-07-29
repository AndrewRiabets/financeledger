import blogWebp from '../../images/blog/blog.webp';
import blogWebp2x from '../../images/blog/blog@2x.webp';
import blogJpg from '../../images/blog/blog.jpg';
import blogJpg2x from '../../images/blog/blog@2x.jpg';

import s from './Blog.module.css';
export default function Blog() {
  return (
    <>
      <section id="Blog" className={s.blog_container}>
        <picture>
          <source srcSet={`${blogWebp}, ${blogWebp2x}`} type="image/webp" />
          <source srcSet={`${blogJpg}, ${blogJpg2x}`} type="image/jpeg" />
          <img
            src={blogJpg}
            alt="notebooks and a cup of coffee on the table"
            className={s.blog_Img}
          />
        </picture>

        <div className={s.blog_info_wrapper}>
          <p className={s.blog_date}>April 16 2020</p>
          <h2 className={s.blog_title}>Blog Post One</h2>
          <p className={s.blog_text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type="button" className={s.blog_btn}>
            Read Our Blog
          </button>
        </div>
      </section>
    </>
  );
}
