import connectMongoDB from "@/libs/mongodb";
import Place from "@/models/place";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { id } = request.nextUrl.searchParams;
  const { newName: name, newDescription: description, newType: type, newAddress: address, newCity: city, newZipCode: zipCode, newCountry: country } = await request.json();
  await connectMongoDB();
  await Place.findByIdAndUpdate(id, { name, description, type, address, city, zipCode, country });
  return NextResponse.json({ message: "Place updated" }, { status: 200 });
}

export async function GET(request) {
  const { id } = request.nextUrl.searchParams;
  await connectMongoDB();
  const place = await Place.findOne({ _id: id });
  return NextResponse.json({ place }, { status: 200 });
}