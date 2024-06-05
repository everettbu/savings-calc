import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DepositForm = ({ onSubmit }) => {
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
        <Form>
            <div>
                <label htmlFor="balance">Account Balance</label>
                <Field type="number" name="balance" id="balance" />
                <ErrorMessage name="balance" component="div" className="error" />
            </div>
            <div>
                <label htmlFor="annualYield">Annual Yield (%)</label>
                <Field type="number" name="annualYield" id="annualYield" />
                <ErrorMessage name="annualYield" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
                Calculate Savings
            </button>
        </Form>
      )}
    </Formik>
  );
};

export default DepositForm;
