import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowRightSVG from './svg/ArrowRightSVG';
import CirclePlusSVG from './svg/CirclePlusSVG';
import MagnifingGlassSVG from './svg/MaginfingGlassSVG';
import { submitSearchQuery } from '../utils/searchQuery';

function NewThreadInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function onSubmit() {
    if (!searchQuery) return;
    const result = submitSearchQuery(searchQuery);
    navigate(`/search/${result}`);
  }

  return (
    <div className='grow rounded-md relative flex items-center'>
      <div className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center selection:bg-superDuper selection:text-textMain bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff shadow-sm rounded-t-md rounded-b-md text-base p-md pb-xl'>
        <textarea
          placeholder='Ask anything...'
          className='overflow-auto max-h-[50vh] outline-none w-full flex items-center font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain bg-background text-textMain placeholder-textOff'
          autoComplete='off'
          style={{ height: '48px !important' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></textarea>
      </div>
      <div
        className='absolute m-[1px] bottom-0 flex justify-between px-[6px] bg-background focus:bg-background rounded-b-md '
        style={{ width: 'calc(100% - 2px)' }}
      >
        <div className='absolute flex items-center bg-background  rounded-t-lg bottom-0 pb-xs mb-xs left-[6px] left-sm'>
          <div className=''>
            <span>
              <button
                type='button'
                className='md:hover:bg-offsetPlus text-textOff md:hover:text-textMain font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
              >
                <div className='flex items-center leading-none justify-center gap-xs max-w-[120px]'>
                  <MagnifingGlassSVG
                    classes={'svg-inline--fa fa-magnifying-glass fa-fw fa-1x '}
                  />
                  <div className='text-align-center relative truncate'>
                    Focus
                  </div>
                </div>
              </button>
            </span>
          </div>
          <div>
            <button
              type='button'
              className='md:hover:bg-offsetPlus text-textOff  md:hover:text-textMain    font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
            >
              <div className='flex items-center leading-none justify-center gap-xs'>
                <CirclePlusSVG
                  classes={'svg-inline--fa fa-circle-plus fa-fw fa-1x '}
                />
                <div className='text-align-center relative'>File</div>
              </div>
            </button>
            <input
              type='file'
              multiple=''
              accept='text/*,application/pdf,.pdf,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex'
              className='hidden'
            />
          </div>
        </div>
        <div className='absolute flex items-center gap-sm bg-background  rounded-full right-sm bottom-0 pb-xs mb-xs'>
          <button
            type='button'
            className='   text-textOff  md:hover:text-textMain   font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <div>
                <div className='rounded-full  p-[3px] border  transition duration-300 border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
                  <div className='relative w-8 transition duration-200 ease-in-out'>
                    <div className='rounded-full h-4 w-4 transition-all duration-300 ease-in-out shadow-sm md:group-hover:scale-90 ml-0 border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offsetPlus '></div>
                  </div>
                </div>
              </div>
              <div className='text-align-center relative'>Copilot</div>
            </div>
          </button>
          <button
            type='button'
            className={`${
              !searchQuery ? 'bg-offsetPlus' : 'bg-super'
            }  ${
              !searchQuery ? 'text-textMain' : 'text-white'
            }   ${
              searchQuery
                ? 'hover:opacity-80'
                : 'md:hover:text-textOff '
            } focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8`}
            onClick={onSubmit}
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <ArrowRightSVG
                classes={'svg-inline--fa fa-arrow-right fa-fw fa-1x '}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewThreadInput;
