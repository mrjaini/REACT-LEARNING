import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    const data = useLoaderData();
    // const [data , setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mrjaini')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    return (
        <div className="bg-gray-500 p-5 w-1/2 flex text-white text-3xl font-bold mx-auto justify-center">
            <img className="w-30 mx-10 rounded-full" src={data.avatar_url} alt="Git Picture" />
            Github Followers : {data.followers}
         </div>

    )
}

export const GitInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/mrjaini')
    return response.json()
}