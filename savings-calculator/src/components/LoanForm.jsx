import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoanForm = ({ onSubmit }) => {
  const initialValues = {
    loanType: '',
    ficoScore: '',
    balance: '',
    interestRate: '',
    monthlyPayment: '',
    monthsLeft: '',
    vehicleModelAge: '',
  };

  const validationSchema = Yup.object({
    loanType: Yup.string().oneOf(['personal', 'auto'], 'Invalid loan type').required('Required'),
    ficoScore: Yup.string().oneOf(['excellent', 'veryGood', 'average', 'notSoGood', 'notSure'], 'Invalid Fico score').required('Required'),
    balance: Yup.number().required('Required').min(5000, 'Must be above $5000'),
    interestRate: Yup.number().required('Required').min(0, 'Must be positive').max(100, 'Must be less than 100%'),
    monthlyPayment: Yup.number().required('Required').min(0, 'Must be positive'),
    monthsLeft: Yup.number().required('Required').min(12, 'Must be above 12'),
    vehicleModelAge: Yup.string().test(
      'vehicleModelAge',
      'Vehicle Model Age is required for Auto loans',
      (value, context) => {
        const { loanType } = context.parent;
        if (loanType === 'auto' && !value) {
          return false;
        }
        return true;
      }
    ),
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
        <Form>
          <div>
            <label htmlFor="loanType">Loan Type</label>
            <Field as="select" name="loanType" id="loanType">
              <option value="" label="Select loan type" />
              <option value="personal" label="Personal" />
              <option value="auto" label="Auto" />
            </Field>
            <ErrorMessage name="loanType" component="div" className="error" />
          </div>
          {values.loanType === 'auto' && (
            <div>
              <label htmlFor="vehicleModelAge">Vehicle Model Age</label>
              <Field as="select" name="vehicleModelAge" id="vehicleModelAge">
                <option value="" label="Select vehicle model age" />
                <option value="0-1 years old" label="0-1 years old" />
                <option value="2-8 years old" label="2-8 years old" />
                <option value="9-12 years old" label="9-12 years old" />
              </Field>
              <ErrorMessage name="vehicleModelAge" component="div" className="error" />
            </div>
          )}
          <div>
            <label htmlFor="ficoScore">Fico Score</label>
            <Field as="select" name="ficoScore" id="ficoScore">
              <option value="" label="Select Fico score" />
              <option value="excellent" label="Excellent" />
              <option value="veryGood" label="Very Good" />
              <option value="average" label="Average" />
              <option value="notSoGood" label="Not-so-Good" />
              <option value="notSure" label="Not Sure" />
            </Field>
            <ErrorMessage name="ficoScore" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="balance">Balance</label>
            <Field type="number" name="balance" id="balance" />
            <ErrorMessage name="balance" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <Field type="number" name="interestRate" id="interestRate" />
            <ErrorMessage name="interestRate" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="monthlyPayment">Monthly Payment</label>
            <Field type="number" name="monthlyPayment" id="monthlyPayment" />
            <ErrorMessage name="monthlyPayment" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="monthsLeft">Months Left</label>
            <Field type="number" name="monthsLeft" id="monthsLeft" />
            <ErrorMessage name="monthsLeft" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoanForm;
