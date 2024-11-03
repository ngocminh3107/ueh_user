import {db} from "@/lib/db";
import {getDataFromToken} from "@/lib/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try {
        const post = await  db.post.findMany({
            select:{
                id: true,
                title: true,
                content: true,
                imageUrl: true,
            }
        })
        console.log()
        return NextResponse.json({
            message: "post data",
            success: true,
            data: post
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 });   
    }
}