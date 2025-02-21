import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/productModels";
import userModel from "@/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest)=>{
    const {users,products} =data
    await dbConnect()
    await userModel.deleteMany()
    await userModel.insertMany(users)
    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    return NextResponse.json({
        message: 'successfully seeded',
        users,
        products
    })
}