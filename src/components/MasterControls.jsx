import React, { useContext } from 'react';
import { AudioContext } from './AudioContext';

function MasterControls() {
    const { isPlaying, togglePlayPause, playNext, playPrev, showControls, setShowControls } = useContext(AudioContext);

    if (!showControls) return <button onClick={() => setShowControls(true)}>Show Controls</button>;

    return (
        <div className={`master-controls ${!showControls ? 'hide-controls' : ''}`}>
            <button onClick={playPrev}>Prev</button>
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause ASCII' : 'Play ASCII'}
            </button>
            <button onClick={playNext}>Next</button>
            <button onClick={() => setShowControls(!showControls)}>Toggle Controls</button>
        </div>
    );
}


export default MasterControls;
