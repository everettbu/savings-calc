import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DepositForm = ({ onSubmit, inputClass, labelClass, errorClass, buttonClass, formClass }) => {
  const initialValues = {
    balance: '',
    annualYield: '',
  };

  const validationSchema = Yup.object({
    balance: Yup.number().required('Required').min(0, 'Must be positive'),
    annualYield: Yup.number().required('Required').min(0, 'Must be positive').max(100, 'Must be less than 100%'),
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
      {({ isSubmitting }) => (
        <Form className={formClass}>
          <div className="mb-4">
            <label htmlFor="balance" className={labelClass}>Account Balance</label>
            <Field type="number" name="balance" id="balance" className={inputClass} />
            <ErrorMessage name="balance" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="annualYield" className={labelClass}>Annual Yield (%)</label>
            <Field type="number" name="annualYield" id="annualYield" className={inputClass} />
            <ErrorMessage name="annualYield" component="div" className={errorClass} />
          </div>
          <button type="submit" disabled={isSubmitting} className={buttonClass}>
            Calculate Savings
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DepositForm;
