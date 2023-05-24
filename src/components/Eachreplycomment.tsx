// import React from 'react'
import { replyinterface } from '@/data/interface'
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import reply from "@/images/icon-reply.svg"
import edit from "@/images/icon-edit.svg"
import deleteicon from "@/images/icon-delete.svg"
import data from "@/data/data.json"
import AddComments from './AddComments'
import AddReply from './AddReply'
interface Relytocommentprops{
    ele:replyinterface,
    idcomment?:number,
    currentuser:string
}
function Eachreplycomment({ele,idcomment,currentuser}:Relytocommentprops) {
const [open, setOpen] = useState(false)
let currentcomment=data.comments.filter((ele)=>ele.id===idcomment)
useEffect(()=>{
  console.log(idcomment)

},[ele,open])
function deletecomment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
  let result=data.comments[idcomment||1]?.replies.filter((elem)=>elem.id!==ele.id)
  console.log(result)
  // currentcomment[0].replies.filter((elem)=>elem.id!==ele.id)
}
function editcomment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){

}
  return (<>
    {currentuser!==ele.user?.username?<Box sx={{backgroundColor: "white",
    borderRadius: '5px',
    padding: '30px',color:"black",margin:"20px 0px",width:"80%"}} >
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item lg={6} md={6} sm={6} > 
    <Box sx={{
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
        }}>
       <Image src={ele.user.image.png||""} alt='' width={50} height={50}/> 
       <h3>{ele.user.username}</h3>
       <p>{ele.createdAt}</p>
    </Box></Grid>
    <Grid item lg={6} md={6} sm={6}>
    <Box>
    <Image src={reply} alt='' width={20} height={20}/> 
    <Button onClick={()=>{setOpen(!open)}}>reply</Button>
    </Box></Grid>
    <Grid item lg={9} md={9} sm={9}>
    <p>{ele.content}</p>
    </Grid> 
    </Grid>
    {open? <AddReply buttonname='reply' commentid={idcomment||0} replyto={ele.user.username}/>:""}
    </Box>:<Box sx={{backgroundColor: "white",
    borderRadius: '5px',
    padding: '30px',color:"black",margin:"20px 0px",width:"80%"}} >
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item lg={6} md={6} sm={6} > 
    <Box sx={{
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
        }}>
       <Image src={ele.user.image.png||""} alt='' width={50} height={50}/> 
       <h3>{ele.user.username}</h3>
       <p>{ele.createdAt}</p>
    </Box></Grid>
    <Grid item lg={6} md={6} sm={6} display={"flex"}>
    <Box>
    <Image src={edit} alt='' width={20} height={20}/> 
    <Button onClick={(e)=>{editcomment(e)}}>edit</Button>

    </Box>
    <Box>
    <Image src={deleteicon} alt='' width={20} height={20}/> 
    <Button onClick={(e)=>{deletecomment(e)}}>delete</Button>

    </Box>
    </Grid>
    <Grid item lg={9} md={9} sm={9}>
    <p>{ele.content}</p>
    </Grid> 
    </Grid>
    {open? <><AddReply buttonname='reply' commentid={idcomment||0} replyto={ele.user.username}/>{setOpen(!open)}</> :""}
    </Box>}</>
  )
}

export default Eachreplycomment