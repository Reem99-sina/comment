import { replyinterface } from '@/data/interface'
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import reply from "@/images/icon-reply.svg"
import edit from "@/images/icon-edit.svg"
import deleteicon from "@/images/icon-delete.svg"

import AddComments from './AddComments'
import AddReply from './AddReply'
import Eachreplycomment from './Eachreplycomment'

interface Relytocommentprops{
    replies:replyinterface[],
    idcomment:number,
    currentuser:string
}
function Relytocomment({replies,idcomment,currentuser}:Relytocommentprops) {
    useEffect(()=>{
console.log(idcomment)
    },[replies])
  return (<>
  {replies.map((ele: replyinterface,index)=>{
    return(<>
    <Eachreplycomment ele={ele} key={index} currentuser={currentuser} idcomment={idcomment} />
    </>)
  })}
  
  </>)
    // <div>Relytocomment</div>
  
}

export default Relytocomment