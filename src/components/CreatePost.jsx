import { useState } from "react";
import { createPost } from "../services/api";

function CreatePost({ onPostAdded }) {

  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      username,
      content,
      imageUrl,
    };

    try {
      const newPost = await createPost(post);

      onPostAdded(newPost);

      setUsername("");
      setContent("");
      setImageUrl("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <textarea
        placeholder="Write something..."
        value={content}
        onChange={(e)=>setContent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e)=>setImageUrl(e.target.value)}
      />

      <button type="submit">
        Post
      </button>

    </form>
  );
}

export default CreatePost;