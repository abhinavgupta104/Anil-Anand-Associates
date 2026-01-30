import { useState } from 'react';
import Layout from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your actual WhatsApp number (include country code, e.g., 91 for India)
    const whatsappNumber = "919873785477"; 
    
    const subjectMap: Record<string, string> = {
      '': '❓ Not Specified',
      general: '💡 General Inquiry',
      corporate: '🏢 Corporate & Commercial',
      civil: '⚖️ Civil Litigation',
      criminal: '🚔 Criminal Matters',
      family: '👨‍👩‍👧‍👦 Family Law',
      other: '🔖 Other'
    };
    const subjectLabel = subjectMap[formData.subject] || formData.subject;
    
    const message = `⚖️ *LEGAL ENQUIRY RECEIVED*
────────────────────
📅 *Date:* ${new Date().toLocaleDateString()}
⏰ *Time:* ${new Date().toLocaleTimeString()}
────────────────────

👤 *CLIENT INFORMATION*
• *Name:* ${formData.name}
• *Contact:* ${formData.phone}
• *Email:* ${formData.email}

 *CASE DETAILS*
• *Category:* ${subjectLabel}

💬 *MESSAGE*
"${formData.message}"

────────────────────
🔗 *Source:* Official Website`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="divider-gold mx-auto mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl tracking-heading mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-elegant max-w-2xl mx-auto">
              We are available to discuss your legal requirements and provide guidance 
              on how we may assist.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <div className="divider-gold mb-8" />
                  <h2 className="font-serif text-2xl tracking-heading mb-6">
                    Office Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Chamber No. 2, Ground Floor<br />
                        District Court Complex, RDC<br />
                        Rajnagar, Ghaziabad<br />
                        Uttar Pradesh – 201002, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        +91 9873785477
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        anilanand2008@yahoo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday – Saturday: 10:00 AM – 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 aspect-video bg-secondary rounded-sm flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Map Location</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-sm p-8 md:p-10">
                <h2 className="font-serif text-2xl tracking-heading mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Please provide your details and we will respond at the earliest.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="divider-gold mx-auto mb-6" />
                    <h3 className="font-serif text-xl mb-2">Thank You</h3>
                    <p className="text-muted-foreground text-sm">
                      Your message has been received. We will respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="corporate">Corporate & Commercial</option>
                        <option value="civil">Civil Litigation</option>
                        <option value="criminal">Criminal Matters</option>
                        <option value="family">Family Law</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary rounded-sm w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you acknowledge that this does not create 
                      a lawyer-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
