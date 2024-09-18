"use client";

import ReactAudioPlayer from "react-audio-player";

function Sonido() {
  return (
    <div className="hidden">
      <ReactAudioPlayer className=""
        src="https://www.dropbox.com/scl/fi/sdphbu3uw8n93an16hv3d/cw8i5-uthxy.mp3?rlkey=o5isq5qvblpj7y30vwg9c1hvb&st=0ofz0x6i&dl=0"
        autoPlay
        controls
      />
    </div>
  );
}

export default Sonido;
