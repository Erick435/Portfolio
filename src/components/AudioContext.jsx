import React, { createContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

function AudioProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [showControls, setShowControls] = useState(true);

    const songs = [
        '/main_song.mp3',
        '/Wondering.mp3',
        '/Cats_Cradle.mp3',
        '/BedHead.mp3',
        // ... other songs
    ];

    const audioRef = useRef(new Audio(songs[currentTrackIndex]));

    useEffect(() => {
        audioRef.current.src = songs[currentTrackIndex];
        
        const playCurrentAudio = () => {
            const playPromise = audioRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                }).catch(error => {
                    // Auto-play was prevented. Handle accordingly.
                    setIsPlaying(false);
                });
            }
        };

        if (isPlaying) {
            playCurrentAudio();
        } else {
            audioRef.current.pause();
        }
    }, [currentTrackIndex, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
    
        audio.addEventListener('ended', playNext);
    
        return () => {
            audio.removeEventListener('ended', playNext);
        };
    }, [currentTrackIndex]);

    const playNext = () => {
        setCurrentTrackIndex(prev => (prev + 1) % songs.length);
    };

    const playPrev = () => {
        setCurrentTrackIndex(prev => (prev - 1 + songs.length) % songs.length);
    };

    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    return (
        <AudioContext.Provider value={{
            isPlaying,
            togglePlayPause,
            playNext,
            playPrev,
            showControls,
            setShowControls
        }}>
            {children}
        </AudioContext.Provider>
    );
}

export { AudioContext, AudioProvider };
