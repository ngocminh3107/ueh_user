// create-random-users.js
import { db } from "@/lib/db";
import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from "next/server";
import { useId } from "react";
export async function POST(request: NextRequest) {
  try {
    const usersToCreate = 30;

    for (let i = 0; i < usersToCreate; i++) {
      await db.post.create({
        data: {
  
          title : faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.avatar(),
          userId: "",
        },
      });
    }

    return NextResponse.json({
      message: 'Random users created successfully',
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}