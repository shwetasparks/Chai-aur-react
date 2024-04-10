import useContext from 'react'
import userContext from '../context/UserContext';

function Profile() {
    const {user}=useContext(userContext)
    if(!user) return <div> please login</div>
    return (
        <div>
           welcome {user.username}
        </div>
    )
}

export default Profile;
