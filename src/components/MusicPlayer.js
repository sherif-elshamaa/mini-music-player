import React, { useEffect, useState } from 'react'

function Player({ currentSong, previous, next }) {
    const audio = document.getElementsByTagName('audio')
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        if (Object.keys(currentSong).length !== 0) {
            audio[0].pause()
            audio[0].load()
            audio[0].play()
            setIsPlaying(true)
        }
    }, [audio, currentSong])
    const play = () => {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            audio[0].pause()
        } else {
            audio[0].play()
        }
    }



    return (
        <>
            {Object.keys(currentSong).length !== 0 && <div className="w-full">
                <div className="flex items-center justify-center bg-red-lightest">
                    <div className="bg-white shadow-lg rounded-lg w-[720px]" >
                        <div className="flex">
                            <div>
                                <img className="w-80 h-60  rounded hidden md:block " src={currentSong?.img} alt="Album Pic" />
                            </div>
                            <div className="w-full p-8">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-2xl text-grey-darkest font-medium">{currentSong?.name}</h3>
                                        <p className="text-sm text-grey mt-1">{currentSong?.artist + " - " + currentSong?.album}</p>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center mt-8">
                                    <button onClick={previous} className="text-grey-darker">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" /></svg>
                                    </button>
                                    {
                                        isPlaying ? <button onClick={play} className="text-black p-8 rounded-full bg-red-light shadow-lg">
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" /></svg>
                                        </button> : <button onClick={play} className="text-black p-8 rounded-full bg-red-light shadow-lg">
                                            <img className="w-8" src="/play.png" alt="play" />
                                        </button>
                                    }
                                    <button onClick={next} className="text-grey-darker">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-8 py-4">
                            <div className="flex  text-sm text-grey-darker">
                                <audio controls className="w-full h-12" onEnded={() => next()} >
                                    <source
                                        src={currentSong?.src}>
                                    </source>
                                </audio>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 bg-grey-dark rounded-full">
                                    <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                                        <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Player