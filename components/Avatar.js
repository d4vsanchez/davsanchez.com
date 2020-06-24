const Avatar = () => {
  return (
    <figure>
      <img src="./assets/david-sanchez.png" alt="A photo of David" />

      <style jsx>{`
        img {
          max-width: 100vw;
          width: 100%;
        }
      `}</style>
    </figure>
  );
};

export default Avatar;
