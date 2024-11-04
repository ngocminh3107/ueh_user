"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { db } from "@/lib/db";


export default function ReviewDetailPage({ params }: { params: { id: string } } ) {
 
    return (
        <div className="h-screen ">
            <h1 className="text-black">Review Detail ID: {params.id}</h1>
        </div>
    );
}
