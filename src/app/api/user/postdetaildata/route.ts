    import { db } from "@/lib/db";
    import { NextRequest, NextResponse } from "next/server";
    import { getDataFromToken } from "@/lib/getDatafromtoken";

    export async function GET(request: NextRequest) {
        try {
            const reqBody = await request.json();
            const {id} = reqBody;
            const postDeatail = await db.post.findFirst({
                where: {
                    id: id,
                },
                select:{
                    id: true,
                    title: true,
                    description: true,
                    images: true,
                    time: true,
                    location: true,
                    views: true,
                    comments: true,
                    rating: true,
                }
            });

            return NextResponse.json(postDeatail);
        } catch (error) {
            console.error(error);
            return NextResponse.json(
                { error: "An error occurred while getting the post" },
                { status: 500 }
            );
        }
    }
