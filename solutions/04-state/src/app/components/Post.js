"use client";

import Image from "next/image";

function Post({ image, name, setSelectedPostName }) {
    return (
        <li className='post-component'>
          <button onClick={() => setSelectedPostName(name)}>
            <Image src={image} alt={name}/>
            <p className="post-name">{name}</p>
          </button>
        </li>
    )
}

export default Post;
