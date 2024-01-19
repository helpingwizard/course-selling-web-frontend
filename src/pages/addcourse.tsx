import { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";


export default function AddCourse() {
  const [title ,setTitle ] = useState("");
  const [description , setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="titlle"
              label="Title"
              name="title"
              
              autoFocus

              onChange={(e) => {
                setTitle(e.target.value);
              }}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              
              id="description"

              onChange={(e) => {
                setDescription(e.target.value);
              }}
              
              
              
            />


            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              
              autoFocus

              onChange={(e) => {
                setPrice(e.target.value);
              }}
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="image"
              label="Image Link"
              name="image"
              
              autoFocus

              onChange={(e) => {
                setImage(e.target.value)
              }}
              
            />

            
            
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

              onClick={async() => {
                const res = await axios.post("http://localhost:3000/admin/courses",{
                  title: title,
                  description : description,
                  price : price,
                  imageLink : image,
                  published:  true

                },  {
                  headers: {
                      "Authorization": "Bearer "+ localStorage.getItem("token")

                  }
               });
               alert('Course added!')
             }}

              
            >
              Add Course
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </div>
  )
}
