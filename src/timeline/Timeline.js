import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './Post'

function Timeline() {
  const[ posts, seetPosts] = useState([
    {
      user: "redian_",
      postImage:"https://news.artnet.com/app/news-upload/2014/07/Johannes_Vermeer_1632-1675_-_The_Girl_With_The_Pearl_Earring_1665-e1435072137333.jpg",
      likes: 32,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:"https://miro.medium.com/v2/resize:fit:584/1*58vziXRx1l8pQBSQVeHABg.jpeg",
      likes: 22,
      timestamp: "1d",
    },
    {
      user: "trillist",
      postImage:"https://www.jerrysartarama.com/blog/images/2013/03/Famous-Artist-Quotes-Picasso2.jpg",
      likes: 44,
      timestamp: "4d",
    },
  ])
  return (
    <div className='timeline'>
        <div className="timeline__left">
            Timeline
            <div className="timeline__posts">
            {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline