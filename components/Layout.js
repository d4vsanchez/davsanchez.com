import Head from 'next/head';

import Footer from './Footer';

const Layout = ({ title = '', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="David Sánchez is a Developer by passion. This is his personal website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content="David Sánchez is a Developer by passion. This is his personal website" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@d4vsanchez" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="David Sánchez is a Developer by passion. This is his personal website"
        />
      </Head>

      <main>{children}</main>

      <footer>
        <div className="content">
          <Footer />
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 0 1rem;
          margin: 0 auto;
          max-width: 600px;
          width: 100%;
        }

        footer {
          background: var(--gray-dark);
          padding: 1rem 0;
          margin-top: 2rem;
        }

        footer .content {
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 600px;
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --gray-darker: #222831;
          --gray-dark: #393e46;
          --gray-light: #eeeeee;
          --orange: #fd7014;
        }

        body {
          background: var(--gray-darker);
          color: var(--gray-light);
          font-family: Roboto, sans-serif;
          font-size: 16px;
        }

        a {
          color: var(--orange);
        }

        p {
          line-height: 1.75;
          margin: 1.5rem 0;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
