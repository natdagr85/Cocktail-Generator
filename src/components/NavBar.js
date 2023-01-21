import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Login from './login'
import Logout from './logout'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { useState } from 'react'

const clientId = '571697703344-687dq6ro10sv6r2sllor8933ngetdnd5.apps.googleusercontent.com';

function NavBar () {
  let [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      };
      gapi.load('client:auth2', start);
    })
  
  
  return (
        <div className='nav'>
          <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
        <Nav.Item>
          <Link className="btn chicken" to="/">Logo</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="btn chicken" to='/liquor'>Types of Liquor</Link>
          </Nav.Item>
        <Nav.Item>
          <Link className="btn chicken" to='/help'>Help</Link>
        </Nav.Item>
      </Nav>
      <div className='logoDiv'>
            {/* <h4 className='logo'>Log-In</h4> */}
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
      </div>
    )
}

export default NavBar