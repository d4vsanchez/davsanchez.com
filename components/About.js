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
        I’m currently the Lead Front-end Developer at <a href="https://ubidots.com">Ubidots</a>. It’s one of the top IoT
        platforms in the market, empowering more than 40.000 applications from thousands ofr developers around the
        world.
      </p>
      <p>You can find me on the following social networks:</p>

      <SocialNetworksList />
    </>
  );
};

export default About;
