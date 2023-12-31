import { useAuthState } from 'react-firebase-hooks/auth';
import MobileFooter from '../footer/MobileFooter';
import EllipsisSVG from '../svg/EllipsisSVG';
import GridSVG from '../svg/GridSVG';
import LayerGroupSVG from '../svg/LayerGroup';
import Loader from '../Loader';
import PlusSVG from '../svg/PlusSVG';
import { auth } from '../../Firebase';

function MainSection() {
  const [user, loading] = useAuthState(auth);
  return loading ? (
    <Loader />
  ) : (
    <div className='w-full h-full mx-auto  max-w-screen-xl md:px-xl  px-md'>
      <div className='lg:grid grid-cols-12 gap-xl '>
        <div className='col-span-8 lg:mt-lg'>
          <div className='hidden lg:block'>
            <div className='border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
              <div className='border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
                <div className='flex-col md:flex-row flex md:items-center gap-md md:justify-between  pb-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
                  <div className='md:hidden'>
                    <div className='flex justify-between gap-sm '>
                      <div>
                        <div className='flex items-center gap-x-sm '>
                          <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                            <LayerGroupSVG classes='svg-inline--fa fa-layer-group fa-fw ' />
                          </h2>
                          <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                            Threads
                          </h2>
                        </div>
                      </div>
                      <div className='flex gap-x-sm'>
                        <div>
                          <button
                            type='button'
                            className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                          >
                            <div className='flex items-center leading-none justify-center gap-xs'>
                              <EllipsisSVG classes='svg-inline--fa fa-ellipsis fa-fw fa-1x ' />
                            </div>
                          </button>
                        </div>
                        <div className='h-full relative flex items-center'>
                          <button
                            type='button'
                            className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                          >
                            <div className='flex items-center leading-none justify-center gap-xs'>
                              <PlusSVG classes='svg-inline--fa fa-plus fa-fw fa-1x ' />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex items-center justify-between gap-sm grow'>
                    <div>
                      <div className='flex items-center gap-x-sm '>
                        <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                          <LayerGroupSVG classes='svg-inline--fa fa-layer-group fa-fw ' />
                        </h2>
                        <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                          Threads
                        </h2>
                      </div>
                    </div>
                    <div className='flex gap-x-sm'>
                      <div>
                        <button
                          type='button'
                          className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                        >
                          <div className='flex items-center leading-none justify-center gap-xs'>
                            <EllipsisSVG classes='svg-inline--fa fa-ellipsis fa-fw fa-1x ' />
                          </div>
                        </button>
                      </div>
                      <div className='h-full relative flex items-center'>
                        <button
                          type='button'
                          className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                        >
                          <div className='flex items-center leading-none justify-center gap-xs'>
                            <PlusSVG classes='svg-inline--fa fa-plus fa-fw fa-1x ' />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-xl mt-md flex items-center justify-center rounded border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offset '>
            <div className='light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain'>
              No threads yet
            </div>
          </div>
          <div className='divide-y border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'></div>
        </div>
        <div className='col-span-4 lg:mt-lg'>
          <div className='hidden lg:block'>
            <div className='border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
              <div className='border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
                <div className='flex-col md:flex-row flex md:items-center gap-md md:justify-between  pb-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-background '>
                  <div className='md:hidden'>
                    <div className='flex justify-between gap-sm '>
                      <div>
                        <div className='flex items-center gap-x-sm '>
                          <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                            <GridSVG classes='svg-inline--fa fa-grid-2 fa-fw ' />
                          </h2>
                          <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                            Collections
                          </h2>
                        </div>
                      </div>
                      <div className='flex gap-x-sm'>
                        <div className='h-full relative flex items-center'>
                          <button
                            type='button'
                            className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                          >
                            <div className='flex items-center leading-none justify-center gap-xs'>
                              <PlusSVG classes='svg-inline--fa fa-plus fa-fw fa-1x ' />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex items-center justify-between gap-sm grow'>
                    <div>
                      <div className='flex items-center gap-x-sm '>
                        <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                          <GridSVG classes='svg-inline--fa fa-grid-2 fa-fw ' />
                        </h2>
                        <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                          Collections
                        </h2>
                      </div>
                    </div>
                    <div className='flex gap-x-sm'>
                      <div className='h-full relative flex items-center'>
                        <button
                          type='button'
                          className='bg-offsetPlus  text-textMain   md:hover:text-textOff  font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
                        >
                          <div className='flex items-center leading-none justify-center gap-xs'>
                            <PlusSVG classes='svg-inline--fa fa-plus fa-fw fa-1x ' />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-sm my-md'>
            <div className='p-md rounded-md text-center border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offset '>
              <div className='mb-sm light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain'>
                Organize your threads or collaborate with others
              </div>
              <button
                type='button'
                className='bg-super   text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'
              >
                <div className='flex items-center leading-none justify-center gap-xs'>
                  <div className='text-align-center relative'>Get Started</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter user={user} selectedNav='Library' />
    </div>
  );
}

export default MainSection;
