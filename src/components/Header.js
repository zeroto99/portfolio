import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import btnImg from '../assets/images/drawerbtn.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: inherit;
  line-height: 7rem;
  z-index: 10;
  background: #fff;
  color: #363636;
  font-family: Poppins, sans-serif;
`;

const Logo = styled(Link)`
  font-size: 3rem;
`;

const Menu = styled.ul`
  display: flex;
  gap: 4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`

`;

const DrawerBtn = styled.button`
  display: none;
  width: 2rem;
  height: 2rem;
  border: none;
  background: url(${btnImg}) center/cover no-repeat;

  @media ${(props) => props.theme.tablet} {
    display: block;
  }
`;

const DrawerMenu = styled.aside`
  
`;

const LinkData = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Project', path: '/project' },
  { title: 'Resume', path: '/resume' },
];


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo to='/'>Ji Ah</Logo>
      <DrawerBtn onClick={() => setOpen(true)}></DrawerBtn>
      {
        open == true ?
        <DrawerMenu>메뉴</DrawerMenu>
        : null
      }
      <Nav>
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