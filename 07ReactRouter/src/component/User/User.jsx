import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid} = useParams();
    return (
        <h1 className="bg-orange-500 p-5 w-1/2 text-center text-white text-3xl font-bold mx-auto">Github Followers : [ {userid} ]</h1>
    )
}