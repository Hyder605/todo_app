import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    return NextResponse.json ({"messgae":"Hello "})
}


export function PUT(request:NextRequest){
    const res= request.json()    
}