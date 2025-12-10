import { useEffect, useState } from "react";
import { Link } from "react-router";

const BlogList=()=>{

    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await res.json();
            console.log(data);
            setBlogs(data)
        }
        fetchData()
    },[]);

    return (
        <div className="flex flex-row justify-between flex-wrap p-5">
            {blogs.map((blog) => (
                <Link
                    to={`/blogs/${blog.id}`}
                    key={blog.id}
                    className="border p-3 m-2 rounded-md w-64 bg-white shadow-sm block hover:shadow-md transition"
                >
                    <div className="text-sm text-gray-500">ID {blog.id}</div>
                    <div className="font-semibold">{blog.title}</div>
                </Link>
            ))}
        </div>
    )
}

export default BlogList;