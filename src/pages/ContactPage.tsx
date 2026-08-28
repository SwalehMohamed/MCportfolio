import { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/config/site';

interface ContactPageProps {
  onNavigate: (route: string) => void;
}

const interestAreas = [
  'DIALS',
  'PMFS',
  'ESMS',
  'MCRF',
  'General Digital Transformation',
  'Other',
];

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission — integrate with a backend or email service when available
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              Contact
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              For inquiries about the Mombasa County Government Digital Transformation Sub-Department or
              any of our digital platforms, please reach out using the contact details below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact details */}
            <div className="reveal">
              <div className="eyebrow text-secondary-600">
                <span className="h-px w-6 bg-current opacity-50" />
                Official Contact
              </div>
              <h2 className="mt-4 text-title font-bold text-primary-900">
                Mombasa County Government
              </h2>
              <p className="mt-2 text-sm text-neutral-500">Digital Transformation Sub-Department</p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: siteConfig.contact.email },
                  { icon: Phone, label: 'Phone', value: siteConfig.contact.phone },
                  { icon: Globe, label: 'Website', value: siteConfig.contact.website },
                  { icon: MapPin, label: 'Office', value: siteConfig.contact.address },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-neutral-400">{item.label}</div>
                        <div className="mt-0.5 text-sm font-semibold text-primary-900">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-xl border border-accent-200 bg-accent-50 p-4">
                <p className="text-xs font-medium text-accent-800">
                  Contact details shown are placeholders. Official contact information will be inserted when
                  available.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="reveal">
              <div className="card p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-primary-900">Inquiry Submitted</h3>
                    <p className="mt-2 max-w-sm text-sm text-neutral-500">
                      Thank you for your interest in the Mombasa County Government Digital Transformation
                      Sub-Department. We will respond to your inquiry in due course.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', organisation: '', email: '', phone: '', interest: '', message: '' });
                      }}
                      className="mt-6 btn-secondary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-primary-900">Send an Inquiry</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Fill in the form below and we will get back to you.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          label="Name"
                          required
                          value={formState.name}
                          onChange={(v) => handleChange('name', v)}
                          placeholder="Your full name"
                        />
                        <FormField
                          label="Organisation"
                          value={formState.organisation}
                          onChange={(v) => handleChange('organisation', v)}
                          placeholder="Your organisation"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          label="Email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(v) => handleChange('email', v)}
                          placeholder="your@email.com"
                        />
                        <FormField
                          label="Phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(v) => handleChange('phone', v)}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-primary-900">
                          Area of Interest <span className="text-error">*</span>
                        </label>
                        <select
                          required
                          value={formState.interest}
                          onChange={(e) => handleChange('interest', e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        >
                          <option value="">Select an area of interest</option>
                          {interestAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-primary-900">
                          Message <span className="text-error">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Your message or inquiry"
                          className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        <Send className="h-4 w-4" />
                        Submit Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 py-20">
        <div className="container-app text-center">
          <div className="flex items-center justify-center gap-2 text-accent-300 reveal">
            <Building2 className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Explore Further</span>
          </div>
          <h2 className="mt-4 text-headline font-bold text-white text-balance reveal">
            Discover Our Digital Transformation Work
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-accent">
              Explore Solutions
            </button>
            <button onClick={() => onNavigate('/brochure')} className="btn-ghost border border-white/20 hover:bg-white/10">
              View Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function FormField({ label, value, onChange, placeholder, type = 'text', required = false }: FormFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-primary-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
      />
    </div>
  );
}
