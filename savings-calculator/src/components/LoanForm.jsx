import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoanForm = ({ initialValues, onSubmit, inputClass, labelClass, errorClass, formClass }) => {
  const validationSchema = Yup.object({
    bank: Yup.string().required('Required'),
    loanType: Yup.string().oneOf(['Personal', 'Auto'], 'Invalid loan type').required('Required'),
    ficoScore: Yup.string().oneOf(['excellent', 'veryGood', 'average', 'notSoGood', 'notSure'], 'Invalid Fico score').required('Required'),
    balance: Yup.number().required('Required').min(500, 'Must be above $500'),
    interestRate: Yup.number().required('Required').min(0, 'Must be positive').max(100, 'Must be less than 100%'),
    monthlyPayment: Yup.number().required('Required').min(0, 'Must be positive'),
    monthsLeft: Yup.number().required('Required').min(12, 'Must be above 12'),
    vehicleModelAge: Yup.string().test(
      'vehicleModelAge',
      'Vehicle Model Age is required for Auto loans',
      (value, context) => {
        const { loanType } = context.parent;
        if (loanType === 'Auto' && !value) {
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
        <Form id="loan-form" className={formClass}>
          <div className="mb-4">
            <label htmlFor="bank" className={labelClass}>Bank Name</label>
            <Field type="text" name="bank" id="bank" className={inputClass} />
            <ErrorMessage name="bank" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="loanType" className={labelClass}>Loan Type</label>
            <Field as="select" name="loanType" id="loanType" className={inputClass}>
              <option value="" label="Select loan type" />
              <option value="Personal" label="Personal" />
              <option value="Auto" label="Auto" />
            </Field>
            <ErrorMessage name="loanType" component="div" className={errorClass} />
          </div>
          {values.loanType === 'Auto' && (
            <div className="mb-4">
              <label htmlFor="vehicleModelAge" className={labelClass}>Vehicle Model Age</label>
              <Field as="select" name="vehicleModelAge" id="vehicleModelAge" className={inputClass}>
                <option value="" label="Select vehicle model age" />
                <option value="0-1 years old" label="0-1 years old" />
                <option value="2-8 years old" label="2-8 years old" />
                <option value="9-12 years old" label="9-12 years old" />
              </Field>
              <ErrorMessage name="vehicleModelAge" component="div" className={errorClass} />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="ficoScore" className={labelClass}>Fico Score</label>
            <Field as="select" name="ficoScore" id="ficoScore" className={inputClass}>
              <option value="" label="Select Fico score" />
              <option value="excellent" label="Excellent" />
              <option value="veryGood" label="Very Good" />
              <option value="average" label="Average" />
              <option value="notSoGood" label="Not-so-Good" />
              <option value="notSure" label="Not Sure" />
            </Field>
            <ErrorMessage name="ficoScore" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="balance" className={labelClass}>Balance</label>
            <Field type="number" name="balance" id="balance" className={`${inputClass} no-spinner`} />
            <ErrorMessage name="balance" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="interestRate" className={labelClass}>Interest Rate (%)</label>
            <Field type="number" name="interestRate" id="interestRate" className={`${inputClass} no-spinner`} />
            <ErrorMessage name="interestRate" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="monthlyPayment" className={labelClass}>Monthly Payment</label>
            <Field type="number" name="monthlyPayment" id="monthlyPayment" className={`${inputClass} no-spinner`} />
            <ErrorMessage name="monthlyPayment" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="monthsLeft" className={labelClass}>Months Left</label>
            <Field type="number" name="monthsLeft" id="monthsLeft" className={`${inputClass} no-spinner`} />
            <ErrorMessage name="monthsLeft" component="div" className={errorClass} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoanForm;
