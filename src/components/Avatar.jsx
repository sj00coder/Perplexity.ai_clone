import { PropTypes } from 'prop-types';

function Avatar({ photoUrl, displayName }) {
  return (
    <div className=' rounded-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
      <div className='flex items-center gap-x-xs relative'>
        <div className='relative'>
          <div className='aspect-square rounded-full overflow-hidden flex items-center justify-center  w-5 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'>
            <div className='light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
              {photoUrl ? (
                <img
                  alt='User avatar'
                  className='w-full h-auto'
                  src={photoUrl}
                />
              ) : (
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fass'
                  data-icon='user-secret'
                  className='svg-inline--fa fa-user-secret fa-xs '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='currentColor'
                    d='M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 14.3-25 27.1-64.6 35.9c.4 4 .6 8 .6 12.1c0 17-3.3 33.2-9.3 48H416L375.3 336H416l32 176H0L32 336H72.7L32 224h73.3c-6-14.8-9.3-31-9.3-48c0-4.1 .2-8.1 .6-12.1C57 155.1 32 142.3 32 128c0-17 35.5-32 89.1-40.5zM144 224h64l8-32h16l8 32h64l13.5-54.1C289.8 173.8 258 176 224 176s-65.8-2.2-93.5-6.1L144 224zm-16 64l48 192 32-128-16-32-64-32zM272 480l48-192-64 32-16 32 32 128z'
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className='line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
          {displayName || 'Anonymous'}
        </div>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  photoUrl: PropTypes.string,
  displayName: PropTypes.string,
};

export default Avatar;
