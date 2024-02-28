// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {Listblogs} = props
  const a = 'a'
  return (
    <ul className="MainlistContainer">
      {Listblogs.map(each => (
        <BlogItem eachitem={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
