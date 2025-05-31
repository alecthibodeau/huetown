/* Interfaces */
import IconLink from '../interfaces/IconLink';

/* Constants */
import images from '../constants/images';

function IconLinks(): JSX.Element {
  const { instagramWhite } = images.icons;

  const iconLinks: IconLink[] = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/huetown',
      src: instagramWhite
    }
  ];

  function renderIconLinkWrapper(link: IconLink, index: number): JSX.Element {
    return (
      <a
        key={`${link.title}-${index}`}
        data-title={link.title} href={link.url}
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={link.src} alt={`Huetown ${link.title} icon`} />
      </a>
    )
  }

  return (
    <>
      {iconLinks.map(renderIconLinkWrapper)}
    </>
  );
}

export default IconLinks;
