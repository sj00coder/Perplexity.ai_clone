import SvgTextCard from '../cards/SvgTextCard';
import FilesSVG from '../svg/FilesSVG';
import GroupCrownSVG from '../svg/GroupCrownSVG';
import InfinitySVG from '../svg/InfinitySVG';
import MicroCHipAiSVG from '../svg/MicroChipAiSVG';
import GiftSVG from '../svg/giftSVG';
const svgTextCards = [
  {
    svg: <InfinitySVG classes='svg-inline--fa fa-infinity fa-fw fa-lg ' />,
    heading: 'More Copilot uses',
    text: ' Use Copilot for more comprehensive answers (300+ per day)',
  },
  {
    svg: (
      <MicroCHipAiSVG classes='svg-inline--fa fa-microchip-ai fa-fw fa-lg ' />
    ),
    heading: 'Unlock the best AI models',
    text: ' Use Claude-2 or GPT-4 for all questions (300+ per day)',
  },
  {
    svg: <FilesSVG classes='svg-inline--fa fa-files fa-fw fa-lg ' />,
    heading: 'Unlimited file upload',
    text: ' Ask your files anything',
  },
  {
    svg: (
      <GroupCrownSVG classes='svg-inline--fa fa-user-group-crown fa-fw fa-lg ' />
    ),
    heading: 'Pro support',
    text: 'Private Discord channel with other Pro users and employees',
  },
];
function Step2Page() {
  return (
    <>
      <div className='mb-lg space-y-xs'>
        <h1 className='default font-display text-2xl md:text-3xl text-textMain  selection:bg-superDuper selection:text-textMain'>
          Try Pro
        </h1>
        <div className='light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain'></div>
      </div>
      <div>
        <div className='mt-lg default font-sans text-base text-textMain  selection:bg-superDuper selection:text-textMain'>
          Unlock the most powerful AI research assistant.
        </div>
        <div className='mt-lg border-t pt-lg border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
          <div className='grid md:grid-cols-2 gap-lg'>
            {svgTextCards.map((card, index) => (
              <SvgTextCard
                key={index}
                svg={card.svg}
                heading={card.heading}
                text={card.text}
              />
            ))}
            <div className='p-md border rounded flex flex-col mt-md border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
              <div className='flex-grow'>
                <div className='relative mb-sm'>
                  <div className='super text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-super  selection:bg-superDuper selection:text-textMain'>
                    Monthly
                  </div>
                </div>
                <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                  $20
                </h2>
                <div className='mb-md light font-sans text-sm text-textOff  selection:bg-superDuper selection:text-textMain'>
                  billed per month
                </div>
              </div>
              <div>
                <div className='items-center gap-md'>
                  <button
                    type='button'
                    className='bg-super   text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <div className='text-align-center relative'>
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='xs:mb-[64px] p-md border rounded flex flex-col mt-md border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
              <div className='flex-grow'>
                <div className='relative mb-sm'>
                  <div className='super text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-super  selection:bg-superDuper selection:text-textMain'>
                    Yearly
                  </div>
                  <div className='px-sm py-two rounded-full absolute right-0 -top-xs border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offset '>
                    <div className='default font-sans text-xs font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                      Save $40 a year
                    </div>
                  </div>
                </div>
                <h2 className='default font-display text-lg font-medium text-textMain  selection:bg-superDuper selection:text-textMain'>
                  $200
                </h2>
                <div className='mb-md light font-sans text-sm text-textOff  selection:bg-superDuper selection:text-textMain'>
                  billed per year
                </div>
              </div>
              <div>
                <div className='mb-sm super font-sans text-xs font-medium text-super  selection:bg-superDuper selection:text-textMain'>
                  <span className='mr-xs'>
                    <GiftSVG classes='svg-inline--fa fa-gift ' />
                  </span>
                  <span>7 day free trial</span>
                </div>
                <div className='items-center gap-md'>
                  <button
                    type='button'
                    className='bg-super   text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10'
                  >
                    <div className='flex items-center leading-none justify-center gap-xs'>
                      <div className='text-align-center relative'>
                        Get Started
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2Page;
