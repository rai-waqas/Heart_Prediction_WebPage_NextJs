//make a POST request to the /predict endpoint by taking data from request in Json
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse){
    const data = await request.json();
    const externalResponse = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    // console.log(externalResponse);
    if (!externalResponse.ok) {
        throw new Error("Failed to fetch predictions");
    }
    const result = await externalResponse.json();
    const prediction = result.prediction;
    return NextResponse.json({ prediction }, { status: 201 });
}