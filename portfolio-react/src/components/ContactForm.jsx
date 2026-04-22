import { useState, useRef } from 'react';

// ── Replace with your Formspree endpoint ID ──
// Sign up free at https://formspree.io, create a form, and paste the ID here.
const FORMSPREE_ID = 'xeevryaq';

const initialFields = {
  name: '',
  email: '',
  company: '',
  message: '',
  consent: false,
};

function validate(fields) {
  const errors = {};
  if (!fields.name.trim() || fields.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.';
  if (!fields.message.trim() || fields.message.trim().length < 30) errors.message = 'Please include at least 30 characters about your project.';
  if (!fields.consent) errors.consent = "Please confirm you're okay with being contacted.";
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef(null);

  const set = (name, value) => {
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstKey = Object.keys(errs)[0];
      formRef.current?.querySelector(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          company: fields.company,
          message: fields.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFields(initialFields);
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form" style={{ display: 'grid', gap: '0.75rem', alignContent: 'center' }}>
        <p className="eyebrow">Message sent</p>
        <p style={{ color: 'var(--text)', fontSize: '1.1rem' }}>
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => setStatus('idle')}
          style={{ justifySelf: 'start', marginTop: '0.5rem' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" ref={formRef} noValidate onSubmit={handleSubmit}>
      <div className="form-row two-up">
        <div className={`form-field${errors.name ? ' has-error' : ''}`}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} value={fields.name} onChange={(e) => set('name', e.target.value)} />
          <p className="field-hint">Please enter your full name.</p>
          <p className="field-error" aria-live="polite">{errors.name || ''}</p>
        </div>
        <div className={`form-field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={120} value={fields.email} onChange={(e) => set('email', e.target.value)} />
          <p className="field-hint">I'll use this to reply.</p>
          <p className="field-error" aria-live="polite">{errors.email || ''}</p>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="company">Company or team</label>
          <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} value={fields.company} onChange={(e) => set('company', e.target.value)} />
          <p className="field-hint">Optional, but helpful for context.</p>
        </div>
      </div>

      <div className="form-row">
        <div className={`form-field${errors.message ? ' has-error' : ''}`}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            minLength={30}
            maxLength={1200}
            value={fields.message}
            onChange={(e) => { set('message', e.target.value); setCharCount(e.target.value.length); }}
          />
          <div className="field-meta-row">
            <p className="field-hint">What are you looking for help with?</p>
            <p className="field-counter"><span>{charCount}</span>/1200</p>
          </div>
          <p className="field-error" aria-live="polite">{errors.message || ''}</p>
        </div>
      </div>

      <div className="form-row">
        <label className="checkbox-field" htmlFor="consent">
          <input id="consent" name="consent" type="checkbox" required checked={fields.consent} onChange={(e) => set('consent', e.target.checked)} />
          <span>I'm okay with being contacted in response to this message.</span>
        </label>
        <p className="field-error" aria-live="polite">{errors.consent || ''}</p>
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send inquiry'}
        </button>
        {status === 'error' && <p className="form-status" style={{ color: '#f87171' }}>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
