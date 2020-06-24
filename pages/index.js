import About from '../components/About';
import Avatar from '../components/Avatar';
import Layout from '../components/Layout';
import LatestPosts from '../components/LatestPosts';

import { getArticles } from '../utils/devto';

const Home = ({ posts }) => {
  return (
    <Layout title="David Sánchez">
      <aside className="avatar">
        <Avatar />
      </aside>

      <section className="about">
        <About />
      </section>

      <section>
        <LatestPosts posts={posts} />
      </section>

      <style jsx>{`
        .avatar {
          margin: 0 auto;
          margin-top: 3rem;
          width: 200px;
        }

        .about {
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
      `}</style>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const posts = await getArticles();
    return { props: { posts } };
  } catch (err) {
    return { props: { posts: null } };
  }
}

export default Home;
