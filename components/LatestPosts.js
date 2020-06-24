const Post = ({ title, url, description, published_timestamp, readable_publish_date }) => {
  return (
    <a href={url} aria-label={title}>
      <article>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="date">
          Published on: <time dateTime={published_timestamp}>{readable_publish_date}</time>
        </p>
      </article>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        article {
          background-color: var(--gray-dark);
          padding: 0.5rem;
          margin: 1rem 0;
        }

        article h3 {
          color: var(--orange);
          font-size: 1rem;
          font-weight: normal;
          overflow: hidden;
          text-decoration: underline;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        article .description {
          font-size: 0.875rem;
          line-height: 1.75;
          margin: 0;
          margin-top: 0.5rem;
        }

        article .date {
          font-size: 0.875rem;
          font-style: italic;
          text-align: right;
          margin: 0;
          margin-top: 1rem;
        }
      `}</style>
    </a>
  );
};

const PostList = ({ posts }) => {
  if (posts == null) {
    return (
      <>
        <p>An error ocurred, no posts were fetched 😥!</p>
        <style jsx>{`
          p {
            text-align: center;
            font-weight: bold;
          }
        `}</style>
      </>
    );
  }

  return posts.map((post) => <Post key={post.id} {...post} />);
};

const LatestPosts = ({ posts }) => {
  return (
    <>
      <h2>Latest posts</h2>
      <PostList posts={posts} />
    </>
  );
};

export default LatestPosts;
