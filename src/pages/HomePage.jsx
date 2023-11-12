import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome to the HomePage, {name}!</p>
          <p>Now you can use your phone book</p>
        </>
      ) : (
        <>
          <p>Welcome to the phone book, guest!</p>
          <p>Please sign up or sign in!</p>
        </>
      )}
    </div>
  );
};

export default HomePage;
