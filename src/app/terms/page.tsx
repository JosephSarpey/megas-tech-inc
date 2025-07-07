import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | MEGAS TECH INC',
  description: 'Terms and conditions governing the use of our website and services.',
};

export default function TermsOfService() {
  const effectiveDate = '2025-07-07';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-600">Effective: {effectiveDate}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="mb-3">
                By accessing and using the MEGAS TECH INC website and services, you accept and agree to be bound by the terms and conditions set forth in this agreement. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
              <p className="mb-3">
                MEGAS TECH INC provides technology solutions including but not limited to web development, UI/UX design, and technical consulting services. The services are provided &quot;as is&quot; and MEGAS TECH INC assumes no responsibility for the timeliness, deletion, or failure to store any user communications or personalization settings.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
              <p className="mb-3">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Provide accurate and complete information when registering for our services</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not engage in any activity that interferes with or disrupts the services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
              <p className="mb-3">
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of MEGAS TECH INC or its content suppliers and protected by international copyright laws.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
              <p className="mb-3">
                MEGAS TECH INC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Any other matter relating to the services</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
              <p className="mb-3">
                We may terminate or suspend your account and bar access to the services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
              <p className="mb-3">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the &quot;Effective Date&quot; at the top of these Terms.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
              <p className="mb-3">
                If you have any questions about these Terms, please contact us at{' '}
                <Link href="mailto:legal@megastech.inc" className="text-accent hover:underline">
                  legal@megastech.inc
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
