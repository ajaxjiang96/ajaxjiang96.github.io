import styled from '@emotion/styled';
import { FC } from 'react';
import { Section } from '../../components/Section';

export const HomeSection: FC = () => {
  return (
    <Section id="home">
      <Container>
        <PortraitContainer>
          <PortraitImg src="assets/portrait.png" />
        </PortraitContainer>
        <div
          className=""
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <Name>Ajax (Jiacheng) Jiang</Name>
          <Tag inverse>Suzhou, China</Tag>
          <Tag>Software Developer</Tag>
          <Tag>UI/UX Designer</Tag>
          <Tag>Cat Owner</Tag>
        </div>
      </Container>
    </Section>
  );
};

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Tag: FC<{ inverse?: boolean }> = ({ inverse, children }) => {
  return (
    <TagBase inverse={inverse}>
      <div className="content">{children}</div>
      <div className="shadow"></div>
    </TagBase>
  );
};

const TagBase = styled.div<{ inverse?: boolean }>`
  box-sizing: content-box;
  position: relative;

  .content {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: ${(props) => (props.inverse ? '#000' : '#fff')};
    color: ${(props) => (props.inverse ? '#fff' : '#000')};
    border: 1px solid #000;
    /* box-shadow: 0 0 ${(props) => (props.inverse ? '#fff' : '#000')}; */
    transition: 300ms ease-in-out;
    position: relative;
  }

  .shadow {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: ${(props) => (props.inverse ? '#fff' : '#000')};
    border: 1px solid ${(props) => (props.inverse ? '#000' : '#fff')};
    transition: 300ms ease-in-out;
    z-index: -1;
  }
  &:hover {
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 4px;
      top: 4px;
      z-index: -1;
    }
    .content {
      transform: translate(-4px, -4px);
    }
    /* box-shadow: 8px 8px ${(props) => (props.inverse ? '#fff' : '#000')}; */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;

const PortraitImg = styled.img`
  height: 80%;
`;

const PortraitContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
