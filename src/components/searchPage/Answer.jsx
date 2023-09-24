function AnswerSection() {
  return (
    <>
      <div className='flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
        <div className='flex items-center justify-between w-full mb-sm'>
          <div color='super' className='space-x-sm flex items-center '>
            <h2 className='default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fasr'
                data-icon='align-left'
                className='svg-inline--fa fa-align-left fa-fw '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M24 40H0V88H24 264h24V40H264 24zm0 128H0v48H24 424h24V168H424 24zM0 296v48H24 264h24V296H264 24 0zM24 424H0v48H24 424h24V424H424 24z'
                ></path>
              </svg>
            </h2>
            <h2 className='default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
              Answer
            </h2>
          </div>
        </div>
      </div>
      <div className='relative default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
        <div className='break-words min-w-0 [word-break:break-word]'>
          <div dir='auto'>
            <div className='prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu libero lacinia, dapibus neque ac, consequat velit. Vestibulum
              quis nulla et massa congue blandit dictum non nisl. Curabitur eu
              tortor id risus tempus pulvinar at ut arcu. Curabitur iaculis
              justo finibus quam fermentum, a varius nibh vulputate. In in mi
              euismod, congue risus eu, luctus odio. Donec fermentum dui sit
              <br />
              <br />
              amet sapien sollicitudin posuere. Curabitur sit amet turpis quis
              urna maximus elementum id in velit. Suspendisse rutrum erat et
              metus fermentum posuere. Praesent vulputate libero id neque
              iaculis ultricies. Vivamus non lectus dapibus, blandit nisl vel,
              imperdiet nisl. Vivamus fringilla elit non turpis semper, sit amet
              rutrum enim consectetur. Phasellus venenatis augue eget augue
              <br />
              <br />
              porttitor, a efficitur dui condimentum. Aenean bibendum magna
              pulvinar purus gravida, quis ullamcorper ligula varius. Vestibulum
              et nisi sollicitudin, molestie erat a, ornare urna. Sed in nibh
              faucibus dolor faucibus finibus eu at odio. Sed convallis risus
              non lacus rutrum, sit amet egestas diam ultrices. Morbi tempus
              enim sit amet iaculis auctor. Curabitur scelerisque nulla id
              tellus posuere vulputate. Nullam sit amet arcu elementum, varius
              elit nec, rutrum felis.
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-xs mt-sm -ml-sm'>
        <div className=''>
          <button
            type='button'
            className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
          >
            <div className='flex items-center leading-none justify-center gap-xs'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fasr'
                data-icon='arrow-rotate-right'
                className='svg-inline--fa fa-arrow-rotate-right fa-fw fa-1x '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M472 224h24V200 56 32H448V56v80.1l-20-23.5C387 63.4 325.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c50.4 0 97-16.7 134.4-44.8l-28.8-38.4C332.2 418.9 295.7 432 256 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c54.3 0 102.9 24.6 135.2 63.4l.1 .2 0 0L418.9 176H328 304v48h24H472z'
                ></path>
              </svg>
              <div className='text-align-center relative'>Copilot</div>
            </div>
          </button>
        </div>
        <button
          type='button'
          className='text-textOff dark:text-textOffDark md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark  md:hover:text-superAlt font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
        >
          <div className='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
            <div className='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
              <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <span className='text-textMainDark'>Not Accurate</span>
              </div>
            </div>
          </div>
          <div className='flex items-center leading-none justify-center gap-xs'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='flag'
              className='svg-inline--fa fa-flag fa-fw fa-1x '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M48 24V0H0V24 64 350.5 400v88 24H48V488 388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4L448 368V69.7 16L400 40l-6.4 3.2c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z'
              ></path>
            </svg>
          </div>
        </button>
        <button
          type='button'
          className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
        >
          <div className='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
            <div className='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
              <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <span className='text-textMainDark'>View Sources</span>
              </div>
            </div>
          </div>
          <div className='flex items-center leading-none justify-center gap-xs'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='brackets-square'
              className='svg-inline--fa fa-brackets-square fa-fw fa-1x '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M24 32H0V56 456v24H24h96 24V432H120 48V80h72 24V32H120 24zm400 0H328 304V80h24 72V432H328 304v48h24 96 24V456 56 32H424z'
              ></path>
            </svg>
          </div>
        </button>
        <button
          type='button'
          className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
        >
          <div className='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
            <div className='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
              <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <span className='text-textMainDark'>Copy To Clipboard</span>
              </div>
            </div>
          </div>
          <div className='flex items-center leading-none justify-center gap-xs'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='clipboard'
              className='svg-inline--fa fa-clipboard fa-fw fa-1x '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='currentColor'
                d='M304 64h32 48v48V464v48H336 48 0V464 112 64H48 80h33.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H304zM48 112V464H336V112H304v48H192 80V112H48zm144-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z'
              ></path>
            </svg>
          </div>
        </button>
        <button
          type='button'
          className='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
        >
          <div className='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
            <div className='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
              <div className='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                <span className='text-textMainDark'>Edit Query</span>
              </div>
            </div>
          </div>
          <div className='flex items-center leading-none justify-center gap-xs'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='pen-to-square'
              className='svg-inline--fa fa-pen-to-square fa-fw fa-1x '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M330 137.9L374.1 182 233.7 322.4l-50.4 6.3 6.3-50.4L330 137.9zM425 199l17-17 36.1-36.1L512 112 478.1 78.1 433.9 33.9 400 0 366.1 33.9 330 70 313 87l-17 17L144 256l-9.9 78.9L128 384l49.1-6.1L256 368 408 216l17-17zm-17-50.9L363.9 104 400 67.9 444.1 112 408 148.1zM24 64H0V88 488v24H24 424h24V488 312 288H400v24V464H48V112H200h24V64H200 24z'
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}
export default AnswerSection;
