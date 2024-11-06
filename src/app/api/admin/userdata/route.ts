import { db } from "@/lib/db";
import { getDataFromToken } from "@/lib/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";

import bcrypt, { compare } from "bcrypt";

export async function GET(request: NextRequest){
    const comparePassword = async (password: string, hashedPassword: string) => {
        return await bcrypt.compare(password, hashedPassword);
    }

    try {
        const user = await  db.user.findMany({
            select:{
                id: true,
                email: true,
                name: true,
                imageUrl: true,
                mssv: true,
                password: true,
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