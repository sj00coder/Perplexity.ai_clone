import LinkButton from '../buttons/LinkButton';
function FooterLinks() {
  const linkItems = [
    { href: '/pro', text: 'Try Pro', externalLink: false, colorSuper: true },
    { href: '/about', text: 'Careers', externalLink: false },
    {
      href: 'https://perplexity-ai.notion.site/Perplexity-AI-FAQs-0a9141bdd1b94c76b955e892f73451ff?pvs=4',
      text: 'FAQ',
      externalLink: true,
    },
    { href: 'https://labs.perplexity.ai', text: 'Labs', externalLink: true },
    { href: '/blog', text: 'Blog', externalLink: false },
    { href: '/privacy', text: 'Privacy', externalLink: false },
    { href: '/tos', text: 'Terms', externalLink: false },
  ];
  return (
    <>
      {linkItems.map((linkItem, index) => {
        return (
          <LinkButton
            key={index}
            href={linkItem.href}
            text={linkItem.text}
            externalLink={linkItem.externalLink}
            colorSuper={
              Object.prototype.hasOwnProperty.call(linkItem, 'colorSuper')
                ? linkItem.colorSuper
                : false
            }
          />
        );
      })}
    </>
  );
}

export default FooterLinks;
