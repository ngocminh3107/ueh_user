import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { getDataFromToken } from "@/lib/getDatafromtoken";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const ispublicPath = path === '/login'
    const token = request.cookies.get('token')?.value || ''
     if (ispublicPath && token) {
         return NextResponse.redirect(new URL('/login', request.nextUrl))
     }
    if (!ispublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}

export const config = {
    matcher: [
        
    ],
}


