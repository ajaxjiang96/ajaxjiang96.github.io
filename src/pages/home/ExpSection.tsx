import styled from '@emotion/styled';
import { FC } from 'react';
import { Section } from '../../components/Section';
import { Item, Timeline } from '../../components/Timeline';

const experiences: Item[] = [
  {
    title: 'Intact Financial Corporation (Canada)',
    date: '2017-2018',
    description: 'Frontend Developer Intern',
  },
  {
    title: 'Graduated From University of Toronto',
    date: '2019',
    description: 'Bachelor of Science in Computer Science',
  },
  {
    title: 'EPAM Systems',
    date: '2019-2020',
    description: 'Junior Software Engineer',
  },
  {
    title: 'EPAM Systems',
    date: '2020-2021',
    description: 'Software Engineer',
  },
  {
    title: 'TUXMART',
    date: '2021-Present',
    description: 'Full-Stack Developer',
    current: true,
  },
];
export const ExpSection: FC = () => {
  return (
    <Section id="experiences">
      <Timeline items={experiences} />
    </Section>
  );
};
