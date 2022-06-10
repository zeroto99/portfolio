import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import menuBtnImg from '../assets/images/drawerbtn.png';
import closeBtnImg from '../assets/images/closebtn.png';

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
  
  ${props => 
    props.responsive && 
    css`
      height: 100%;
      flex-direction: column;
      padding: 5rem;
      text-align: center;
    `
  }
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
  background: url(${menuBtnImg}) center/cover no-repeat;

  @media ${(props) => props.theme.tablet} {
    display: block;
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background: #f2efef;
  color: #363636;
  transition: 1s;
`;

const ClosedBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: url(${closeBtnImg}) center/cover no-repeat;
`;

const LinkData = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Project', path: '/project' },
  { title: 'Resume', path: '/resume' },
];


const Header = () => {
  const drawerMenu = useRef();
  const [toggle, settoggle] = useState(false);

  const handletoggle = () => {
    settoggle(!toggle)
  }

  return (
    <StyledHeader>
      <Logo to='/'>Ji Ah</Logo>
      <DrawerBtn onClick={handletoggle}></DrawerBtn>
      {
        toggle == true ?
        <Aside ref={drawerMenu}>
          <ClosedBtn onClick={handletoggle}></ClosedBtn>
          <Menu responsive onClick={handletoggle}>
            {LinkData.map((item, idx) => (
              <li key={idx}><StyledLink to={item.path}>{item.title}</StyledLink></li>
            ))}
          </Menu>
        </Aside>
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