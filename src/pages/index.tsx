import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Signup from './signup'
import { Typography } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import { useRouter } from 'next/router'
import GitHubIcon from '@mui/icons-material/GitHub';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ marginTop: 150, padding: 5, marginLeft: 30 }}>
            <Typography variant='h3' fontFamily={"Segoe UI"}>Welcome to Cosmos Admin Dashboard</Typography>
          </div>

          <div style={{ marginLeft: 30, padding: 5, width: 700 }}>
            <Typography variant='h5' fontFamily={"Segoe UI Emoji"}>
              Congratulations on choosing Cosmos! Your journey to seamless course management and successful sales begins here. Our Admin Dashboard empowers you with the tools and insights you need to take charge of your online course business effortlessly.
            </Typography>
          </div>

          <div style={{ marginLeft: 40, marginTop: 30, padding: 100, display: "flex" }}>
              <div style={{padding: 10 }}>
                <XIcon fontSize='large' onClick={() => {router.push("https://twitter.com/Tanish12071") }} />
              </div>
              <div style={{padding: 10}}>
                <GitHubIcon fontSize='large'></GitHubIcon>
              </div>
          </div>
        </div>

        <div style={{ marginLeft: 250, marginTop: 150 }}>
          <img src='https://static.teachaway.com/wp-content/uploads/2020/11/13140611/teachEnglishonlinewithnoexperience_1851963082.jpg' alt="Cosmos Admin Dashboard" />
        </div>
      </div>
    </div>
  )
}
