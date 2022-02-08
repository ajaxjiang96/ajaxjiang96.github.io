import styled from '@emotion/styled';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <HeaderBase>
      <Logo src="assets/logo.png" />
      <Nav>
        <HeaderItem href="#home">Home</HeaderItem>
        <HeaderItem href="#portfolio">Portfolio</HeaderItem>
        <HeaderItem href="#experiences">Experiences</HeaderItem>
      </Nav>
      <div />
    </HeaderBase>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 80px;
`;

const HeaderItem = styled.a`
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`;

const Logo = styled.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
`;

const HeaderBase = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-sizing: border-box;
  padding: 40px;
  background: linear-gradient(#fff, #fff, #fff0);
  position: sticky;
  top: 0;
  z-index: 1200;
`;
