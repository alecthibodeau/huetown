/* Images */
import iconWhiteEmail from '../assets/images/icon_email_white.svg';
import iconWhiteInstagram from '../assets/images/icon_instagram_white.svg';
import iconWhiteTwitter from '../assets/images/icon_twitter_white.svg';
import iconGrayEmail from '../assets/images/icon_email_fifty_percent_gray.svg';
import iconGrayInstagram from '../assets/images/icon_instagram_fifty_percent_gray.svg';
import iconGrayTwitter from '../assets/images/icon_twitter_fifty_percent_gray.svg';

interface iconLink {
  title: string;
  url: string;
  src: string;
}

interface iconLinksProps {
  isForNavDrawer: boolean;
}

function IconLinks(props: iconLinksProps) {
  const iconLinks: iconLink[] = [
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

  function renderIconSection(link: iconLink, index: number) {
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
