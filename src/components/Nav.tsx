import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-line: 1px black
`;

const NavLink = styled(Link)`
  color: #002EFF;
  background-color: #F3F5FF;
  text-decoration: none;
  margin: 0 10px;
`;

const Logo = styled.div`
  color: #002EFF;
  font-size: 1.5rem;
  font-weight: bold;
`;


const NavBar = () => {
  return (
    <Nav>
      <Logo>Rentacar</Logo>
      <div>
        <NavLink to="/">Formulario</NavLink>
        <NavLink to="/lista-formulario">Lista Formulario</NavLink>
      </div>
    </Nav>
  );
};

export default NavBar;