import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import  type { Post } from "../types/Post";

const API: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async(pageNumber: number): Promise<AxiosResponse<Post[]>> => {
  try {
     return await API.get<Post[]>(`/posts?_start=${pageNumber}&_limit=3`);
  } catch (error:unknown) {
    throw error;
  }
  
};

//to fetch the indv. data
export const fetchInvpost=async (id: number): Promise<Post>=>{
    try{
      const res=await API.get<Post>(`/posts/${id}`)
      // return res.status===200?res.data:null;
      console.log(res.data);
      return res.data;
    }
    catch(error:unknown){
      console.log("Error in fetching individual post", error);
      throw error;
    }
}


export const deletePost=async (id: number): Promise<void>=>{
  try {
    return await API.delete(`/posts/${id}`);
  } catch (error) {
    throw error;
  }
}
