function Step3Page() {
  return (
    <>
      <div className='mb-lg space-y-xs'>
        <h1 className='default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          Perplexity for your phone
        </h1>
        <div className='light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
          Available for iPhone and Android
        </div>
      </div>
      <div>
        <div className='max-w-screen-lg mx-auto  text-center'>
          <video
            className=' w-full mx-auto rounded-lg overflow-hidden mt-lg shadow-lg'
            controls
          >
            <source
              src='https://r2cdn.perplexity.ai/perplexity-iphone-wide2.mp4'
              type='video/mp4'
            />
          </video>
          <div className='mx-auto mt-lg  rounded-lg flex gap-lg items-center justify-center border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
            <div className='md:text-left'>
              <h2 className='default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
                Get the app now
              </h2>
              <div className='mt-xs light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
                Visit the App Store, Google Play, or scan with your phone to
                download instantly
              </div>
              <div className='flex items-center'>
                <a
                  href='https://www.perplexity.ai/download-iphone'
                  className='mt-md md:block cursor:pointer flex justify-center'
                />
                <img
                  alt='Apple logo'
                  loading='lazy'
                  width='150'
                  height='50'
                  decoding='async'
                  data-nimg='1'
                  className='mt-md dark:hidden w-[150px]'
                  src='/images/apple_play.svg'
                />
                <a
                  href='https://play.google.com/store/apps/details?id=ai.perplexity.app.android'
                  className='md:block cursor:pointer flex justify-center hover:opacity-50 transition duration-300 mt-md'
                >
                  <img
                    alt='Android'
                    loading='lazy'
                    width='180'
                    height='70'
                    decoding='async'
                    data-nimg='1'
                    className='w-[185px]'
                    src='/images/google_play.webp'
                  />
                </a>
              </div>
            </div>
            <div className='hidden md:block w-[200px]'>
              <div className='rounded-lg overflow-hidden border shadow-sm w-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <img
                  alt='QR code for the app link'
                  loading='lazy'
                  width='160'
                  height='160'
                  decoding='async'
                  data-nimg='1'
                  src='/images/qrcode.webp'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3Page;
