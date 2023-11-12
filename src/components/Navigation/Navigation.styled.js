import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  & li {
    margin: 0;
  }

  & a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  & a:hover {
    color: #ffa500; /* Змініть колір при наведенні */
  }
`;
