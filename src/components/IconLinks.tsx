/* Interfaces */
import IconLink from '../interfaces/IconLink';
import IconLinksProps from '../interfaces/IconLinkProps';

/* Images */
import iconWhiteEmail from '../assets/images/icon-email-white.svg';
import iconWhiteInstagram from '../assets/images/icon-instagram-white.svg';
import iconWhiteTwitter from '../assets/images/icon-twitter-white.svg';
import iconGrayEmail from '../assets/images/icon-email-fifty-percent-gray.svg';
import iconGrayInstagram from '../assets/images/icon-instagram-fifty-percent-gray.svg';
import iconGrayTwitter from '../assets/images/icon-twitter-fifty-percent-gray.svg';

function IconLinks(props: IconLinksProps) {
  const iconLinks: IconLink[] = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/huetown',
      src: props.isForNavDrawer ? iconWhiteInstagram : iconGrayInstagram
    },
    {
      title: 'Twitter',
      url: 'https://www.twitter.com/huetown',
      src: props.isForNavDrawer ? iconWhiteTwitter : iconGrayTwitter
    },
    {
      title: 'Email',
      url: 'mailto:info@huetown.com',
      src: props.isForNavDrawer ? iconWhiteEmail : iconGrayEmail
    }
  ];

  function renderIconSection(link: IconLink, index: number) {
    return (
      <section key={link.title + index}>
        <a data-title={link.title} href={link.url}>
          <img src={link.src} alt={`Huetown ${link.title} icon`} />
          <div></div>
        </a>
      </section>
    )
  }

  return (
    <>
      {iconLinks.map(renderIconSection)}
    </>
  );
}

export default IconLinks;
