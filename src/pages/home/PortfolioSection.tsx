import styled from '@emotion/styled';
import { FC } from 'react';
import { Section } from '../../components/Section';

export const PortfolioSection: FC = () => {
  return (
    <Section id="portfolio">
      <Container>
      <h1>Work in progress...</h1>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;
