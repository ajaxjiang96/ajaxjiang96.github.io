import styled from '@emotion/styled';
import { FC } from 'react';

const SectionBase = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 100px); /* header height */
  position: relative;
`;

export const Section: FC<{ id?: string }> = ({ id, children }) => {
  return (
    <SectionBase>
      <a
        id={id}
        style={{
          position: 'absolute',
          top: -100,
        }}
      />
      {children}
    </SectionBase>
  );
};
