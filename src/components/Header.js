/* eslint-disable */
import { useRef, useState } from 'react';
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

const MenuItem = styled.li`
  &:hover {
    font-weight: 600;
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
  width: 50%;
  height: 100%;
  background: #fff;
  color: #363636;
  transition: 1s;
  border-top-left-radius: 3rem;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
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
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle)
  }

  return (
    <StyledHeader>
      <Logo to='/'><span className='sr-only'>페이지 로고</span>Ji Ah</Logo>
      <DrawerBtn onClick={handletoggle}><span className='sr-only'>사이드 메뉴 열림 버튼</span></DrawerBtn>
      {
        toggle == true ?
        <Aside ref={drawerMenu}>
          <CloseBtn onClick={handletoggle}><span className='sr-only'>사이드 메뉴 닫기 버튼</span></CloseBtn>
          <Menu responsive onClick={handletoggle}>
            {LinkData.map((item, idx) => (
              <MenuItem key={idx}><StyledLink to={item.path}>{item.title}</StyledLink></MenuItem>
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