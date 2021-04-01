import * as api from '../api'

export const getposts =()=>async(dispatch)=> {
try {
    const {data}=await  api.fetchPosts();

    dispatch({type:'FETCH_ALL' ,payload:[]});
} catch (error) {
    
}
}
// const post=0;
export const createPost=(post)=> async (dispatch)=>{
 try {
     const {data} = await api.createPost(post);
    //  console.log(data);
dispatch({type : 'CREATE',payload : data});

 } catch (error) {
     console.log(error);
 }




}


