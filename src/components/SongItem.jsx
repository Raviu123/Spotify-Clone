import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export const SongItem = ({name, image, desc ,id}) => {
  const {palywithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>palywithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#383838]'>
        <img  className="rounded " src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
        
    </div>
  )
}
