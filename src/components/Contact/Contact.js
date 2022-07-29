import { useForm } from 'react-hook-form';
import contactWebp from '../../images/contact/contact.webp';
import contactWebp2x from '../../images/contact/contact@2x.webp';
import contactJpg from '../../images/contact/contact.jpg';
import contactJpg2x from '../../images/contact/contact@2x.jpg';

import s from './Contact.module.css';

export default function Contact() {
  const {
    register,
    formState: { errors },
    // handleSubmit,
    // reset,
  } = useForm({ mode: 'onBlur' });

  return (
    <>
      <section id="Contact" className={s.contact_container}>
        <picture>
          <source
            srcSet={`${contactWebp}, ${contactWebp2x}`}
            type="image/webp"
          />
          <source srcSet={`${contactJpg}, ${contactJpg2x}`} type="image/jpeg" />
          <img className={s.contact_Img} src={contactJpg} alt="man" />
        </picture>

        <div className={s.contact_info_wrapper}>
          <h2 className={s.contact_title}>Request Callback</h2>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className={s.contact_form_input_wrapper}>
              <input
                className={s.contact_form_input}
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register('name', {
                  required: 'This is a required field!',
                  minLength: {
                    value: 2,
                    message: 'minimum 2 symbols',
                  },
                })}
              />
              {errors?.name && (
                <p className={s.contact_form_imput_error}>
                  {errors?.name?.message || 'Error'}
                </p>
              )}
            </div>
            <div className={s.contact_form_input_wrapper}>
              <input
                className={s.contact_form_input}
                id="email"
                type="email"
                name="email"
                placeholder="Enter email*"
                {...register('email', {
                  required: 'This is a required field!',
                  pattern: {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                    message: 'Please enter correct email!',
                  },
                })}
              />
              {errors?.email && (
                <p className={s.contact_form_imput_error}>
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <button className={s.contact_form_btn} type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
