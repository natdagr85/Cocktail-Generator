import { GoogleLogin } from '@react-oauth/google'

function Login (props) {

    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
        props.setLoggedIn(true)
        localStorage.setItem("credential", res.credential);
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
                onSuccess={onSuccess}
                onError={onFailure}
            />
        </div>
    )
}

export default Login