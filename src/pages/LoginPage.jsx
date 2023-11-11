import { Link } from 'react-router-dom';
import LoginForm from 'components/LoginForm';

const Login = () => {
  return (
    <div>
      <LoginForm />
      <p>Please, log in</p>
      <p>
        If you do not have an account please
        <Link to="/register"> register!</Link>
      </p>
    </div>
  );
};

export default Login;
