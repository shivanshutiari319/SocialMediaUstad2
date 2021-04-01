import React,{useEffect,useState} from 'react'
import {Container ,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png'
import useStyles from './style'
// import { post } from '../../server/routes/posts';
import Form from './components/Form/Form';
import Posts from '../src/components/posts/posts';
import Post from '../src/components/posts/post/post';
import {useDispatch} from 'react-redux'; 
// import getactions from './actions/getactions'
import {getposts} from './action/posts'

const App=()=> {
    const dispatch =useDispatch();
    const classes=useStyles();

    useEffect(()=>{
        dispatch(getposts);
    },[dispatch])
   


    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" > memories </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
                   
            </AppBar>
            <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                            <Posts/>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                            <Form />
                      </Grid>

                   </Grid>
               </Container>


            </Grow>
             


        </Container>
    )
}

export default App
 