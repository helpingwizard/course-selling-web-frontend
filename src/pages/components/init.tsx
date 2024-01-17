import { useSetRecoilState } from "recoil";
import { userState } from "../store/atom/user";
import axios from "axios";
import { useEffect } from "react";


export default function InitComponent()  {
  const setUser = useSetRecoilState(userState);

  const init = async() => {
    try {
      const response = await axios.get("http//localhost:3000/admin/me" , {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })

      if (response.data.username) {
        setUser({
          isLoading : false,
          userEmail : response.data.username
        })
      }else{
        setUser({
          isLoading: true,
          userEmail : null
        })
      }
    }catch(e) {
      setUser({
        isLoading : false,
        userEmail : null
      })
    }
  };

  useEffect(() => {
    init();
  }, []);


  return <></>

  }
