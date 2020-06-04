import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './FormItem.module.scss';
import { clearCart } from '../../actions/index';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  adress1: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  adress2: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  adress3: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

const FormItem = ({ cartPrice, handleUserInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Wrapper}>
      <h2>Cart total: {cartPrice}$</h2>
      <div className={styles.formWrapper}>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            adress1: '',
            adress2: '',
            adress3: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleUserInfo(values);
            setTimeout(() => {
              dispatch(clearCart());
            }, 10000);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.InputWrapper}>
                <div className={styles.subWrapper}>
                  <div className={styles.fieldWrapper}>
                    <Field name="firstName" placeholder="First Name" className={styles.field} />
                    {errors.firstName && touched.firstName ? (
                      <div className={styles.errMsg}>{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className={styles.fieldWrapper}>
                    <Field name="lastName" placeholder="Last Name" className={styles.field} />
                    {errors.lastName && touched.lastName ? (
                      <div className={styles.errMsg}>{errors.lastName}</div>
                    ) : null}
                  </div>
                  <div className={styles.fieldWrapper}>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Adress"
                      className={styles.field}
                    />
                    {errors.email && touched.email ? (
                      <div className={styles.errMsg}>{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className={styles.subWrapper}>
                  <div className={styles.fieldWrapper}>
                    <Field
                      name="adress1"
                      type="adress1"
                      placeholder="Adress 1"
                      className={styles.field}
                    />
                    {errors.email && touched.email ? (
                      <div className={styles.errMsg}>{errors.adress1}</div>
                    ) : null}
                  </div>
                  <div className={styles.fieldWrapper}>
                    <Field
                      name="adress2"
                      type="adress2"
                      placeholder="Adress 2"
                      className={styles.field}
                    />
                    {errors.email && touched.email ? (
                      <div className={styles.errMsg}>{errors.adress2}</div>
                    ) : null}
                  </div>
                  <div className={styles.fieldWrapper}>
                    <Field
                      name="adress3"
                      type="adress3"
                      placeholder="Adress 3"
                      className={styles.field}
                    />
                    {errors.email && touched.email ? (
                      <div className={styles.errMsg}>{errors.adress3}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Process Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
FormItem.propTypes = {
  cartPrice: PropTypes.number.isRequired,
  handleUserInfo: PropTypes.any.isRequired,
};
export default FormItem;
