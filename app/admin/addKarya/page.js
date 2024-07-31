'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import upload_area from '../../../public/upload_area.png'
import axios from 'axios'
import { toast } from 'react-toastify'

const Page = () => {

    const [image, setImage] = useState(false);
    const [data,setData] = useState({
        title:"",
        text:"",
        category:"",
        author:"",
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('author',data.author);
        formData.append('text',data.text);
        formData.append('category',data.category);
        formData.append('image',image);
        const res = await axios.post('/api/karya',formData);
        if (res.data.success) {
            toast.success(res.data.msg)
            setImage(false);
            setData({
                title:"",
                text:"",
                category:"",
                author:"",
                image: "",
            })
        }
        else {
            toast.error("Error")
        }
    }

  return (
    <>
        <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
            <p className=''>Upload Thumbnail</p>
            <label>
                <Image className='mt-4' src={!image?upload_area:URL.createObjectURL(image)}  width={140} height={70} alt=''/>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image'  hidden required></input>
            </label>
            <p className='text-xl mt-4'>Judul Karya</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='ketik di sini' required/>
            <p className='text-xl mt-4'>Penulis</p>
            <input name='author' onChange={onChangeHandler} value={data.author} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='ketik di sini' required/>
            <p className='text-xl mt-4'>Isi Karya</p>
            <textarea name='text'  onChange={onChangeHandler} value={data.text} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='ketik di sini' required/>
            <p className='text-xl mt-4'>Kategori Karya</p>
            <div className='grid'>
                <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                    <option>Pilih Opsi</option>
                    <option value='Puisi'>Puisi</option>
                    <option value='Cerpen'>Cerpen</option>
                    <option value='Film'>Film</option>
                    <option value='Lagu'>Lagu</option>
                    <option value='Podcast'>Podcast</option>
                </select>
                <button type='submit' className='mt-4 w-40 h-12 bg-black text-white'>Upload</button>
            </div>
            
        </form>
    </>
  )
}

export default Page
