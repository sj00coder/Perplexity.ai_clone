function LikeButton() {
  return (
    <div className='flex items-center gap-x-sm  border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
      <div className='border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
        <div className='flex items-center gap-x-xs transition duration-300 select-none cursor-pointer hover:text-superAlt light font-sans text-sm font-medium text-textOff  selection:bg-superDuper selection:text-textMain'>
          <div className=''>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fasr'
              data-icon='heart'
              className='svg-inline--fa fa-heart fa-fw fa-sm '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M256 163.9L222.1 130l-24.2-24.2C181.4 89.3 159 80 135.8 80C87.3 80 48 119.3 48 167.8c0 23.3 9.2 45.6 25.7 62.1l24.2 24.2L256 412.1 414.1 254.1l24.2-24.2c16.5-16.5 25.7-38.8 25.7-62.1c0-48.5-39.3-87.8-87.8-87.8c-23.3 0-45.6 9.2-62.1 25.7L289.9 130 256 163.9zm33.9 282.2L256 480l-33.9-33.9L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c0 0 0 0 0 0c25.5-25.4 60-39.7 96-39.7C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 289.9 446.1z'
              ></path>
            </svg>
          </div>
          <div>Like</div>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
