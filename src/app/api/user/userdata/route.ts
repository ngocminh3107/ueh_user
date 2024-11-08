import { db } from "@/lib/db";
import { getDataFromToken } from "@/lib/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try {
        const id = await getDataFromToken(request);
        const user = await  db.user.findFirst({
            where:{
                id: id
            },
            select:{
                id: true,
                email: true,
                name: true,
                imageUrl: true,
                role: true,
                
            }
        })
        return NextResponse.json({
            message: "User data",
            success: true,
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 });   
    }
}