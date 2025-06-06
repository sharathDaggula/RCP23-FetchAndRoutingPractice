// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {author, avatarUrl, imageUrl, id, title, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h2 className="item-topic">{title}</h2>
          <div className="author-info">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="item-topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
