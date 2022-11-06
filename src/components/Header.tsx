
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Images */
import huetownGrayLogo from '../assets/images/huetown-script-logo-fifty-percent-gray.svg';
import huetownWhiteLogo from '../assets/images/huetown-script-logo-white.svg';
import HeaderProps from '../interfaces/HeaderProps';

/* Interfaces */
import IconLinks from './IconLinks';

function Header(props: HeaderProps) {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!props.isBreakpointXs && isNavDrawerOpen) {
      setIsNavDrawerOpen(false);
    }
  }, [props.isBreakpointXs]);

  function renderBurgerBar(bar: string, index: number) {
    return (
      <div
        key={bar + index}
        className={isNavDrawerOpen ? `${bar} closing-x` : bar}>
      </div>
    )
  }

  return (
    <header>
      <div className="nav-top">
        <Link to="/">
          <img
            className={props.isBreakpointXs ? 'huetown-logo-white' : 'huetown-logo-gray'}
            src={props.isBreakpointXs ? huetownWhiteLogo : huetownGrayLogo}
            alt="Huetown logo" />
        </Link>
        <button
          id="burgerButton"
          className={isNavDrawerOpen ? 'burger-button closing-x' : 'burger-button'}
          onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}>
          <div className="burger-bars-container">
            {Array(3).fill('bar').map(renderBurgerBar)}
          </div>
        </button>
      </div>
      <nav id="nav" className={isNavDrawerOpen ? 'nav-drawer-is-open' : ''}>
        <a data-title="Lunar Calendars" className="nav-element nav-element-lunar-calendar" href="lunar-calendars.html">lunar calendars</a>
        <a data-title="About" className="nav-element nav-element-about" href="about.html">about</a>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYA259lqiD/5IgMGjPaM0Zre5QwGV8utB//flHUrHQnQt8ktJKKsdcCsY0UFJ+vfv7RPqg1cLc/gvffzo/jFot+m/5C33byqxQz9sYYryUTftaH2YwJ/RgIVlZSqVhGGaklJM+CBUMAoZWEB/thwl4sHf/tVoPQm7qzPxh7tsAX4SzELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAiMSP8CbBa43YAweUIDvoFnhLSzekN7FoePtS/QIDZdidQ9XE1KmdGGsqJyKalO2EAI7lqL3HfZXqEooIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTgxMTI0MTAyNzM0WjAjBgkqhkiG9w0BCQQxFgQUl3JQt2Bag/s64BO8DVfZgFPorYkwDQYJKoZIhvcNAQEBBQAEgYAHyNRN5lZHSo7NxmMuyk/jpBX+4Nhq4ns1yr4DIcBwO1xIWu7JXU9Z8FNZJh/hYIaUI2j5TjBSRdy9+ZvaM8nmVOtvGaRgenhRk9MXpisdHcc7g1gK8Xkt1TWQRqJUDumc03/S7LbwDr8ieR2587x4ypK/AR5Oo/h7OPfZRStioA==-----END PKCS7-----" />
          <input className="paypal-link" type="submit" value="view cart" alt="View Cart" />
        </form>
        <div className="nav-menu-icons">
          <IconLinks isForNavDrawer={true} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
