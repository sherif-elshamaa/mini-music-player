import React, { useState } from 'react'
import Player from './MusicPlayer'
import AddSong from './AddSong'
import { useSelector } from 'react-redux'

function List() {
    const [currentSong, setCurrentSong] = useState({})
    const state = useSelector((state) => state.songs.songs)
    const [open, setOpen] = useState(false)

    let index = state.indexOf(currentSong)
    const previous = () => {
        if (index > 0) {
            setCurrentSong(state[index - 1])
        }
        return
    }
    const next = () => {
        if (index < state.length - 1) {
            setCurrentSong(state[index + 1])
        } else {
            setCurrentSong(state[0])
        }
        return
    }


    return (
        <>
            <AddSong open={open} setOpen={setOpen} />
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Song
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Artist
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Upload Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((song) => (
                                        <tr key={song.id} onClick={() => { setCurrentSong(song) }} className={currentSong.id === song.id ? "bg-red-500 text-white" : ""}>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <img alt="profil" src={song.img} className={song.id === currentSong.id ? " mx-auto object-cover rounded-full h-10 w-10 animate-spin" : "mx-auto object-cover rounded-full h-10 w-10 "} />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className=" whitespace-no-wrap">
                                                            {song.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <p className=" whitespace-no-wrap">
                                                            {song.artist}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-20 text-sm">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <p className=" whitespace-no-wrap">
                                                            {song.uploadDate.toDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center  ">
                                <button className="bg-red-200 p-5 m-5 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => { setOpen(true) }}>addSong</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Player currentSong={currentSong} previous={previous} next={next} />
        </>
    )
}

export default List