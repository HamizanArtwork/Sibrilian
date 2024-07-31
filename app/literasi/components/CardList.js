'use client'
import React, {useEffect, useState} from 'react'
import Card from './Card' 
import { blog_data } from '../../../public/assets'
import axios from 'axios'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One ({subsets: ['latin'], weight: "400"});

const CardList = () => {
    
    const [menu,setMenu] = useState("Semua");
    const [karyas,setKarya] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchKarya = async () =>{
      setLoading(true);
      const response = await axios.get('/api/karya');
      setKarya(response.data.karyas);
      console.log(response.data.karyas);
      setLoading(false);
    }

    useEffect(()=>{
      fetchKarya();
    },[])

  return (
    <div>
      <div className={`${lilita_one.className} flex justify-center gap-6 my-10 text-tiny md:text-xl`}>
        <button onClick={()=>setMenu('Semua')} className={menu==="Semua"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Semua</button>
        <button onClick={()=>setMenu('Puisi')} className={menu==="Puisi"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Puisi</button>
        <button onClick={()=>setMenu('Cerpen')} className={menu==="Cerpen"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Cerpen</button>
        <button onClick={()=>setMenu('Film')} className={menu==="Film"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Film</button>
        <button onClick={()=>setMenu('Lagu')} className={menu==="Lagu"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Lagu</button>
        <button onClick={()=>setMenu('Podcast')} className={menu==="Podcast"?'bg-purple-700 text-white py-1 px-4 rounded-3xl border border-black border-medium':""}>Podcast</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 xl:mx-24'>
        {!loading && karyas.filter((item)=> menu==="Semua"?true:item.category===menu).map((item, index)=>{
            return <Card key={index} id={item._id} image={item.image} title={item.title} author={item.author} category={item.category}/>}
        )}
        {loading && <p className={`${lilita_one.className}text-white text-border-1 text-4xl`}>loading...</p>}

      </div>
    </div>
  )
}

export default CardList
