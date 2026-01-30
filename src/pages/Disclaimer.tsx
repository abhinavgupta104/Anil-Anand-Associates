import Layout from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="divider-gold mb-8" />
            <h1 className="font-serif text-4xl tracking-heading mb-8">
              Disclaimer
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-elegant">
              <p>
                As per the rules of the Bar Council of India, law firms are not permitted 
                to solicit work or advertise. This website has been created solely for the 
                purpose of providing information about Anil Anand & Associates.
              </p>
              <p>
                By accessing this website, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The information provided on this website is for general informational 
                  purposes only and does not constitute legal advice.
                </li>
                <li>
                  No lawyer-client relationship is created merely by accessing this website 
                  or by sending any communication to us through this website.
                </li>
                <li>
                  The contents of this website should not be construed as legal advice on 
                  any specific matter.
                </li>
                <li>
                  You are accessing this website on your own initiative and have not been 
                  solicited in any manner.
                </li>
              </ul>
              <p>
                Any information sent to us through this website may not be treated as 
                confidential unless and until a formal engagement is established.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
