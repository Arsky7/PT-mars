// src/components/Post.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data posts dari API WordPress
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost/myweb/s'); // Ganti URL sesuai dengan URL API WordPress Anda
        setPosts(response.data); // Menyimpan data posts
        setLoading(false); // Set loading ke false setelah data diterima
      } catch (err) {
        setError(err.message); // Menyimpan error jika ada
        setLoading(false);
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {loading && <p>Loading...</p>} {/* Menampilkan loading jika data belum diterima */}
      {error && <p>Error: {error}</p>} {/* Menampilkan error jika ada */}

      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </li>
          ))
        ) : (
          <li>No posts available</li>
        )}
      </ul>
    </div>
  );
}

export default Post;
