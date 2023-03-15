/* Interfaces */
import IconLink from '../interfaces/IconLink';
import IconLinksProps from '../interfaces/IconLinksProps';

/* Constants */
import images from '../constants/images';

function IconLinks(props: IconLinksProps): JSX.Element {

  const iconLinks: IconLink[] = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/huetown',
      src: props.isForNavDrawer ? images.icons.instagramWhite : images.icons.instagramGray
    },
    {
      title: 'Twitter',
      url: 'https://www.twitter.com/huetown',
      src: props.isForNavDrawer ? images.icons.twitterWhite : images.icons.twitterGray
    },
    {
      title: 'Email',
      url: 'mailto:info@huetown.com',
      src: props.isForNavDrawer ? images.icons.emailWhite : images.icons.emailGray
    }
  ];

  function renderIconSection(link: IconLink, index: number): JSX.Element {
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
