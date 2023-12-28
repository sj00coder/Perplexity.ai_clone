import LayerGroupSVG from '../svg/LayerGroup';
import MagnifingGlassSVG from '../svg/MaginfingGlassSVG';
import VerticalHistorySVG from '../svg/VerticalHistory';
import LinerColumnSVG from '../svg/LineColumns';
import Tabs from '../tabs/Tabs';
import { useState } from 'react';

function Header() {
  const [selectedTab, setSelectedTab] = useState('Threads');
  const tabElements = [
    {
      svg: (
        <LayerGroupSVG classes='svg-inline--fa fa-layer-group fa-fw fa-1x ' />
      ),
      text: 'Threads',
    },
    {
      svg: (
        <LinerColumnSVG classes='svg-inline--fa fa-line-columns fa-fw fa-1x ' />
      ),
      text: 'Collections',
    },
  ];
  return (
    <div className='sticky top-0 z-[15] border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
      <div className='sticky  top-0  z-[15] rounded-t-xl border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
        <div className='pt-md md:pt-lg  mx-auto max-w-screen-xl px-md md:px-xl  border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
          <div className='flex-col md:flex-row flex md:items-center gap-md md:justify-between  pb-md md:pb-lg border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
            <div className='md:hidden'>
              <div className='flex justify-between gap-sm '>
                <div>
                  <div className='flex items-center gap-x-sm '>
                    <h1 className='default font-display text-2xl md:text-3xl text-textMain  selection:bg-superDuper selection:text-textMain'>
                      <VerticalHistorySVG classes='svg-inline--fa fa-rectangle-vertical-history fa-fw ' />
                    </h1>
                    <h1 className='default font-display text-2xl md:text-3xl text-textMain  selection:bg-superDuper selection:text-textMain'>
                      Library
                    </h1>
                  </div>
                </div>
                <div className='flex gap-x-sm'></div>
              </div>
              <div className='max-w-md w-full mt-md'>
                <div>
                  <div className='rounded-full'>
                    <div className='relative flex items-center'>
                      <input
                        type='search'
                        placeholder='Search your threads'
                        className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center      selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pl-[40px] pr-md'
                        value=''
                      />
                      <div className='absolute flex items-center bg-background  rounded-t-lg left-md'>
                        <div className='light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain'>
                          <MagnifingGlassSVG classes='svg-inline--fa fa-magnifying-glass ' />
                        </div>
                      </div>
                      <div className='absolute flex items-center gap-sm bg-background  rounded-full right-sm'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden md:flex items-center justify-between gap-sm grow'>
              <div>
                <div className='flex items-center gap-x-sm '>
                  <h1 className='default font-display text-2xl md:text-3xl text-textMain  selection:bg-superDuper selection:text-textMain'>
                    <VerticalHistorySVG classes='svg-inline--fa fa-rectangle-vertical-history fa-fw ' />
                  </h1>
                  <h1 className='default font-display text-2xl md:text-3xl text-textMain  selection:bg-superDuper selection:text-textMain'>
                    Library
                  </h1>
                </div>
              </div>
              <div className='max-w-md w-full'>
                <div>
                  <div className='rounded-full'>
                    <div className='relative flex items-center'>
                      <input
                        type='search'
                        placeholder='Search your threads'
                        className='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center      selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pl-[40px] pr-md'
                        value=''
                      />
                      <div className='absolute flex items-center bg-background  rounded-t-lg left-md'>
                        <div className='light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain'>
                          <MagnifingGlassSVG classes='svg-inline--fa fa-magnifying-glass ' />
                        </div>
                      </div>
                      <div className='absolute flex items-center gap-sm bg-background  rounded-full right-sm'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-sm'></div>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        tabElments={tabElements}
        slectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
}
export default Header;
