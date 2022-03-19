import styled from '@emotion/styled';
import { FC } from 'react';
import { compact, join, map } from 'lodash';
export type Item = {
  title: string;
  date: string;
  description?: string;
  current?: boolean;
};

export const Timeline: FC<{ items?: Item[] }> = ({ items }) => {
  return (
    <Container>
      <div className="ellipsis" />
      <div className="ellipsis" />
      <div className="ellipsis" />
      <div className="line">
        {map(items, (item) => (
          <div key={item.title+item.date} className={`dot ${item.current ? 'current' : ''}`}>
            <div className="dot-inner">
              <h1>{item.title}</h1>
              <h5>{join(compact([item.description, item.date]), ', ')}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="ellipsis" />
      <div className="ellipsis" />
      <div className="ellipsis" />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  user-select: none;
  .ellipsis {
    width: 2px;
    height: 2px;
    background: #000;
  }
  .line {
    width: 2px;
    height: 61.8%;
    background: #000;
    display: flex;
    align-items: center;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid #000;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      &.current {
        &::after {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #000;
        }
      }
      .dot-inner {
        position: absolute;
        width: 500px;
        left: 18px;
        top: -20px;
        h1,
        h5 {
          margin: 0;
        }
        h5 {
          color: #999;
          font-weight: 400;
        }
      }

      &:nth-of-type(odd) {
        > .dot-inner {
          text-align: right;
          /* position: absolute; */
          left: -510px;
        }
      }
    }
  }
`;
