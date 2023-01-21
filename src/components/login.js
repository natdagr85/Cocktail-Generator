import { GoogleLogin } from 'react-google-login'

const clientId = process.env.REACT_APP_CLIENTID

function Login (props) {

    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
        props.setLoggedIn(true)
    }

    const onFailure = (res) => {
        console.log('LOGIN FAILED! res: ', res)
    }

    if (props.loggedIn === true) {
        return <div></div>
    }
    return(
        <div id='signInButton'>
            <GoogleLogin 
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login