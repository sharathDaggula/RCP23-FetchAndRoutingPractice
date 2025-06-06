// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({
      blogData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="bloglist-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="unordered-list">
            {blogData.map(eachItem => (
              <li key={eachItem.id}>
                <BlogItem blogData={eachItem} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
