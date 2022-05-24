import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({posts}) => {
  return (
    <div className='card'> 
    <Link className="link" to={`/post/${posts.id}`}>
        <span className="title">{posts.title}</span>
        <img src={posts.img} alt="" className="img" />
        <p className="desc">{posts.desc}</p>
        <button className="cardButton">Read More</button>
    </Link>
    </div>  
  )
}

export default Card