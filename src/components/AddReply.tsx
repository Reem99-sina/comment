import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Grid, } from '@mui/material';
import { Button, Checkbox, ListItemDecorator, Menu, MenuItem, Textarea } from '@mui/joy';
import user from "@/images/avatars/image-juliusomo.png"
// import data from "@/data/data.json"
import { Console } from 'console';
import { useSelector } from 'react-redux';
import { datainterface } from '@/data/interface';
// import { error } from 'console';
interface buttonprops{
    buttonname:string,
    commentid:number,replyto:string
}
function AddReply({buttonname,commentid,replyto}:buttonprops) {
    let [image,setimage]=useState("")
    let [name,setName]=useState("")
    let {data}=useSelector((state:any)=>state.data)
    let [content,setContent]=useState("")
    let [reply,setreply]=useState({
        id: data.comments[commentid].replies.length,
        content: "",
        createdAt:"today",
        score: 0,
        replyingTo: replyto,
        user: {
          image: { 
            png: "/images/avatars/image-ramsesmiron.png",
            webp: "/images/avatars/image-ramsesmiron.webp"
          },
          username: data.currentUser.username
        }
    })
    useEffect(()=>{
      let{currentUser}=data
      setimage(currentUser.image.png)
      setName(currentUser.username)
     
    },[buttonname,data,reply])
    function changereply(e:React.ChangeEvent<HTMLTextAreaElement>){
        let copyreply={...reply}
        copyreply.content=(e.target as HTMLTextAreaElement).innerText
        setreply(copyreply)
    }
    function addcomment(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault()
        
        data.comments[commentid].replies.push(reply)
       
        console.log(data)
    }
  return (<>
    <Box sx={{backgroundColor: "white",
    borderRadius: '5px',
    padding: '30px',margin:"20px 0px"}}>
  <Grid container>
    <Grid item lg={1} md={1} sm={1}>
      <Image src={image} width={50} height={50}alt=''/>
    </Grid>
    <Grid item lg={10} md={10} sm={10}>
    <Textarea
      placeholder="Type something here…"
      minRows={3} 
      sx={{
        minWidth: 300,
    
      }}
      onChange={(e)=>{changereply(e)}}
    /></Grid>
    <Grid item lg={1} md={1} sm={1}>
    <Button sx={{ ml: 'auto' }} onClick={(e)=>{addcomment(e)}}>{buttonname}</Button></Grid>

  </Grid>
  </Box> </>
  )
}

export default AddReply