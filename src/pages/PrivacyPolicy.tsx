import Layout from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="divider-gold mb-8" />
            <h1 className="font-serif text-4xl tracking-heading mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-elegant">
              <p>
                Anil Anand & Associates respects your privacy and is committed to 
                protecting any personal information you may provide through this website.
              </p>
              
              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Information Collection
              </h2>
              <p>
                We may collect personal information such as your name, email address, 
                phone number, and any other information you voluntarily provide through 
                our contact forms or direct communications.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Use of Information
              </h2>
              <p>
                Any information collected is used solely for the purpose of responding 
                to your inquiries and providing information about our services. We do not 
                sell, rent, or share your personal information with third parties.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal 
                information. However, no method of transmission over the internet is 
                completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Confidentiality
              </h2>
              <p>
                Information shared with us through this website should not be considered 
                confidential unless a formal lawyer-client relationship has been established. 
                Please refrain from sharing sensitive information until such relationship 
                is confirmed.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">
                Contact
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact us 
                through the information provided on our contact page.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
