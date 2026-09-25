const API_URL = "https://pingup-backend-u6df.onrender.com/api/likes";

console.log("REAL LIKE API FILE LOADED:", API_URL);

export const toggleLike = async (postId, userId) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });

  return response.json();
};

export const getLikeCount = async (postId) => {
  const response = await fetch(`${API_URL}/${postId}/count`);
  return response.json();
};

export const isPostLikedByUser = async (postId, userId) => {
  const response = await fetch(`${API_URL}/${postId}/liked/${userId}`);
  const data = await response.json();
  return data?.liked ?? data;
};