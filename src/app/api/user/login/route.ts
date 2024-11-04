import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { mssv, password } = reqBody;

        const user = await db.user.findFirst({
            where: {
                mssv
            }
        });
        if (!user) {
            return NextResponse.json({ error: "User not found" },
                { status: 404 });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ error: "Password incorrect" },
                { status: 401 });
        }

        const tokenData = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            game: user.imageUrl,
         
        }
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "3d",
        });

        const response = NextResponse.json({
            message: "Login successful",
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 });
    }

}