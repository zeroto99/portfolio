import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: fixed;
  width: inherit;
  z-index: 10;
  padding: 2rem 0;
  background: #fff;
  color: #363636;
`;

const Nav = styled.nav`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 3rem;
`;

const Menu = styled.ul`
  display: flex;
  gap: 4rem;
`;

const StyledLink = styled(Link)`

`;

const LinkData = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Project', path: '/project' },
  { title: 'Resume', path: '/resume' },
];


const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to='/'>Ji Ah</Logo>
        <Menu>
          {LinkData.map((item, idx) => (
            <li key={idx}><StyledLink to={item.path}>{item.title}</StyledLink></li>
          ))}
        </Menu>
      </Nav>
    </StyledHeader>
  )
}

export default Header;