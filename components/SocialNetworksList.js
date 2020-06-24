import css from 'styled-jsx/css';
import dynamic from 'next/dynamic';

import { socialNetworkList } from '../constants/social-networks';
import { Fragment } from 'react';

const SocialNetworkButton = ({ image, href, className }) => {
  const SVG = dynamic(() => import(`../public/assets/${image}.svg`));

  return (
    <>
      <a href={href} className={className}>
        <SVG />
      </a>

      <style jsx>{`
        a {
          align-items: center;
          background: transparent;
          border: none;
          border-radius: 100%;
          display: inline-flex;
          height: 36px;
          margin-right: 1.5rem;
          padding: 10px;
          width: 36px;
        }

        a:last-of-type {
          margin-right: 0;
        }

        a > svg {
          fill: var(--orange);
          width: 100%;
        }
      `}</style>
    </>
  );
};

const { className, styles } = css.resolve`
  a {
    background: var(--gray-dark);
  }
`;

const SocialNetworksList = ({
  filter = () => true,
  socialNetworkClassName = className,
  socialNetworkStyles = styles,
}) => {
  const filteredSocialNetworks = socialNetworkList.filter(filter);

  const List = filteredSocialNetworks.map((socialNetwork) => {
    return (
      <Fragment key={socialNetwork.id}>
        <SocialNetworkButton image={socialNetwork.id} href={socialNetwork.url} className={socialNetworkClassName} />
        {socialNetworkStyles}
      </Fragment>
    );
  });

  return (
    <div>
      {List}

      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default SocialNetworksList;
