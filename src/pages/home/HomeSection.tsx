import styled from '@emotion/styled';
import { FC, useCallback, useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { noop } from 'lodash';

export const HomeSection: FC = () => {
  const [spline, setSpline] = useState<Application>();
  const [loaded, setLoaded] = useState<boolean>(false);

  function onLoad(spline: Application) {
    setSpline(spline);
    setLoaded(true);
  }

  const triggerScroll = useCallback(() => {
    spline?.emitEvent('scroll', 'F7DE28F9-7180-4E2C-BAE8-B4E886CACA87');
  }, [spline]);

  useEffect(() => {
    document.body.onscroll = () => {
      triggerScroll();
    };
    () => {
      document.body.onscroll = noop;
    };
  }, [triggerScroll]);

  return (
    <Section id="home">
      <Container>
        <PortraitContainer>
          <Spline
            scene="https://prod.spline.design/Rr5jnmBGP3sHEfDz/scene.spline"
            onLoad={onLoad}
          />
          {/* <PortraitImg src="assets/portrait.svg" /> */}
        </PortraitContainer>
        <Info>
          <div className={`container ${loaded ? 'animate' : ''}`}>
            <Name>Ajax (Jiacheng) Jiang</Name>
            <Tag inverse>Suzhou, China</Tag>
            <Tag>Software Developer</Tag>
            <Tag>UI/UX Designer</Tag>
            <Tag>Cat Owner</Tag>
          </div>
        </Info>
      </Container>
    </Section>
  );
};

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Info = styled.div`
  @keyframes slidein {
    from {
      opacity: 0;

      transform: translateY(50px) scale(0.9) rotateX(-60deg) ;
    }

    to {
      opacity: 1;
      transform: translateY(0px) scale(1) rotateX(0deg);
    }
  }
  margin-top: 200px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  /* position: 'absolute'; */
  /* left: 50%; */
  .container > * {
    opacity: 0;
  }

  .container.animate > * {
    /* animation-delay: 2s; */
    animation-duration: 1s;
    animation-name: slidein;
    animation-fill-mode: forwards;
  }

  .container.animate > *:nth-of-type(1) {
    animation-delay: 2s;
  }
  .container.animate > *:nth-of-type(2) {
    animation-delay: 2.2s;
  }
  .container.animate > *:nth-of-type(3) {
    animation-delay: 2.4s;
  }
  .container.animate > *:nth-of-type(4) {
    animation-delay: 2.6s;
  }
  .container.animate > *:nth-of-type(5) {
    animation-delay: 2.8s;
  }

  .container {
    width: 300px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    margin-left: 300px;
  }
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
  width: 250px;

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
  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  opacity: 0;

  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-name: fade;
  animation-fill-mode: forwards;
`;
