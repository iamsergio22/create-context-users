import React,{useContext} from 'react'
import UserContext from '../context/User/UserContext'

function Profile() {
  const {selectedUser} = useContext(UserContext)

  return (
    <>
      {selectedUser ? (<div className='card card-body text-center'>
        <img src={selectedUser.avatar} alt="" className='card-img-top rounded-circle m-auto img-fluid'/>
        <h2>{`${selectedUser.first_name}${selectedUser.last_name}`}</h2>
        <h3>Correo{selectedUser.email}</h3>
      </div>):(<h1>Not user selected</h1>)}
    </>
  )
}

export default Profile
