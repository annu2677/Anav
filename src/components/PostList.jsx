function PostList({ posts }) {

  return (

    <div>

      {posts.map((post) => (

        <div key={post.id}>

          <h3>{post.username}</h3>

          <p>{post.content}</p>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt=""
              width="200"
            />
          )}

        </div>

      ))}

    </div>

  );
}

export default PostList;