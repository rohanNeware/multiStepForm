
import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Posts</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <img src={post.avatar} alt="Author" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <h3 className="font-bold text-lg">{post.firstName} {post.lastName}</h3>
                </div>
              </div>
              <p className="text-gray-700">{post.writeup}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
