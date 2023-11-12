import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: gray;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

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
    /* color: #008080; */
    text-decoration: underline;
  }
`;
