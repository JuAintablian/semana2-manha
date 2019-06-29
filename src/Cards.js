import './Cards.css';
import React from 'react';

const Cards = ({ posts }) => (
    <div>
        {posts.map(post => (
            <div key={post.id} className="card">
                <h2 className="titulo">{post.title}</h2>
                <p className="corpo">{post.body}</p>
            </div>
        ))}
    </div>
)

export default Cards;