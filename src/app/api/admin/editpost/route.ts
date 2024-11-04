import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { id, title, content, images } = reqBody;

        const updatedPost = await db.post.update({
            where: {
                id: id,
            },
            data: {
                id: id,
                title: title,
                description: content,
                images: images,
            },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred while updating the post" },
            { status: 500 }
        );
    }
}
