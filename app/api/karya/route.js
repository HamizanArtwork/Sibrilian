
import { ConnectDB } from "../../../lib/config/db";
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'
import KaryaModel from '../../../lib/models/KaryaModel'

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

// API Endpoint to get all karya
export async function GET(request){

    const karyaId = request.nextUrl.searchParams.get("id");
    if (karyaId) {
        const karya = await KaryaModel.findById(karyaId);
        return NextResponse.json(karya);
    }
    else {
        const karyas = await KaryaModel.find({});
        return NextResponse.json({karyas})
    }
}

// API Endpoint to upload Karya
export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    
        const karyaData = {
            title:`${formData.get('title')}`,
            image:`${imgUrl}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            text:`${formData.get('text')}`

        }

        await KaryaModel.create(karyaData);
        console.log("Karya tersimpan")


    return NextResponse.json({success:true,msg:"Karya Ditambahkan"})
}

