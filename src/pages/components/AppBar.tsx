import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atom/user";
import { userEmailState } from "../store/selector/userEmail";
import { isUserLoading } from "../store/selector/isLoading";
import Router, { useRouter } from "next/router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export default function Appbar() {
  const router = useRouter();
  const userEmail1 = useRecoilValue(userEmailState);
  //const userLoading = useRecoilValue(isUserLoading);
  //const setuser = useRecoilState(userState);
  const setUser2 = useSetRecoilState(userState);



  if (userEmail1) {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COSMOS
          </Typography>
          <Button color="inherit" onClick={() => {router.push("/addcourse")}}>Add Courses</Button>
          <Button color="inherit" onClick={() => router.push("/courses")}>Courses</Button>
          <Button color="inherit" onClick={() => {localStorage.setItem("token", " "); setUser2({isLoading: true, userEmail : ""}); router.push("/")}}>Logout</Button>
        </Toolbar> 
      </AppBar>
    </Box>
  );
  }else{
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COSMOS
          </Typography>
          <Button color="inherit" onClick={() => {router.push("/signup")}}>Sign Up</Button>
          <Button color="inherit" onClick={() => {router.push("/signin")}}>Sign In</Button>
          
        </Toolbar>
      </AppBar>
    </Box>

    )
  }


}