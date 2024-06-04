import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoanForm = ({ onSubmit }) => {
  const [loanType, setLoanType] = useState('');

  const initialValues = {
    loanType: '',
    ficoScore: '',
    balance: '',
    interestRate: '',
    monthlyPayment: '',
    monthsLeft: '',
    carModelAge: '',
  };

  const validationSchema = Yup.object({
    loanType: Yup.string().required('Required'),
    carModelAge: Yup.string().when('loanType', {
        is: 'auto',
        then: Yup.string().required('Required'),
        otherwise: Yup.string().notRequired(),
    ficoScore: Yup.string().required('Required'),
    balance: Yup.number().required('Required').min(0, 'Must be positive'),
    interestRate: Yup.number().required('Required').min(0, 'Must be positive').max(100, 'Must be less than 100%'),
    monthlyPayment: Yup.number().required('Required').min(0, 'Must be positive'),
    monthsLeft: Yup.number().required('Required').min(0, 'Must be positive'),
    }),
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
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="loanType">Loan Type</label>
            <Field as="select" name="loanType" onChange={(e) => {
              setLoanType(e.target.value);
              setFieldValue('loanType', e.target.value);
            }}>
              <option value="" label="Select loan type" />
              <option value="personal" label="Personal" />
              <option value="auto" label="Auto" />
            </Field>
            <ErrorMessage name="loanType" component="div" className="error" />
          </div>
          {loanType === 'auto' && (
            <div>
              <label htmlFor="carModelAge">Car Model Age</label>
              <Field as="select" name="carModelAge">
                <option value="" label="Select car model age" />
                <option value="0-1 years old" label="0-1 years old" />
                <option value="2-8 years old" label="2-8 years old" />
                <option value="9-12 years old" label="9-12 years old" />
              </Field>
              <ErrorMessage name="carModelAge" component="div" className="error" />
            </div>
          )}
          <div>
            <label htmlFor="ficoScore">FICO Score</label>
            <Field as="select" name="ficoScore">
              <option value="" label="Select FICO score" />
              <option value="Excellent" label="Excellent" />
              <option value="Very Good" label="Very Good" />
              <option value="Average" label="Average" />
              <option value="Not-so-Good" label="Not-so-Good" />
              <option value="Not Sure" label="Not Sure" />
            </Field>
            <ErrorMessage name="ficoScore" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="balance">Balance</label>
            <Field type="number" name="balance" />
            <ErrorMessage name="balance" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <Field type="number" name="interestRate" />
            <ErrorMessage name="interestRate" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="monthlyPayment">Monthly Payment</label>
            <Field type="number" name="monthlyPayment" />
            <ErrorMessage name="monthlyPayment" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="monthsLeft">Months Left</label>
            <Field type="number" name="monthsLeft" />
            <ErrorMessage name="monthsLeft" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Calculate Loan Savings
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoanForm;
