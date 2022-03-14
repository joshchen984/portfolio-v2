import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer
      css={css`
        padding: 1.5rem;
        text-align: center;
        margin-top: -5.1rem;
        position: relative;
        background-color: rgb(61, 67, 180);
        width: 100%;
        height: 10rem;

        & > * {
          margin: auto;
        }
        a {
          text-decoration: none;
          color: white;
          &:hover {
            color: #1afe49;
          }
          i {
            &:hover {
              color: #1afe49;
            }
            color: white;
          }
        }
      `}
    >
      <div
        css={css`
          color: white;
          font-size: 4rem;
        `}
      >
        <a
          href="https://github.com/joshchen984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <a
        href="https://github.com/joshchen984"
        target="_blank"
        rel="noopener noreferrer"
      >
        Site made by Josh Chen
      </a>
    </footer>
  );
};

export default Footer;
