"use client";

import { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import Barry from '../assets/otters/otter1.jpg';
import Robin from '../assets/otters/otter2.jpg';
import Maurice from '../assets/otters/otter3.jpg';
import Lesley from '../assets/otters/otter4.jpg';
import Barbara from '../assets/otters/otter5.jpg';

const ottersArray = [
  { image: Barry, name: 'Barry', id: 1 },
  { image: Robin, name: 'Robin', id: 2 },
  { image: Maurice, name: 'Maurice', id: 3 },
  { image: Lesley, name: 'Lesley', id: 4 },
  { image: Barbara, name: 'Barbara', id: 5 },
];

function Home() {
  const [selectedPostName, setSelectedPostName] = useState('Barry');
  const selectedPost = ottersArray.find(otter => otter.name === selectedPostName);

  return (
    <div>
      <Header />
      <div className='app-content'>
        <ul className='post-list'>
          {ottersArray.map((post) => (
            <Post
              key={post.id}
              image={post.image}
              name={post.name}
              setSelectedPostName={setSelectedPostName}
            />
          ))}
        </ul>
        <SelectedItem
          image={selectedPost.image}
          name={selectedPost.name}
        />
      </div>
    </div>
  );
}

export default Home;
