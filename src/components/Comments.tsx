import React, { useEffect, useState } from 'react'
// import data from "@/data/data.json"
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import reply from "@/images/icon-reply.svg"
import AddComments from './AddComments'
import { commentsinterface } from '@/data/interface'
import Relytocomment from './Relytocomment'
import editimage from "@/images/icon-edit.svg"
import deleteicon from "@/images/icon-delete.svg"
import { Textarea } from '@mui/joy'
import { useDispatch, useSelector } from 'react-redux'
import { addnnewdata } from '@/features/data/analyticsSlice'
function Comments({content,createdAt,score,user,id,replies}:commentsinterface) {
    let {data}=useSelector((state:any)=>state.data)
    let dispatch=useDispatch()
    let [currentcomment,setcurrentcomment]=useState(id)
    let [open,setopen]=useState(false)
    let [edit,setedit]=useState(false)

    function deletecomment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
      let result=data.comments.filter((elem:commentsinterface)=>elem.id!==currentcomment)
      dispatch(addnnewdata(result))
      console.log(result)
    }
    function editcomment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){

    }
    useEffect(()=>{
      setcurrentcomment(id)
      
    },[data])
  return (<>{user.username!==data.currentUser.username?<><Box sx={{backgroundColor: "white",
  borderRadius: '5px',
  padding: '30px',color:"black",margin:"20px 0px"}}>
  <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} > 
  <Box sx={{
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
      }}>
     <Image src={user.image.png||""} alt='' width={50} height={50}/> 
     <h3>{user.username}</h3>
     <p>{createdAt}</p>
  </Box></Grid>
  <Grid item lg={6} md={6} sm={6}>
  <Box>
  <Image src={reply} alt='' width={20} height={20}/> 
  <Button onClick={()=>{setopen(!open)}}>reply</Button>
  </Box></Grid>
  <Grid item lg={9} md={9} sm={9}>
  <Textarea readOnly>{content}</Textarea></Grid>
  </Grid>
  
  </Box>
  <Box>
  {open? <AddComments buttonname='reply'/>:""}</Box></>:<><Box sx={{backgroundColor: "white",
  borderRadius: '5px',
  padding: '30px',color:"black",margin:"20px 0px"}}>
  <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} > 
  <Box sx={{
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
      }}>
     <Image src={user.image.png||""} alt='' width={50} height={50}/> 
     <h3>{user.username}</h3>
     <p>{createdAt}</p>
  </Box></Grid>
  <Grid item lg={6} md={6} sm={6}>
  <Box>
    <Image src={editimage} alt='' width={20} height={20}/> 
    <Button onClick={(e)=>{editcomment(e)}}>edit</Button>
    </Box>
    <Box>
    <Image src={deleteicon} alt='' width={20} height={20}/> 
    <Button onClick={(e)=>{deletecomment(e)}}>delete</Button>
    </Box></Grid>
  <Grid item lg={9} md={9} sm={9}>
    {!edit? <p>{content}</p>: <Textarea placeholder={content} value={content}></Textarea>}
  </Grid>
  </Grid>
  
  </Box>
  <Box>
  {open? <AddComments buttonname='reply'/>:""}</Box></>  }
    

    <Relytocomment replies={replies} idcomment={id} currentuser={data.currentUser.username}/>
    </>
  )
}

export default Comments