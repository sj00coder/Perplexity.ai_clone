import SourceCard from '../cards/SourceCard';

function SourceSection() {
  const sources = [
    {
      text: 'Crush Your Goals With These 75 Mantras for Success - Parade',
      sourceName: 'parade',
      source: 'https://parade.com/health/mantras-for-success',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=parade.com',
    },
    {
      text: 'Vedic Mantras for Success | Benefits of Success',
      source: 'https://astrotalk.com/mantras/success-mantra',
      sourceName: 'astrotalk',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=astrotalk.com',
    },
    {
      text: '75 Motivational Mantras to Help You Succeed in Life - Basics by Becca',
      source: 'https://basicsbybecca.com/blog/motivational-mantras',
      sourceName: 'basicsbybecca',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=basicsbybecca.com',
    },
    {
      text: '5 Success Mantras - LinkedIn',
      source: 'https://www.linkedin.com/pulse/5-success-mantras-vivek-lodha',
      sourceName: 'linkedin',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
    },
    {
      text: '5 Success Mantras - LinkedIn',
      source: 'https://www.linkedin.com/pulse/5-success-mantras-vivek-lodha',
      sourceName: 'linkedin',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
    },
    {
      text: '5 Success Mantras - LinkedIn',
      source: 'https://www.linkedin.com/pulse/5-success-mantras-vivek-lodha',
      sourceName: 'linkedin',
      sourceImgUrl:
        'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
    },
  ];
  return (
    <div className='mb-lg border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
      <div className='flex items-center'>
        <h2 className='flex items-center gap-x-sm default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fasr'
            data-icon='list-timeline'
            className='svg-inline--fa fa-list-timeline '
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M144 96l33.9-33.9L208 32H400h48V80v32 48H400 208l-30.1-30.1L144 96zm256 16V80H227.9l-16 16 16 16H400zM64 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0l33.9-33.9L208 352H400h48v48 32 48H400 208l-30.1-30.1L144 416zm256 16V400H227.9l-16 16 16 16H400zM177.9 289.9L144 256l33.9-33.9L208 192H464h48v48 32 48H464 208l-30.1-30.1zM227.9 272H464V240H227.9l-16 16 16 16z'
            ></path>
          </svg>
          <p>Sources</p>
        </h2>
      </div>
      <div className='space-y-sm mt-md'>
        <div className=''>
          <div className='taco flex items-center gap-x-xs border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
            <div className='rounded-full'>
              <div className='default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'></div>
            </div>
            <div></div>
          </div>
          <div className='grow default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
            <div>
              <div className='border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <div className='flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'></div>
                <div className='grid grid-cols-2 gap-sm md:grid-cols-4'>
                  {sources.map((item, index) => (
                    <a
                      key={index}
                      className='flex group items-stretch cursor-pointer'
                      href={item.source}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <SourceCard
                        sourceName={item.sourceName}
                        sourceImgUrl={item.sourceImgUrl}
                        index={index}
                        text={item.text}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SourceSection;
