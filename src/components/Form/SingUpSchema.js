import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  adress1: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  adress2: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  adress3: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});
