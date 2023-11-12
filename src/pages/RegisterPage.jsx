import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="center">
      <RegisterForm />
      <p>Register</p>
      <p>
        If you already have an account you can
        <Link to="/login"> login!</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
