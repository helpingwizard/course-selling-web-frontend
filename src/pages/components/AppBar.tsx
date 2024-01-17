import { useRecoilState, useRecoilValue } from "recoil";
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
  const userEmail = useRecoilValue(userEmailState);
  //const userLoading = useRecoilValue(isUserLoading);
  const setuser = useRecoilState(userState);



  if (userEmail) {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COSMOS
          </Typography>
          <Button color="inherit">Add Courses</Button>
          <Button color="inherit">Courses</Button>
          <Button color="inherit">Logout</Button>
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
          <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button>
          
        </Toolbar>
      </AppBar>
    </Box>

    )
  }


}