const { Link } = require("react-router-dom");

const Footer = () => (
  <div style={footerStyle}>
    <Link to='/admin'>
      Admins
    </Link>
  </div>
)

const footerStyle = {
  borderTop: '1px solid #ddd',
  display: 'flex',
  alignItems: 'center',
  padding: 20
}

export default Footer;