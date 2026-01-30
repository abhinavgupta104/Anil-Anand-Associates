import Layout from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';

const TermsOfUse = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="divider-gold mb-8" />
            <h1 className="font-serif text-4xl tracking-heading mb-8">
              Terms of Use
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-elegant">
              <p>
                By accessing and using this website, you agree to be bound by these 
                Terms of Use and all applicable laws and regulations.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Use of Website
              </h2>
              <p>
                This website is provided for informational purposes only. The content 
                on this website does not constitute legal advice and should not be 
                relied upon as such.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                No Lawyer-Client Relationship
              </h2>
              <p>
                Accessing this website or communicating with the firm through this 
                website does not create a lawyer-client relationship. Such a relationship 
                can only be established through a formal written engagement.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, and logos, is the 
                property of Anil Anand & Associates and is protected by intellectual 
                property laws. You may not reproduce, distribute, or use any content 
                without prior written permission.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                The firm shall not be liable for any damages arising from the use of or 
                inability to use this website or from any information provided herein.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Governing Law
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with 
                the laws of India. Any disputes arising from the use of this website shall 
                be subject to the exclusive jurisdiction of the courts in New Delhi.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Modifications
              </h2>
              <p>
                We reserve the right to modify these Terms of Use at any time without 
                prior notice. Your continued use of the website constitutes acceptance 
                of any modifications.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfUse;
