import React, { useEffect, useRef, useState } from 'react';



export function LyricsSync() {
    const lyricsData = [
        { text: "At the time", time: 15 },
        { text: "The whisper of birds", time: 18 },
        { text: "Lonely before the sun cried", time: 27 },
        { text: "Fell from the sky", time: 32 },
        { text: "Like water drops", time: 33 },
        { text: "Where I'm now? I don't know why", time: 41 },
        { text: "Nice butterflies in my hands", time: 47 },
        { text: "Too much light for twilight", time: 54 },
        { text: "In the mood for the flowers love", time: 59 },
        { text: "That vision", time: 67 },
        { text: "Really strong, blew my mind", time: 72 },
        { text: "Silence Let me see what it was", time: 78 },
        { text: "I only want to live in clouds", time: 83 },
        { text: "Where I'm now? I don't know why", time: 91 },
        { text: "Nice butterflies in my hands", time: 97 },
        { text: "Too much light for twilight", time: 104 },
        { text: "In the mood for the flowers love", time: 108 },
        { text: "At the time", time: 144 },
        { text: "The whisper of birds", time: 148 },
        { text: "Lonely before the sun cried", time: 153 },
        { text: "Fell from the sky", time: 158 },
        { text: "Like water drops", time: 164 },
        { text: "Where I'm now? I don't know why", time: 169 },
        { text: "Nice butterflies in my hands", time: 176 },
        { text: "Too much light for twilight", time: 183 },
        { text: "In the mood for the flowers", time: 188 },
        { text: "Love.", time: 140 },
      ];
  const audioRef = useRef(null);
  const [currentLyric, setCurrentLyric] = useState("");
    console.log(currentLyric);
  useEffect(() => {
    const updateLyrics = () => {
      const time = Math.floor(audioRef.current.currentTime);
      const currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
      );
      console.log(time,currentLine);

      if (currentLine) {
        setCurrentLyric(currentLine.text);
      } else {
        setCurrentLyric("");
      }
    };

    const intervalId = setInterval(updateLyrics, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div >
      <audio ref={audioRef} src="./src/assets/sound/ChristianBasso&HaienQiu-Flowers.mp3" controls></audio>
      <div id="lyrics" className="text-center text-xl mt-4">
        {currentLyric}
      </div>
    </div>
  );
}