import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Grid, } from '@mui/material';
import { Button, Checkbox, ListItemDecorator, Menu, MenuItem, Textarea } from '@mui/joy';
import user from "@/images/avatars/image-juliusomo.png"
// import result from "@/data/data.json"
import Comments from '@/components/Comments';
import AddComments from '@/components/AddComments';
import dataresult from "@/data/data.json"
import { useSelector } from 'react-redux';
import { commentsinterface } from '@/data/interface';
export default function Home() {
  let {data}=useSelector((state:any)=>state.data)
  let [dataresult,setdata]=useState(data)
  
useEffect(()=>{
  console.log(data)

},[data])
  return (
    <>
    <AddComments buttonname="send"/>
    {dataresult.comments.map((ele: React.JSX.IntrinsicAttributes & commentsinterface,index:number)=>{
      return(
        <Comments {...ele} key={index}/>

      )
    })}
    </> );
}
