import { Button, Card, Typography } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export interface course1 {
  title: string,
  description: string,
  price: string,
  imageLink: string,
  published: boolean,
  _id: string
}


export default function Courses() {
  const [courses, setCourses] = useState([]);
  
  // useEffect(() => {
  //     function callback2(data : any) {
  //         setCourses(data.courses);
  //     }
  //     function callback1(res :  Response) {
  //         res.json().then(callback2)
  //     }
  //     fetch("http://localhost:3000/admin/courses/", {
  //         method: "GET",
  //         headers: {
  //             "Authorization": "Bearer " + localStorage.getItem("token")
  //         }
  //     }).then(callback1)
  // }, []);


  const getCourses = async () => {
    await axios.get("http://localhost:3000/admin/courses/", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
    }).then(res => {
      setCourses(res.data.courses);
    })
  }

  useEffect(()=> {
    getCourses();
  })

  return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {courses.map(course => {
          return <Course1 course2={course} />}
      )}
  </div>
}


export function Course1({ course2 }: { course2: course1 }) {
  const router = useRouter();

  return (
    <div>
      <Card
        variant="outlined"
        style={{
          backgroundColor: "#E5E0FF",
          margin: 10,
          width: 300,
          minHeight: 200,
          padding: 20,
        }}
      >
        <Typography align="center" variant="h5">
          {course2.title}
        </Typography>
        <Typography align="center" variant="h5">
          {course2.description}
        </Typography>
        <img
          src={course2.imageLink}
          alt={`Image for ${course2.title}`}
          style={{ width: '100%', maxWidth: 300, height: 'auto' }}
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push(`/course/${course2._id}`)}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}