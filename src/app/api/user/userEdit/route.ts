import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/lib/getDatafromtoken";
export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email } = reqBody;
        const id = await getDataFromToken(request);


        const updatedUser = await db.user.update({
            where: {
                userId: id
            },
            data: {
                name: name,
                email: email
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred while updating the user" },
            { status: 500 });
    }
}
