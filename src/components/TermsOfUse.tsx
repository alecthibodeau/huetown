/* Styles */
import '../styles/documentation.scss';

function Terms(): JSX.Element {
  return (
    <div className="documentation">
      <h1>Huetown Website Terms of Use</h1>

      <p>
        The following Terms of Use apply to your activities as a user of Huetown's
        website. By ordering items at this website you agree to the following
        policies.
      </p>

      <p className="bold">Ordering Policy</p>

      <p>
        All payments at Huetown are securely processed
        through <a className="text-link" href="https://www.paypal.com">PayPal</a>.
        A PayPal account is not required for ordering: there are multiple ways to
        pay for your order through PayPal's checkout process, including a one-time
        payment by debit or credit card.
      </p>

      <p>
        You are responsible for the accuracy of all information supplied with
        your order. Make sure to double-check your billing and shipping address
        when placing an order. Huetown is unable to reroute packages.
      </p>

      <p className="bold">Shipping Policy</p>

      <p>
        Items ordered at Huetown's website ship in sturdy packaging from Providence,
        Rhode Island USA via one of these carriers: United States Postal Service
        (USPS) or United Parcel Service (UPS). Packages generally ship within a
        couple business days of an order being placed.
      </p>

      <p>
        Each order requires a "Standard Flat Rate Shipping" fee. This amount
        is itemized in your PayPal ordering information. The amount is different for
        domestic or international shipping.
      </p>

      <p>
        We strive to get you your order speedily. Packages
        usually ship via USPS Priority Mail or a comparably fast USPS/UPS service
        for the same delivery address. For example, a package that's estimated to
        arrive within three days using either USPS Priority Mail or USPS First
        Class Mail may ship through either one of these services at the shipper's
        discretion.
      </p>

      <p>
        Once shipping is underway you'll receive confirmation directly from PayPal
        by email with tracking information. For questions or concerns about the
        location of your order once it has shipped please contact the carrier
        directly.
      </p>

      <p>
        Allow approximately one week for domestic delivery and 2-3 weeks for
        international delivery. Packages may arrive sooner. Conversely, unanticipated
        actions by the carrier may delay delivery time.
      </p>

      <p>
        <span className="bold">&bull; Domestic shipping</span>: Shipping is a flat $8 for
        domestic delivery within the USA. Orders placed at Huetown's website are
        not available for local pick-up.
      </p>

      <p>
        <span className="bold">&bull; International shipping</span>: Shipping is a flat
        $29 for international delivery. Huetown is not responsible for additional
        fees charged by customs. If you decide to refuse any shipments from Huetown
        you are responsible for the original shipping charges to you, any duties,
        taxes and/or customs charges that are incurred on the package (on both
        the original and return shipments) and the cost of returning the package
        to Huetown. No refund will be issued. All orders shipped internationally
        are <span className="ital">final sale</span>.
      </p>

      <p className="bold">Lost or Damaged Packages Policy</p>

      <p>
        Once Huetown has released the package to the carrier, you will
        assume the risk of loss and title for the merchandise. If your package
        gets lost or damaged in transit we will do everything we possibly can to assist you.
        However Huetown is not responsible for any lost, missing, damaged, delivered
        or stolen merchandise.
      </p>

      <p className="bold">Missing Items Policy</p>

      <p>
        Inspect your package upon arrival. If your package has arrived as expected
        but items you've ordered are missing from it due to a packaging error then
        you must report the issue within seven calendar days of delivery to qualify
        for a redelivery or refund. Reports made after seven calendar days will
        not be accepted. All reports must include your Transaction ID from PayPal
        and a photo of the package showing its contents.
      </p>

    </div>
  );
}

export default Terms;
