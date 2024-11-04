"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { db } from "@/lib/db";


export default function ReviewDetailPage({ params }: { params: { id: string } } ) {
    const [post, setPost] = useState({
        id: "",
        title: "",
        description: "",
        images: "",
        time: "",
        location: "",
        views: "",
        comments: "",
        rating: ""
    });

    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
          const req = await db.post.findFirst({
            where: {
              id: id,
            },
            select:{
              id: true,
              title: true,
              description: true,
              images: true,
              time: true,
              location: true,
              views: true,
              comments: true,
              rating: true,
            }
          });
        };
    });
    console.log(post);
    return (
        <div>
            <h1 className="text-black">Review Detail ID: {params.id}</h1>
            <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <img src={post.images} alt={post.title} />
                {/* Add more fields as needed */}
            </div>
        </div>
    );
}
