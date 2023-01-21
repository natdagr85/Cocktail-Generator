import { googleLogout } from '@react-oauth/google';
import { Button } from 'react-bootstrap';

const clientId = process.env.REACT_APP_CLIENTID

function Logout(props) {
    
    const onSuccess = () => {
        console.log("Log out successfull!");
        props.setLoggedIn(false)
        googleLogout()
        localStorage.removeItem("credential");
    }
    if (props.loggedIn === false) {
        return <div></div>
    }
    return(
        <div id="signOutButton">
            <Button onClick={onSuccess}>Logout</Button>
        </div>
    )
}

export default Logout