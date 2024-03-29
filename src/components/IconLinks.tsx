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

  function renderIconSection(link: IconLink, index: number): JSX.Element {
    return (
      <section key={`${link.title}-${index}`}>
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
