import SocialNetworksList from './SocialNetworksList';

const About = () => {
  return (
    <>
      <h2>Hi! I'm David</h2>

      <p>
        I’m a Developer by passion. With a background in Software Engineering, I’m constantly learning and sharing about
        the latest tech stacks out there.
      </p>

      <p>
        I’m currently a Sr. Front End Developer at{' '}
        <a href="https://gorillalogic.com/" target="_blank" rel="noopener noreferrer">
          Gorilla Logic
        </a>
        .
      </p>

      <p>
        I was previously employed at:
        <ul>
          <li>
            <a href="https://ubidots.com" target="_blank" rel="noopener noreferrer">
              Ubidots
            </a>
          </li>
        </ul>
      </p>
      <p>You can find me on the following social networks:</p>

      <SocialNetworksList />

      <style jsx>{`
        ul {
          padding: 0 1rem;
        }
      `}</style>
    </>
  );
};

export default About;
