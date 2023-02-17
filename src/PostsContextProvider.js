import React from "react";
import { createContext } from "react";
export const postsContext=createContext()

const PostsContextProvider =({children})=>{
    
    return(
    <>
    <postsContext.Provider>
        {children}
    </postsContext.Provider>
    </>)
}
export default PostsContextProvider;