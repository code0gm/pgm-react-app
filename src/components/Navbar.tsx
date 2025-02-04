import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">홈</Link>
      &nbsp;
      <Link to="/dashboard">대시보드</Link>
      <br />
    </nav>
  )
}

export default Navbar
