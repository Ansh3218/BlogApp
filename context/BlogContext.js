"use client";
import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();
export const useBlog = ()=> useContext(BlogContext);

export const BlogProvider = ({children})=> {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        const fetchBlogs = async ()=> {
            const res = await fetch("/api/routes");
            const data = await res.json();
            setBlogs(data);
        };
        fetchBlogs();
    },[]);

  return (
    <BlogContext.Provider value={{ blogs }}>
        {children}
    </BlogContext.Provider>
  );
}