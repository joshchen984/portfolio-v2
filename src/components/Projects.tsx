import React from 'react';
import { css } from '@emotion/react';
import Card from './Card';
import MathPathImage from '../images/mathpath.jpg';
import ClassityImage from '../images/Classity.png';
import TextVideoImage from '../images/Text2Video.png';
import backgroundImage from '../images/ceiling.jpg';
import Heading from './Heading';
import { mq } from '../utils/breakpoints';

type ProjectsProps = {
  reference: any;
};
const Projects = ({ reference }: ProjectsProps) => {
  return (
    <section
      ref={reference}
      css={css`
        padding: 5rem 5rem 10rem;
        overflow: hidden;
        background-image: linear-gradient(
            rgba(61, 67, 180, 0.8),
            rgba(131, 134, 245, 0.8)
          ),
          url('${backgroundImage}');
        background-size: cover;
        transform: skewY(-5deg);

        ${mq[2]} {
          padding: 2rem 2rem 10rem;
        }
      `}
    >
      <Heading
        white
        css={css`
          transform: skewY(5deg);
        `}
      >
        Projects
      </Heading>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
          padding: 0;
          margin: 0;
          transform: skewY(5deg);
          column-gap: 5vw;
          row-gap: 3vh;
          ${mq[1]} {
            column-gap: 0;
          }
        `}
      >
        <Card
          title="MathPathSF"
          description="Gatsby website that explains the different math pathways to get to
            Calculus in San Francisco."
          sourceCode="https://github.com/joshchen984/MathPathSF"
          demoLink="https://www.mathpathsf.com"
          image={MathPathImage}
          imageAlt="MathPathSF"
        />
        <Card
          title="Classity"
          description="A web app that calculates and keeps track of a student's grades. The
            website displays the grades in an easy-to-read format."
          sourceCode="https://github.com/joshchen984/Classity"
          demoLink="https://www.classity.net/"
          image={ClassityImage}
          imageAlt="Classity"
        />

        <Card
          title="Text2Video"
          description="A web app that turns a story written by the user into a full video with images and audio."
          sourceCode="https://github.com/joshchen984/Text2Video"
          demoLink="http://167.172.145.164/"
          image={TextVideoImage}
          imageAlt="Text2Video"
        />
      </div>
    </section>
  );
};

export default Projects;
