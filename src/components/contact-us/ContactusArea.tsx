// ...existing code...
"use client"
import React, { useState } from 'react';

type FormState = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactusArea = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = (values: FormState): FormErrors => {
    const errs: FormErrors = {};
    if (!values.name.trim()) errs.name = 'Full name is required.';
    if (!values.subject.trim()) errs.subject = 'Subject is required.';
    if (!values.email.trim()) errs.email = 'Email is required.';
    else if (!emailRegex.test(values.email)) errs.email = 'Enter a valid email address.';
    if (!values.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, ...validate({ ...form, [field]: e.target.value }) }));
    }
  };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, ...validate(form) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setTouched({ name: true, subject: true, email: true, message: true });

    if (Object.keys(validation).length > 0) return;

    try {
      setSubmitting(true);
      setSuccess(null);

      // TODO: replace with actual submit logic (fetch / axios)
      await new Promise(resolve => setTimeout(resolve, 800));

      setSuccess('Message sent successfully.');
      setForm(initialState);
      setTouched({});
      setErrors({});
    } catch (err) {
      setSuccess('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="lonyo-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-default-content">
                <h2>Just say hello. Here's how to reach us</h2>
                <p className="max-w616">Have a question? We have the answer. Whether you need technical support or want to know more about this tool.</p>
                <div className="mt-50">
                  <div className="lonyo-contact-us-info-item ">
                    <div className="lonyo-contact-us-icon">
                      <a href="mailto:name@email.com"><img src="assets/images/contact-us/email.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href="mailto:name@email.com">
                        <h4>Send Email:</h4>
                        <p>support@cash2captcha.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item ">
                    <div className="lonyo-contact-us-icon">
                      <a href="tel:94901 52537"><img src="assets/images/contact-us/phone.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href="mailto:name@email.com">
                        <h4>Phone Call:</h4>
                        <p>94901 52537</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item pb-0">
                    <div className="lonyo-contact-us-icon">
                      <a href="#"><img src="assets/images/contact-us/location.svg" alt="" /></a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <h4>Location:</h4>
                      <p>Hyderabad, Telangana State, Indias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-contact-box box2" data-aos="fade-up" data-aos-duration="700">
                <h4>Get In Touch</h4>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="lonyo-main-field">
                    <p>Full Name*</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    <small>{errors.name && <div id="name-error" className="field-error">{errors.name}</div>}</small>
                  </div>

                  <div className="lonyo-main-field">
                    <p>Your Subject*</p>
                    <input
                      type="text"
                      placeholder="Your Subject"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      onBlur={handleBlur('subject')}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    <small>{errors.subject && <div id="subject-error" className="field-error">{errors.subject}</div>}</small>
                  </div>

                  <div className="lonyo-main-field">
                    <p>Email address*</p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                   <small> {errors.email && <div id="email-error" className="field-error">{errors.email}</div>}</small>
                  </div>

                  <p>Message</p>
                  <div className="lonyo-main-field-textarea">
                    <textarea
                      className="button-text"
                      name="textarea"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange('message')}
                      onBlur={handleBlur('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && <div id="message-error" className="field-error">{errors.message}</div>}
                  </div>

                  <button
                    className="lonyo-default-btn extra-btn d-block"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send your message'}
                  </button>

                  {success && <div className="form-status">{success}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-map">
        <iframe
          className="lonyo-contact-us-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3420362717!2d78.24323151683961!3d17.412281014906185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764828495011!5m2!1sen!2sin"
          width="600"
          height="300"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ContactusArea;
// ...existing code...