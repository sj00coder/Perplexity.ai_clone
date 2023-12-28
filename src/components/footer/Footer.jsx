import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <>
      <div className='hidden md:block pb-md'>
        <div>
          <div className='flex md:justify-center flex-wrap gap-x-md gap-y-sm px-sm md:px-0 pb-2xl md:pb-0 border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent'>
            <FooterLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
