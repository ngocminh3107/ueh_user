import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/lib/getDatafromtoken";

export async function DELETE(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {id} = reqBody;
        console.log(
            id
        )
        const deletedUser = await db.user.deleteMany({
            where: {
                id: id,
            },
        });

        return NextResponse.json(deletedUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred while deleting the user" },
            { status: 500 }
        );
    }
}
