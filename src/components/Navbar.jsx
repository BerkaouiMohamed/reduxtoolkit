import {Link} from 'react-router-dom'
 
function Navbar() {
  return (
    <div>

        <h2>logo</h2>
        <ul>
            <li><Link to="/">home</Link></li>
            <li>order</li>
        </ul>
      
    </div>
  )
}

export default Navbar
