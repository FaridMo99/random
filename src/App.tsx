import { useState } from 'react';
import './App.css'
import ModusButton from './components/ModusButton';

const nba2kModes:string[] = ["Rec", "Park", "Pro-Am", "Theater", "Proving Grounds", "Event"]

function App() {
  const [modis, setModis] = useState<string[]>([])
  const [random, setRandom] = useState("")

  function randomMode() {
      if (modis.length === 0) return;

    const index = Math.floor(Math.random() * modis.length)

    setRandom(modis[index])
  }

  return (
    <>
      <div className="bg-stone-900 w-screen h-screen text-white">
        <p className="text-center pt-20 mb-10">Welche Modis filtern:</p>
        <div className="flex justify-center items-center w-screen h-[30vh]">
          <div className="w-1/3 h-full flex flex-col justify-between items-start">
            {nba2kModes.map((mode) => (
              <ModusButton list={modis} listSetter={setModis} modus={mode} />
            ))}
          </div>
        </div>
        <p className="text-center pt-20 mb-10">
          Gewählte Modis:{" "}
          <div className="flex w-full justify-center items-center">
            {modis.map((mode) => (
              <p className="mx-2">{mode}</p>
            ))}
          </div>
        </p>
        <div className='w-full flex justify-center items-center flex-col'>
          <button
            onClick={randomMode}
            className="bg-purple-600 p-4 mb-4 rounded-lg hover:bg-purple-400 disabled:bg-purple-400"
            disabled={modis.length === 0}
          >
            Zufälliger Modus
          </button>
          {random && <p className="text-center"> {random} </p>}
        </div>
      </div>
    </>
  );
}

export default App
