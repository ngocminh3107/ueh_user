import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export  async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, password } = reqBody;
        console.log(reqBody);

        //check if user already exists
        const user = await db.user.findFirst({
            where: {
                email
            }
        });
        if (user) {
            return NextResponse.json({ error: "User already exists" },
                { status: 400 });
        }
        //hash password


        //create user
        const newUser = await db.user.create({
            data: {
                name,
                email,
                mssv: "",
                password: "Ueh@1234567890",
                imageUrl: "https://source.unsplash.com/random",
            }
        });
        return NextResponse.json({
            message: "User created successfully",
            newUser: newUser,
            success: true
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 });
    }

}
