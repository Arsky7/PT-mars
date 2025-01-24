import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  // State untuk menyimpan data posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data
    const fetchData = async () => {
      try {
        // Mengambil data menggunakan Axios
        const response = await axios.get('http://localhost/myweb/wp-json/wp/v2/posts');
        
        // Menyimpan data ke state
        setPosts(response.data);
        setLoading(false); // Mengubah status loading
      } catch (err) {
        // Menangani error
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); // Memanggil fungsi fetchData
  }, []); // useEffect hanya dijalankan sekali saat komponen di-mount

  // Menampilkan loading, error, atau data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
