import React from 'react'
import Post from '../posts/post/post'
import useStyles from './style'

   import {useSelector } from 'react-redux'

export default function Posts() {
    const classes=useStyles();

    const posts =useSelector((state)=>state.posts)
    console.log(posts)
    return (
        <div>
           
            <Post />
            
        </div>
    )
}