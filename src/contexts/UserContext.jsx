import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import fetchRequest from '../utils/fetchAPIRequest';

export const UserContext = createContext();

function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [cookies, setCookie] = useCookies(['token','lastVisited']);
    const navigate = useNavigate()

    useEffect(()=>{
      if(user == null && (cookies.token != null || cookies.token != undefined)){
        console.log(cookies.token);
        setUser({token:cookies.token});

        if(cookies.lastVisited != null || cookies.lastVisited != undefined){
          navigate(decodeURI(cookies.lastVisited));
        }else{
          navigate("/app");
        }
      }else{
        navigate("/login");
      }
    },[])

    const logout = async ()=>{
      
     await fetchRequest(
                    "https://backend.agilesync.co/logout",
                    {
                      method:"GET",
                      headers:{
                        "Content-Type":"application/json",
                        "Authorization": cookies.token
                      }
                  }).then((data)=>{

                    if(data.error != null){
                      alert(data.error);
                      return;  
                    }

                    if(data.message.includes("Successfully")){  
                      setUser(null);
                      document.cookie = null;
                      setCookie("lastVisited",document.location.pathname,{path:"/"})
                      navigate("/login")
                    }
                  }).catch((err)=>{
                    console.log(err);
                  });
    }

  return (
    <>
        <UserContext.Provider value={{user,setUser,logout}}>
            {children}
        </UserContext.Provider>
    </>
  )
}

export default UserContextProvider