/* Interfaces */
import IconLink from '../interfaces/IconLink';
import IconLinksProps from '../interfaces/IconLinksProps';

/* Constants */
import images from '../constants/images';

function IconLinks(props: IconLinksProps): JSX.Element {
  const {
    instagramGray,
    instagramWhite
  } = images.icons;

  const iconLinks: IconLink[] = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/huetown',
      src: props.isForMobileNav ? instagramWhite : instagramGray
    }
  ];

  function renderIconLinkContainer(link: IconLink, index: number): JSX.Element {
    return (
      <div key={`${link.title}-${index}`} className="icon-link-container">
        <a data-title={link.title} href={link.url} className="icon-link">
          <img src={link.src} alt={`Huetown ${link.title} icon`} />
          <div></div>
        </a>
      </div>
    )
  }

  return (
    <>
      {iconLinks.map(renderIconLinkContainer)}
    </>
  );
}

export default IconLinks;
