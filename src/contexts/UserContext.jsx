import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import fetchRequest from '../utils/fetchAPIRequest';

export const UserContext = createContext();

function UserContextProvider({ children }) {

  const [user, setUser] = useState(null);
  const [cookies, setCookie] = useCookies(['token', 'lastVisited']);
  const navigate = useNavigate()

  useEffect(() => {
    setCookie("lastVisited", document.location.pathname, { path: "/" })
  }, [document.location.pathname]);

  useEffect(() => {

    if (document.location.pathname == "/") return;
    let userCheck = async () => {
      if (user == null && (cookies.token != null || cookies.token != undefined)) {
        let response = await fetch("https://backend.agilesync.co/protected", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": cookies.token
          }
        });

        let res = await response.json();
        if (res.error != null) {
          navigate("/login");
        } else if (res.email.includes("Successfully")) {
          setUser({ 
            email: res.email,
            token: cookies.token 
          });

          if (cookies.lastVisited != undefined) {
            navigate(decodeURI(cookies.lastVisited));
          } else {
            navigate("/app/dashboard");
          }
        }
      } else {
        navigate("/login");
      }
    }

    userCheck();
  }, []);


  const logout = async () => {

    await fetchRequest(
      "https://backend.agilesync.co/logout",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": cookies.token
        }
      }).then((data) => {

        if (data.error != null) {
          alert(data.error);
          return;
        }

        if (data.message.includes("Successfully")) {
          setUser(null);
          document.cookie = null;
          setCookie("lastVisited", document.location.pathname, { path: "/" })
          navigate("/login")
        }
      }).catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser, logout }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider