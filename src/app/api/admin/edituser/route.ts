import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { id, name, mssv, password, imageUrl,email, role  } = reqBody;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const updatedPost = await db.user.update({
            where: {
                id: id,
            },
            data: {
                imageUrl: imageUrl,
                name: name,
                mssv: mssv,
                password: hashedPassword,
                email: email,
                role: role,
            },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred while updating the user" },
            { status: 500 }
        );
    }
}
