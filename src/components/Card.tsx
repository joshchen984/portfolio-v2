import React from 'react';
import { css } from '@emotion/react';
import { Button } from './Buttons';

type CardProps = {
  demoVideo?: boolean;
  demoLink?: string;
  sourceCode: string;
  description: string;
  title: string;
  image: any;
  imageAlt: string;
};
const Card = ({
  demoVideo,
  demoLink = '',
  sourceCode,
  description,
  title,
  image,
  imageAlt,
}: CardProps) => {
  const buttonCSS = css`
    font-size: 1.2em;
    padding: 0.7em 2em;
    margin: 0 1vw;
  `;
  let DemoButton = (
    <Button
      as="a"
      href={demoLink}
      round
      target="_blank"
      rel="noopener noreferrer"
      css={buttonCSS}
    >
      Demo
    </Button>
  );
  if (demoVideo) {
    DemoButton = <Button>Other</Button>;
  }

  return (
    <div
      css={css`
        position: relative;
        background-color: white;
        padding: 0 0 2rem;
        grid-column: span 2;
        img {
          width: 100%;
        }
      `}
    >
      <img src={image} alt={imageAlt} />
      <h3
        css={css`
          position: absolute;
          background-color: rgba(128, 128, 128, 0.7);
          color: white;
          top: 0;
          left: 0;
          margin: 0;
          font-size: 2rem;
          font-weight: 400;
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          padding: 0 1rem;
          font-size: 1.2rem;
          height: 6rem;
        `}
      >
        {description}
      </p>
      <div
        css={css`
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {DemoButton}
        <Button
          css={buttonCSS}
          as="a"
          href={sourceCode}
          round
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Button>
      </div>
    </div>
  );
};

export default Card;
