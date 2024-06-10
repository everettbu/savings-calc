import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ initialValues, onSubmit, inputClass, labelClass, errorClass, formClass }) => {
  const validationSchema = Yup.object({
    inquiryType: Yup.string().oneOf(['Technical Questions', 'Consumer Loans', 'General Information', 'Employment', 'Information Sharing Opt-Out', 'Real Estate Loans'], 'Invalid category').required('Required'),
    userName: Yup.string().required('Required'),
    email: Yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email not valid').required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form id="contact-form" className={formClass}>
          <div className="mb-4">
            <label htmlFor="inquiryType" className={labelClass}>Inquiry Category</label>
            <Field as="select" name="inquiryType" id="inquiryType" className={inputClass}>
              <option value="" label="Select Category" />
              <option value="Technical Questions" label="Technical Questions" />
              <option value="Consumer Loans" label="Consumer Loans" />
              <option value="General Information" label="General Information" />
              <option value="Employment" label="Employment" />
              <option value="Information Sharing Opt-Out" label="Information Sharing Opt-Out" />
              <option value="Real Estate Loans" label="Real Estate Loans" />
            </Field>
            <ErrorMessage name="inquiryType" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className={labelClass}>Name</label>
            <Field type="text" name="userName" id="userName" className={inputClass} />
            <ErrorMessage name="userName" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={labelClass}>Email</label>
            <Field type="text" name="email" id="email" className={inputClass} />
            <ErrorMessage name="email" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="streetAddress" className={labelClass}>Street Address</label>
            <Field type="text" name="streetAddress" id="streetAddress" className={`${inputClass} no-spinner`} />
          </div>
          <div className="mb-4 flex flex-col">
                <div className="flex flex-row">
                    <label htmlFor="city" className={`${labelClass} mr-20`}>City</label>
                    <label htmlFor="state" className={`${labelClass} ml-12`}>State</label>
                    <label htmlFor="zip" className={`${labelClass} ml-10`}>ZIP</label>
                </div>
                <div className='flex flex-row'>
                    <Field type="text" name="city" id="city" className={`${inputClass} no-spinner mr-6`} style={{width: '130px'}}/>
                    <Field type="text" name="state" id="state" className={`${inputClass} no-spinner mr-8`} style={{width: '40px'}} maxLength="2"/>
                    <Field type="text" name="zip" id="zip" className={`${inputClass} no-spinner`} style={{width: '60px'}} maxLength="5"/>
                </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className={labelClass}>Comment</label>
            <textarea type="text" name="comment" id="comment" className={`${inputClass} no-spinner`} rows="5"/>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;