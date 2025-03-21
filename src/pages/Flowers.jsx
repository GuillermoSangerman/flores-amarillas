import React, { useEffect, useRef, useState } from 'react'

export function Flowers() {

  const lyricsData = [
    { text: "Quiero volar contigo...", time: 17 },
    { text: "Muy alto en algún lugar", time: 22 },
    { text: "Quisiera estar contigo viendo las estrellas sobre el mar", time: 28 },
    { text: "Quiero encontrar otro camino", time: 37 },
    { text: "Ponerme mi vestido y salir a caminar contigo", time: 42 },
    { text: "Quiero decirle al mundo que no somos amigos", time: 47 },
    { text: "Decirle a la tristeza...", time: 52 },
    { text: "Que no se cruce en mi camino", time: 57 },
    { text: "Quiero volar contigo muy alto en algún lugar", time: 70 },
    { text: "Quisiera estar contigo viendo las estrellas sobre el mar", time: 78 },
    { text: "Quiero encontrar otro camino", time: 87 },
    { text: "Ponerme mi vestido y salir a caminar contigo", time: 92 },
    { text: "Quiero decirle al mundo que no somos amigos", time: 97 },
    { text: "Decirle a la tristeza..", time: 102 },
    { text: "Que no se cruce en mi camino", time: 107 },
    { text: "Porque voy...", time: 112 },
    { text: "Con toda la fuerza de un submarino", time: 117 },
    { text: "A conquistar a esa dama que tanto juega conmigo", time: 123 },
    { text: "Voy por el mundo solo y sin amigos voy", time: 128 },
    { text: "Dando tantas vueltas sin ningún sentido", time: 134 },
    { text: "Pero tu ayer cambiaste mi destino", time: 139 },
    { text: "Me diste vida, mucha más vida que el vino", time: 143 },
    { text: "Me diste fuerza en los días fríos", time: 148 },
    { text: "Me diste ganas de extrañarte...", time: 152 },
    { text: "Sin ningún motivo", time: 159 },
    { text: "Quiero encontrar otro camino", time: 171 },
    { text: "Ponerme mi vestido y salir a caminar contigo", time: 174 },
    { text: "Quiero decirle al mundo que no somos amigos", time: 181 },
    { text: "Decirle a la tristeza...", time: 186 },
    { text: "Que no se cruce en tu camino...", time: 190 },
    { text: "Que no se cruce no...", time: 201 },
    { text: "Que no se cruce no...", time: 205 },
    { text: "Que no se cruce no...", time: 210 },
  ];
  const audioRef = useRef(null);
  const [currentLyric, setCurrentLyric] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const updateLyrics = () => {
      const time = Math.floor(audioRef.current.currentTime);
      const currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
      );
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
    <article>
      <section>
      <div >
      <div className='fixed  top-35 right-5 z-50'>
      <div className='cursor-pointer rounded-full p-3' onClick={togglePlayPause}>
        {isPlaying ? <img className='w-9' src="/pause.svg" alt="" /> : <img className='w-9' 
        src="/play.svg" alt="" /> }
      </div>
    </div>
          <audio className='absolute bottom-0 left-0' ref={audioRef} src="/sound/Bajoelagua.mp3" ></audio>
          <div id="lyrics" className="text-center text-xl mt-4 absolute top-5 left-2">
            {currentLyric}
          </div>
        </div>
      </section>
      <section>
       
        <h1 className="titulo mt-8 capitalize">Estas flores amarillas cada año florecen. <br />
          Y asi como las veo año tras año asi quiero tener tu presencia... <br />
          Año tras año.</h1>

        <div className="night"></div>
        <div className="flowers relative">
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>

              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
              <div className="flower__line__leaf flower__line__leaf--5"></div>
              <div className="flower__line__leaf flower__line__leaf--6"></div>
            </div>
          </div>

          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>

              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>

          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>

              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "1.2s" }}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>

{/* flower center */}
          <div className="growing-grass">
            <div className="flower__grass flower__grass--1">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>

          <div className="growing-grass">
            <div className="flower__grass flower__grass--2">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "2.4s" }}>
            <div className="flower__g-right flower__g-right--1">
              <div className="leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "2.8s" }}>
            <div className="flower__g-right flower__g-right--2">
              <div className="leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "2.8s" }}>
            <div className="flower__g-front">
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div
                className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"
              >
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__line"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "3.2s" }}>
            <div className="flower__g-fr">
              <div className="leaf"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
          </div>

          <div className="long-g long-g--0">
            <div className="grow-ans" style={{ "--d": "3s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "2.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.4s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--1">
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.8s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--2">
            <div className="grow-ans" style={{ "--d": "4s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.4s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--3">
            <div className="grow-ans" style={{ "--d": "4s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--4">
            <div className="grow-ans" style={{ "--d": "4s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--5">
            <div className="grow-ans" style={{ "--d": "4s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--6">
            <div className="grow-ans" style={{ "--d": "4.2s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.4s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.6s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "4.8s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--7">
            <div className="grow-ans" style={{ "--d": "3s" }}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.2s" }}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.5s" }}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": "3.6s" }}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
        </div>
      </section>

    </article>
  )
}
