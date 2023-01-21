import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENTID

function Logout(props) {
    
    const onSuccess = () => {
        console.log("Log out successfull!");
        props.setLoggedIn(false)
    }
    if (props.loggedIn === false) {
        return <div></div>
    }
    return(
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout