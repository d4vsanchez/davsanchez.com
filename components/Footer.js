import css from 'styled-jsx/css';

import SocialNetworksList from './SocialNetworksList';
import { footerSocialNetworks } from '../constants/social-networks';

const { className, styles } = css.resolve`
  a {
    background-color: var(--gray-darker);
  }
`;

const footerSocialNetworkFilter = (socialNetwork) => footerSocialNetworks.includes(socialNetwork.id);

const Footer = () => {
  return (
    <>
      <SocialNetworksList
        filter={footerSocialNetworkFilter}
        socialNetworkClassName={className}
        socialNetworkStyles={styles}
      />
      <p>
        You can find the source code of this website at{' '}
        <a href="https://github.com/d4vsanchez/davsanchez.com">https://github.com/d4vsanchez/davsanchez.com</a>
      </p>

      <style jsx>{`
        p {
          font-size: 0.75rem;
          margin: 0;
          margin-top: 2rem;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
