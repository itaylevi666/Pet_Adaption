import React, {createContext, useEffect, useState} from 'react'
import localforage from 'localforage'
export const AuthContext = createContext(null)
export const setUserTokenContext = createContext(null)

function UserAuth (props){
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(() => {
        localforage.getItem('token', (error,value) =>{
            if (error){
                setToken(null)
            }else{
                setToken(value)
            }

        })
        localforage.getItem('user', (error,value) =>{
            if (error){
                setUser(null)
            }else{
                setUser(value)
            }

        })

    }, [])

    const context = {user, token, setUserToken}

    function setUserToken (token, user) {
        localforage.setItem('token', token)
        localforage.setItem('user', user)
        setToken(token)
        setUser(user)
    }
return (
  
    <AuthContext.Provider > <setUserTokenContext.Provider value={context}>{props.children}</setUserTokenContext.Provider>
   </AuthContext.Provider>
)
}

export default UserAuth