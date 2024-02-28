// Write your JS code herei
import './index.css'

const BlogItem = props => {
  const {eachitem} = props
  const {publishedDate, description, title} = eachitem
  return (
    <li className="listCont">
      <div className="titleDateCont">
        <h1 className="postTitle">{title}</h1>
        <p className="publisheddate">{publishedDate}</p>
      </div>
      <p className="postdescription">{description}</p>
    </li>
  )
}
export default BlogItem
