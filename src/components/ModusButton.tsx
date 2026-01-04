import React from 'react'

type ModusButtonProps = {
  modus: string;
  listSetter: React.Dispatch<React.SetStateAction<string[]>>
  list: string[];
};

export const buttonStyles = "rounded-md bg-stone-600 w-8 h-8 flex justify-center items-center ring-2 ring-transparent hover:ring-white/60 transition-all duration-150 disabled:bg-stone-200"

function ModusButton({ modus, listSetter, list }:ModusButtonProps) {
  return (
    <div className="flex justify-between w-full items-center mx-4 disabled:bg-muted text-white">
      <p className="mx-2">{modus}</p>
      <div className='flex justify-between items-center w-20'>
        <button
          className={buttonStyles}
          disabled={!list.includes(modus)}
          onClick={() => listSetter((pre) => pre.filter((item) => item !== modus))}
        >
          -
        </button>
        <button
          className={buttonStyles}
          disabled={list.includes(modus)}
          onClick={()=> listSetter(pre=> [...pre, modus])}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ModusButton