import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { course1 } from "../courses";
import { useRouter } from 'next/router'
import { courseState } from "../store/atom/course";
import { isCourseLoading , courseTitle, courseDetails, coursePrice, courseImage, courseDescription} from "../store/selector/course";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography } from "@mui/material";
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

import Container from '@mui/material/Container'

export default function CourseComp() {
  
  const router = useRouter();
  const {courseId} = router.query;
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);

  useEffect(() => {
    if (courseId) {
      axios.get("http://localhost:3000/admin/course/" + courseId , {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
      }).then(res => {
        setCourse({isLoading: false, course : res.data.course});
      });
      
    }
  },[]);

  return <div>
    <GrayTopper/>
    <Grid container>
            <Grid item lg={5} md={12} sm={12}>
                <UpdateCard />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <ShowCard/>
            </Grid>
        </Grid>
  </div>


}

function GrayTopper() {
  const title1 = useRecoilValue(courseTitle);


  return <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div>
                <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
                    {title1}
                </Typography>
            </div>
        </div>
    </div>


}

function UpdateCard() {
  const [courseDetails, setCourse] = useRecoilState(courseState);
  const course = courseDetails.course || {title:"", description:"",imageLink:"",price:"",_id:""};
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.imageLink);
  const [price, setPrice] = useState(course.price);


  return (
    <div style={{marginTop: 300}}>
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
            Update Course
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              
              value={title}
              
              autoFocus

              onChange={(e) => {
                setTitle(e.target.value);
              }}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              
              value={description}
              
              id="description"

              onChange={(e) => {
                setDescription(e.target.value);
              }}
              
              
              
            />


            <TextField
              margin="normal"
              required
              fullWidth
              
              value={price}
              
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
              
              
              value={image}
              
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
                await axios.put("http://localhost:3000/admin/courses/" + course._id,{
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
               const updatedCourse = {
                _id: course._id,
                title: title,
                description: description,
                imageLink: image,
                price
                
             };
             setCourse({isLoading: false, course: updatedCourse});
             alert("Course Updated")
            }}
            

              
            >
              Update Course
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


function ShowCard() {
  const title = useRecoilValue(courseTitle);
  const description = useRecoilValue(courseDescription);
  const price = useRecoilValue(coursePrice);
  const img = useRecoilValue(courseImage);
  return <div style={{display: "flex",  marginTop: 100, justifyContent: "center", width: "100%", marginLeft: 400}}>
    <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2

    }}>
      

      <img src= {img} style={{width: 350}}></img>
      <Typography  variant="h5" >{title}</Typography>
      <Typography  variant="subtitle2"> {description}</Typography>
      <Typography variant="subtitle1">Rs. {price}</Typography>
    </Card>

  </div>
}