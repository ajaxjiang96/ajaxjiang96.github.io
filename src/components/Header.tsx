import styled from '@emotion/styled';
import { FC, UIEvent, useEffect, useState } from 'react';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
  };
  useEffect(() => {
    console.log('listen');
    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <HeaderBase>
      <HeaderItem href="#home">
        <Logo src="assets/logo.png" />
      </HeaderItem>
      <Nav>
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
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1200;
  border-bottom: 1px solid #eee;
`;
