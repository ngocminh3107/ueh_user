import { db } from "@/lib/db";
import { getDataFromToken } from "@/lib/getDatafromtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    try {
        const events = await  db.event.findMany({
            select:{
                id: true,
                title: true,
                location: true,
                description: true,
                time: true,
                registerCount: true,
                maxCapacity: true,
                content: true,
                imageUrl: true,
                userId: true,
                createdAt: true,
            }
        })
        return NextResponse.json({
            message: "Event data",
            success: true,
            data: events
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 });   
    }
}