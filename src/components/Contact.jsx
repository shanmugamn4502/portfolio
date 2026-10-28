import { useState } from 'react'
import { profile } from '../data'
import { SocialIcon, PinIcon } from './icons'

const SOCIAL_KEYS = ['github', 'linkedin', 'whatsapp']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Project enquiry from ${form.name}`
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const socials = SOCIAL_KEYS.filter(
    (key) => profile.socials[key] && profile.socials[key] !== '#'
  )

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">Get in touch</span>
        </div>
        <h2 className="h2 mt-5 max-w-3xl">
          Let&rsquo;s build something worth talking about.
        </h2>
        <p className="lead mt-5 max-w-2xl">
          Have a project in mind or just want to say hello? I&rsquo;d love to hear
          about it. I&rsquo;m available for freelance work and reply to every
          message within 24 hours.
        </p>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6">
          {/* LEFT — contact details */}
          <div className="card card-hover p-6">
            <p className="eyebrow">Contact details</p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--accent)' }}>
                  <SocialIcon kind="email" size={17} />
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[13px]"
                  style={{ color: 'var(--accent)' }}
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5" style={{ color: 'var(--ink-faint)' }}>
                  <PinIcon size={17} />
                </span>
                <span className="text-[13px]" style={{ color: 'var(--ink-soft)' }}>
                  {profile.location}
                </span>
              </div>
            </div>

            {socials.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {socials.map((key) => (
                  <a
                    key={key}
                    href={profile.socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                    style={{
                      border: '1px solid var(--line)',
                      background: 'var(--bg)',
                      color: 'var(--ink-soft)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-soft)')}
                  >
                    <SocialIcon kind={key} size={17} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — contact form */}
          <div className="card mt-4 p-6 lg:mt-0">
            <p className="eyebrow">Send me a message</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-2.5">
              <input
                className="field"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="field"
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="field"
                name="message"
                rows={5}
                placeholder="Tell me a little about your project…"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn w-full">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
