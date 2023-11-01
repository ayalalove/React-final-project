import React, { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import './Login.css';
import { StoreType } from '../../redux/store';
// import { User } from '../../types/User';

interface LoginProps {}

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: FC<LoginProps> = () => {
  const allStore = useSelector((store: StoreType) => store)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);

  const myForm = useFormik<LoginFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      navigate('/main-page/home');
      const user = { firstName: values.username,password:values.password };
      debugger
      dispatch({ type: 'SET_USER', data: user });
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Must enter a username'),
      password: yup.string().required('The field is required').min(1, 'Must enter a 1-digit code'),
    }),
  });

  return (
    <div className="container">
      <form onSubmit={myForm.handleSubmit}>
        <div className="screen">
          <div className="screen__content">
            <div className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  id="username"
                  name="username"
                  onChange={myForm.handleChange}
                  value={myForm.values.username}
                  placeholder="Username"
                  ref={usernameRef}
                />
                {myForm.errors.username ? <div className="error">{myForm.errors.username}</div> : null}
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  id="password"
                  name="password"
                  onChange={myForm.handleChange}
                  value={myForm.values.password}
                  placeholder="Password"
                />
                {myForm.errors.password ? <div className="error">{myForm.errors.password}</div> : null}
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
