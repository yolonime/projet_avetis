import connectMongoDB from "@/libs/mongodb";
import Place from "@/models/place";
import { NextResponse } from "next/server";


export async function POST(request) {
  const { name, description, type, address, city, zipCode, country } = await request.json();
  await connectMongoDB();
  await Place.create({ name, description, type, address, city, zipCode, country });
  return NextResponse.json({ message: "Place Created" }, { status: 201 });
}

export async function GET(request) {
  const { id } = request.nextUrl.searchParams;
  await connectMongoDB();
  const place = await Place.find();
  return NextResponse.json({ place });
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Place.findById
  await Place.findByIdAndDelete(id);
  return NextResponse.json({ message: "Place deleted" }, { status: 200 });
}