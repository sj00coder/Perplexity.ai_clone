import NewThreadInput from '../NewThreadInput';
import ArrowRightToArcSVG from '../svg/ArrowRightToArc';
import MobileFooter from '../footer/MobileFooter';
import QueryButton from '../buttons/QueryButton';
import Footer from '../footer/Footer';
import Header from './header';

const queryButtons = [
  { text: 'history of Argentina', href: '/search?q=history%20of%20Argentina' },
  {
    text: 'unique colorado flowers',
    href: '/search?q=unique%20colorado%20flowers',
  },
  {
    text: 'checkout time w hotel cdmx',
    href: '/search?q=checkout%20time%20w%20hotel%20cdmx',
  },
  {
    text: 'how to center a div',
    href: '/search?q=how%20to%20center%20a%20div',
  },
  {
    text: 'brown dog name ideas',
    href: '/search?q=brown%20dog%20name%20ideas',
  },
  {
    text: 'healthy resturants in sf',
    href: '/search?q=healthy%20restaurants%20in%20sf',
  },
  {
    text: 'd/dx x^2 y^4, d/dy x^2 y^4',
    href: '/search?q=d%2Fdx%20x%5E2%20y%5E4%2C%20d%2Fdy%20x%5E2%20y%5E4',
  },
];
function MainSection() {
  return (
    <aside className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
      <div className='lg:rounded-lg shadow-sm md:dark:border h-full overflow-clip bg-clip-border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
        <div className='h-full'>
          <div className='w-full mx-auto  max-w-screen-md md:px-lg  px-md h-full'>
            <div className='relative h-full flex flex-col'>
              <Header />
              <div className='w-full h-full grow flex items-center -mt-2xl md:mt-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <div className='mb-lg md:mb-xl w-full'>
                  <div className='md:text-center mb-lg pb-xs flex items-center justify-center default text-base text-textMain selection:bg-superDuper selection:text-textMain'>
                    <span className='text-4xl font-display font-regular'>
                      Where knowledge begins
                    </span>
                  </div>
                  <NewThreadInput />
                  <div className=' mt-lg '></div>
                  <div className='mb-sm md:text-center flex items-center gap-x-xs md:justify-center'>
                    <div className='inline default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                      <ArrowRightToArcSVG
                        classes={'svg-inline--fa fa-arrow-right-to-arc '}
                      />
                    </div>
                    <div className='inline  default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                      Try<span> asking </span>
                    </div>
                  </div>
                  <div className='flex gap-sm md:gap-xs md:justify-center md:items-center flex-wrap'>
                    {queryButtons.map((queryButton, index) => (
                      <QueryButton
                        key={index}
                        text={queryButton.text}
                        href={queryButton.href}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </aside>
  );
}

export default MainSection;
