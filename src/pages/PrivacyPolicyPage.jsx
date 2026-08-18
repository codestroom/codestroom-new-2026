import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="legal-page">
      <SEOHead
        title="Privacy Policy"
        description="How Codestroom collects, uses, stores, discloses, and protects your personal information across our website, services, and applications."
        canonicalPath="/privacy-policy"
      />
      <div className="wrap legal-wrap">
        <div className="section-head">
          <span className="kicker">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: August 18, 2026</p>
        </div>

        <div className="legal-content">
          <p>
            Codestroom (&ldquo;Codestroom&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is
            committed to protecting the personal information of our website visitors, customers, users, and application users.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our
            website, contact us, request our services, interact with our advertisements, or use any mobile application developed
            or operated by Codestroom.
          </p>
          <p>
            By accessing our website, using our services, or using our applications, you agree to the practices described in this
            Privacy Policy.
          </p>

          <h2>1. About Codestroom</h2>
          <p>
            Codestroom is an IT and software development company providing technology and digital solutions, including:
          </p>
          <ul>
            <li>Website Development</li>
            <li>Mobile Application Development</li>
            <li>Custom Software Development</li>
            <li>E-commerce Development</li>
            <li>UI/UX Design</li>
            <li>Software Consulting</li>
            <li>Digital Solutions</li>
            <li>Technical Support and Maintenance</li>
          </ul>
          <p>
            <strong>Company Name:</strong> Codestroom
            <br />
            <strong>Website:</strong> <a href="https://www.codestroom.com">www.codestroom.com</a>
            <br />
            <strong>Email:</strong> <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>
          </p>

          <h2>2. Information We Collect</h2>
          <p>Depending on how you interact with us, we may collect the following information.</p>

          <h3>Information You Provide</h3>
          <p>
            When you contact us, request a quotation, submit an inquiry, register for an account, or use our services, we may
            collect:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone/mobile number</li>
            <li>Company or business name</li>
            <li>Address</li>
            <li>Project or service requirements</li>
            <li>Messages and inquiries</li>
            <li>Other information you voluntarily provide</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>When you visit our website, certain information may be collected automatically, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Date and time of visits</li>
            <li>Referring website</li>
            <li>General location information</li>
            <li>Website usage and interaction information</li>
          </ul>
          <p>
            This information may be collected through cookies, analytics tools, advertising technologies, and similar
            technologies.
          </p>

          <h2>3. Information Collected Through Advertisements</h2>
          <p>
            If you interact with a Codestroom advertisement on platforms such as Facebook, Instagram, Google, or other
            advertising platforms, we may receive information associated with your interaction with the advertisement.
          </p>
          <p>
            For example, when you submit a lead form or contact us after viewing an advertisement, we may receive information
            such as your name, phone number, email address, or other information that you choose to provide.
          </p>
          <p>We may use this information to:</p>
          <ul>
            <li>Respond to your inquiry</li>
            <li>Provide requested information</li>
            <li>Contact you regarding our services</li>
            <li>Provide quotations or proposals</li>
            <li>Understand customer requirements</li>
            <li>Improve our advertising and marketing campaigns</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar technologies to improve website functionality and understand how visitors
            use our website.
          </p>
          <p>Cookies may be used for:</p>
          <ul>
            <li>Website functionality</li>
            <li>Security</li>
            <li>Analytics</li>
            <li>Performance monitoring</li>
            <li>Remembering preferences</li>
            <li>Advertising and marketing</li>
            <li>Measuring advertising effectiveness</li>
          </ul>
          <p>
            You may control or disable cookies through your browser settings. Disabling certain cookies may affect some website
            functionality.
          </p>

          <h2>5. How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to inquiries and requests</li>
            <li>Provide quotations and project information</li>
            <li>Communicate with customers and potential customers</li>
            <li>Process service requests</li>
            <li>Provide technical support</li>
            <li>Maintain and improve our website and applications</li>
            <li>Understand how users interact with our services</li>
            <li>Conduct analytics and research</li>
            <li>Send service-related communications</li>
            <li>Send marketing communications where permitted</li>
            <li>Improve advertising campaigns</li>
            <li>Prevent fraud, misuse, and security threats</li>
            <li>Comply with applicable legal obligations</li>
          </ul>

          <h2>6. Mobile Applications</h2>
          <p>
            If you use a mobile application developed or operated by Codestroom, the application may collect information
            necessary to provide its functionality.
          </p>
          <p>Depending on the particular application, this may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Account/login information</li>
            <li>Device information</li>
            <li>Application usage information</li>
            <li>Location information, where required</li>
            <li>Photos or files, where required</li>
            <li>Camera or microphone access, where required</li>
            <li>Other device permissions necessary for specific application features</li>
          </ul>
          <p>The information collected by an individual application may vary depending on its purpose and features.</p>
          <p>
            Where an application requires access to device permissions, the application will request the relevant permission
            where applicable. You may manage permissions through your device settings.
          </p>

          <h2>7. Account and Login Information</h2>
          <p>
            If an application or service requires registration, you may be required to provide information such as your name,
            phone number, email address, or other account information.
          </p>
          <p>We use this information to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Authenticate users</li>
            <li>Provide requested services</li>
            <li>Maintain account security</li>
            <li>Communicate with you regarding your account</li>
          </ul>

          <h2>8. Third-Party Service Providers</h2>
          <p>
            We may use trusted third-party service providers to help operate our website, applications, infrastructure,
            analytics, communications, payment processing, advertising, and other services.
          </p>
          <p>These providers may include:</p>
          <ul>
            <li>Cloud hosting providers</li>
            <li>Analytics services</li>
            <li>Authentication providers</li>
            <li>Payment gateways</li>
            <li>SMS/OTP providers</li>
            <li>Email service providers</li>
            <li>Advertising platforms</li>
            <li>Customer relationship management systems</li>
            <li>Technical and security service providers</li>
          </ul>
          <p>
            These providers may process information on our behalf and are expected to handle information according to their
            applicable privacy policies and contractual obligations.
          </p>

          <h2>9. Payments</h2>
          <p>
            If you make a payment through one of our websites or applications, payment information may be processed by a
            third-party payment service provider.
          </p>
          <p>
            Codestroom does not intend to store complete payment card information such as your full credit/debit card number or
            CVV when payment processing is handled by a third-party payment provider.
          </p>
          <p>Payment providers process payment information according to their own privacy policies and security practices.</p>

          <h2>10. Data Sharing and Disclosure</h2>
          <p>We may share information when reasonably necessary with:</p>
          <ul>
            <li>Service providers working on our behalf</li>
            <li>Hosting and infrastructure providers</li>
            <li>Payment processors</li>
            <li>Analytics providers</li>
            <li>Advertising and marketing service providers</li>
            <li>Authentication and communication providers</li>
            <li>Professional advisors</li>
            <li>Government authorities or law enforcement when legally required</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>
          <p>
            We may disclose information where necessary to protect our rights, users, property, security, or to comply with
            applicable laws and legal processes.
          </p>

          <h2>11. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect personal information against unauthorized
            access, alteration, disclosure, loss, or misuse.
          </p>
          <p>
            However, no method of electronic transmission or storage is completely secure. Therefore, while we make reasonable
            efforts to protect your information, we cannot guarantee absolute security.
          </p>

          <h2>12. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy
            Policy, including providing services, maintaining business records, resolving disputes, preventing fraud, enforcing
            agreements, and complying with applicable legal requirements.
          </p>
          <p>
            When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable
            legal and operational requirements.
          </p>

          <h2>13. Children&rsquo;s Privacy</h2>
          <p>
            Our services are not intended to knowingly collect personal information from children where such collection is
            prohibited by applicable law.
          </p>
          <p>
            If you believe that a child has provided personal information to us without appropriate authorization, please
            contact us so that we can review and take appropriate action.
          </p>

          <h2>14. Third-Party Links</h2>
          <p>Our website or applications may contain links to third-party websites, applications, or services.</p>
          <p>
            We are not responsible for the privacy practices, content, security, or policies of third-party websites or
            services.
          </p>
          <p>We recommend reviewing the privacy policy of any third-party service before providing personal information.</p>

          <h2>15. Marketing Communications</h2>
          <p>
            If you provide your contact information to us through our website, advertisements, forms, applications, or other
            channels, we may contact you regarding your inquiry, requested services, quotations, updates, or other relevant
            business communications.
          </p>
          <p>
            Where required by applicable law, we will provide appropriate options to opt out of promotional communications.
          </p>
          <p>
            You may request to stop receiving marketing communications by contacting us at{' '}
            <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>.
          </p>

          <h2>16. Your Privacy Rights</h2>
          <p>
            Depending on your location and applicable law, you may have rights regarding your personal information, which may
            include:
          </p>
          <ul>
            <li>Requesting access to your personal information</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion of information where legally applicable</li>
            <li>Withdrawing consent where processing is based on consent</li>
            <li>Requesting information about how your data is processed</li>
            <li>Objecting to certain processing activities</li>
            <li>Requesting restriction of processing where applicable</li>
          </ul>
          <p>
            To exercise applicable rights, please contact us at{' '}
            <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>.
          </p>
          <p>We may need to verify your identity before processing certain requests.</p>

          <h2>17. International Data Transfers</h2>
          <p>
            Some of our service providers or technology infrastructure may process or store information in countries other
            than the country in which you reside.
          </p>
          <p>
            Where applicable, we take reasonable measures to ensure that personal information is handled in accordance with
            applicable privacy and data protection requirements.
          </p>

          <h2>18. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal
            requirements, or business practices.
          </p>
          <p>When we make changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this Privacy Policy.</p>
          <p>We encourage you to review this page periodically for the latest information about our privacy practices.</p>

          <h2>19. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
          <p>
            <strong>Codestroom</strong>
            <br />
            <strong>Website:</strong> <a href="https://www.codestroom.com">www.codestroom.com</a>
            <br />
            <strong>Email:</strong> <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>
          </p>

          <p className="legal-ack">
            <strong>By using our website, services, or applications, you acknowledge that you have read and understood this
            Privacy Policy.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
