/* eslint-disable */

import "./PrivacyPolicy.css";

import { Navigation } from "../components/Navigation";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { BackToTopBtn } from "../components/BackToTopBtn";

export function PrivacyPolicy() {
  return (
    <>
      <Navigation menuClass="short-menu" />

      <Section
        id="privacy-policy"
        title={
          <span>
            Privacy Policy - <span>Minicactus Games</span>
          </span>
        }
      >
        <p>
          At Minicactus Games, we value your privacy and are committed to
          protecting your personal data. This Privacy Policy outlines how we
          collect, use, and share your information when you use our website and
          products/services. By using our products and services, you agree to
          the practices described in this policy.
        </p>

        <h3>Information Collection</h3>

        <p>
          When you use our products, we do not ask for personally identifiable
          information such as your name, email address, birth date, gender, or
          location. However, we may collect retention, usage data, and gameplay
          behavior analytics through third-party services to enhance our
          products.
        </p>

        <p>
          Please be aware that our products may run on third-party platforms
          like Steam, which have their own privacy policies. If you provide
          personal data to these third parties, their policies will govern the
          use of your data.
        </p>

        <p>
          When you visit our website,{" "}
          <a
            target="_blank"
            href="https://www.minicactusgames.com/"
            rel="noreferrer"
          >
            minicactusgames.com
          </a>
          , we gather page usage information, IP addresses, and data provided by
          Google Analytics and cookies to improve the overall experience for our
          website visitors.
        </p>

        <p>
          If you contact us through our website's form or via email, we collect
          your email address and any other personal information you choose to
          provide. We use this information solely to respond to your inquiries.
        </p>

        <h3>Data Usage</h3>

        <p>The information we collect serves various purposes:</p>

        <ul>
          <li>Providing and maintaining our products</li>
          <li>Supporting players and addressing technical issues</li>
          <li>Analyzing data to improve our products</li>
          <li>Monitoring product usage</li>
          <li>Data Transfer</li>
        </ul>

        <p>
          Your personal data may be transferred and stored on computers located
          outside your country or jurisdiction, where data protection laws may
          differ. By submitting your information, you consent to this transfer
          and ensure we will take appropriate steps to safeguard your data in
          accordance with this Privacy Policy.
        </p>

        <h3>Data Disclosure</h3>

        <p>We may disclose your personal data in good faith to:</p>

        <ul>
          <li>Comply with legal obligations</li>
          <li>Protect and defend our products and rights</li>
          <li>
            Investigate possible wrongdoing in connection with our products
          </li>
          <li>Ensure the safety of users and the public</li>
          <li>Protect against legal liability</li>
          <li>Data Security</li>
        </ul>

        <p>
          We prioritize the security of your personal data and employ security
          technologies and procedures to prevent unauthorized access, use, or
          disclosure. While no system is infallible, we take reasonable measures
          to safeguard your information from loss, theft, and misuse.
        </p>

        <h3>Children's Privacy</h3>

        <p>
          We do not knowingly collect personal information from children under
          the age of 13. If we discover or are notified that we hold data for a
          child under 13, we will promptly delete it.
        </p>

        <h3>Data Retention</h3>

        <p>
          We retain personal data as long as necessary to provide our services,
          support our products, comply with legal obligations, and resolve
          disputes. The retention periods may vary depending on the data type
          and context of each product or service.
        </p>

        <h3>Policy Updates</h3>

        <p>
          We may update our Privacy Policy from time to time and will post the
          changes on this page.
        </p>

        <h3>Contact Us</h3>

        <p>
          For any questions or concerns regarding this Privacy Policy, please
          contact us at{" "}
          <a
            target="_blank"
            href="mailto:contact@minicactusgames.com"
            rel="noreferrer"
          >
            contact@minicactusgames.com
          </a>
          .
        </p>

        <p>Thank you for trusting Minicactus Games with your privacy.</p>
      </Section>

      <Footer />

      <BackToTopBtn to="privacy-policy" />
    </>
  );
}
