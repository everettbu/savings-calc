import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DepositForm = ({ initialValues, onSubmit, inputClass, labelClass, errorClass, formClass }) => {
  const validationSchema = Yup.object({
    bank: Yup.string().required('Required'),
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
        <Form id="deposit-form" className={formClass}>
          <div className="mb-4">
            <label htmlFor="bank" className={labelClass}>Bank Name</label>
            <Field type="text" name="bank" id="bank" className={inputClass} />
            <ErrorMessage name="bank" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="balance" className={labelClass}>Account Balance</label>
            <Field type="number" name="balance" id="balance" className={inputClass} />
            <ErrorMessage name="balance" component="div" className={errorClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="annualYield" className={labelClass}>Annual Percentage Rate (%)</label>
            <Field type="number" name="annualYield" id="annualYield" className={inputClass} />
            <ErrorMessage name="annualYield" component="div" className={errorClass} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DepositForm;
