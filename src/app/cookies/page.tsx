import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | MEGAS TECH INC',
  description: 'Learn about how we use cookies and similar technologies on our website.',
};

export default function CookiePolicy() {
  const lastUpdated = '2025-07-07';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">1. What Are Cookies</h2>
              <p className="mb-3">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
              <p className="mb-3">We use different types of cookies for various purposes:</p>
              
              <h3 className="text-lg font-semibold mt-3 mb-2">Essential Cookies</h3>
              <p className="mb-3">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.
              </p>
              
              <h3 className="text-lg font-semibold mt-3 mb-2">Analytics Cookies</h3>
              <p className="mb-3">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
              </p>
              
              <h3 className="text-lg font-semibold mt-3 mb-2">Functional Cookies</h3>
              <p className="mb-3">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              
              <h3 className="text-lg font-semibold mt-3 mb-2">Targeting Cookies</h3>
              <p className="mb-3">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">3. Third-Party Cookies</h2>
              <p className="mb-3">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These cookies may be used when you share information using a social media sharing button on our site.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">4. Managing Cookies</h2>
              <p className="mb-3">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <p className="mb-3">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{' '}
                <Link href="https://www.aboutcookies.org/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  www.aboutcookies.org
                </Link>
                {' '}or{' '}
                <Link href="https://www.allaboutcookies.org/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  www.allaboutcookies.org
                </Link>.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">5. Changes to This Cookie Policy</h2>
              <p className="mb-3">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date at the top of this Cookie Policy.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Cookie Policy, please contact us at{' '}
                <Link href="mailto:privacy@megastech.inc" className="text-accent hover:underline">
                  privacy@megastech.inc
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
