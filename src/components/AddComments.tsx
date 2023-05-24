// import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Grid, } from '@mui/material';
import { Button, Checkbox, ListItemDecorator, Menu, MenuItem, Textarea } from '@mui/joy';
import user from "@/images/avatars/image-juliusomo.png"
import dataresult from "@/data/data.json"
import { useDispatch } from 'react-redux';
import { addnnewdata } from '@/features/data/analyticsSlice';
import { commentsinterface, datainterface, imageinterface, userinterface } from '@/data/interface';
interface buttonprops{
    buttonname:string
}
function AddComments({buttonname}:buttonprops) {
    let [image,setimage]=useState("")
    let [name,setName]=useState("")
    let [content,setContent]=useState("")
   let dispatch= useDispatch()
  let [data,setdata]=useState<datainterface>(dataresult as any as datainterface) 
    
    let [comment,setcomment]=useState<commentsinterface>({
      id: data.comments.length+1,
      content: "",
      createdAt: "today",
      score: 0,
      user: {image: {
        png:data.currentUser.image.image.png,
        webp:data.currentUser.image.image.webp,
      }as imageinterface ,
        username: data.currentUser.username} as userinterface,
      replies: []
    })
    useEffect(()=>{
      let{currentUser}=data
      setimage(currentUser.image.image.png||"")
      setName(currentUser.username)
     
    },[buttonname,data])
    // function addcomment(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    //     e.preventDefault()

    //     let element=(e.target as HTMLButtonElement)

    //     if(element.innerText==="reply"){
    //         if(content.includes("@")){
    //             content=content.replace("@","")
    //             const firstSpaceIndex = content.indexOf(' ');
    //             const firstWord = firstSpaceIndex === -1 ? content : content.substring(0, firstSpaceIndex);
    //              let contentreply=content.substring(firstSpaceIndex)
    //              let copyreply={...reply}
    //              copyreply.content=contentreply
    //              copyreply.createdAt=new Date().toString()
    //              copyreply.replyingTo=firstWord
    //              copyreply.user.username=name
    //              copyreply.user.image.png=image
    //              setreply(copyreply)
    //              data.comments.filter((ele)=>ele.user.username===copyreply.replyingTo).map((element)=>{
    //                 element.replies.push(copyreply)
    //              })
    //              console.log(reply,copyreply,data.comments.filter((ele)=>ele.user.username===copyreply.replyingTo))
    //         }
    //     }else{
    //             //  let copyreply={...reply}
    //             //  copyreply.content=content
    //             //  copyreply.createdAt=new Date().toString()
                
    //             //  copyreply.user.username=name
    //             //  copyreply.user.image.png=image
    //             //  data.comments.push(copyreply)
    //     }
    // }
    function changereply(e:React.ChangeEvent<HTMLTextAreaElement>){
      let copycomment={...comment}
      copycomment.content=(e.target as HTMLTextAreaElement).innerText
      setcomment(copycomment)
  }
    function addcomment(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
      e.preventDefault()
      data.comments.push(comment)
      setdata(prevData => {
        return {
          ...prevData,
          comments: [...prevData.comments, comment]
        };
      })
      dispatch(addnnewdata(data))
      // localStorage.setItem("data",data)
      console.log(data,comment,dataresult)
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

export default AddComments