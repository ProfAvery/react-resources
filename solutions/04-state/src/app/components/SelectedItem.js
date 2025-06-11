"use client";

import Image from "next/image";

function SelectedItem({ image, name }) {
    return (
        <div className='selected-item'>
            <p>{name}</p>
            <Image src={image} alt={name} />
        </div>
    )
}

export default SelectedItem;
