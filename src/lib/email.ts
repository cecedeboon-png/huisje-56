import { Resend } from 'resend'
import type { InquiryFormData, ContactFormData } from '@/types/forms'

const resend = new Resend(process.env.RESEND_API_KEY)
const ownerEmail = process.env.OWNER_EMAIL ?? 'liuwedaem56@gmail.com'
// Use Resend's default sender until you verify your own domain (huisje56.nl)
// To use a custom domain, go to resend.com → Domains → Add Domain → follow DNS instructions
const fromAddress = process.env.RESEND_FROM ?? 'Huisje 56 <onboarding@resend.dev>'

export async function sendInquiryEmail(data: InquiryFormData): Promise<void> {
  const nightsCount = Math.round(
    (new Date(data.departureDate).getTime() - new Date(data.arrivalDate).getTime()) /
      (1000 * 60 * 60 * 24)
  )

  await resend.emails.send({
    from: fromAddress,
    to: ownerEmail,
    replyTo: data.email,
    subject: `Boekingsaanvraag Huisje 56 — ${data.name} | ${formatDate(data.arrivalDate)} – ${formatDate(data.departureDate)}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F8F6F2;">
        <h1 style="color: #1B3A5C; font-size: 24px; margin-bottom: 8px;">Nieuwe boekingsaanvraag</h1>
        <p style="color: #666; margin-bottom: 32px;">Huisje 56 — Recreatiepark de Liuwe Daem, Gaastmeer</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666; width: 40%;">Naam</td>
            <td style="padding: 12px 0; color: #2D2D2D; font-weight: 600;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">E-mail</td>
            <td style="padding: 12px 0; color: #2D2D2D;"><a href="mailto:${data.email}" style="color: #1B3A5C;">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr style="border-bottom: 1px solid #E5E5E5;"><td style="padding: 12px 0; color: #666;">Telefoon</td><td style="padding: 12px 0; color: #2D2D2D;">${data.phone}</td></tr>` : ''}
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">Aankomst</td>
            <td style="padding: 12px 0; color: #2D2D2D; font-weight: 600;">${formatDate(data.arrivalDate)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">Vertrek</td>
            <td style="padding: 12px 0; color: #2D2D2D; font-weight: 600;">${formatDate(data.departureDate)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">Aantal nachten</td>
            <td style="padding: 12px 0; color: #2D2D2D;">${nightsCount} nachten</td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">Aantal gasten</td>
            <td style="padding: 12px 0; color: #2D2D2D;">${data.guests} personen</td>
          </tr>
          ${data.message ? `<tr><td style="padding: 12px 0; color: #666; vertical-align: top;">Bericht</td><td style="padding: 12px 0; color: #2D2D2D;">${data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>

        <div style="margin-top: 32px; padding: 16px; background: #1B3A5C; border-radius: 8px; text-align: center;">
          <a href="mailto:${data.email}?subject=Bevestiging boekingsaanvraag Huisje 56"
             style="color: white; text-decoration: none; font-size: 16px; font-weight: 600;">
            Antwoord aan ${data.name} →
          </a>
        </div>
      </div>
    `,
  })
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await resend.emails.send({
    from: fromAddress,
    to: ownerEmail,
    replyTo: data.email,
    subject: `Contactbericht Huisje 56 — ${data.name}: ${data.subject}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F8F6F2;">
        <h1 style="color: #1B3A5C; font-size: 24px; margin-bottom: 8px;">Contactbericht</h1>
        <p style="color: #666; margin-bottom: 32px;">Huisje 56 — Recreatiepark de Liuwe Daem, Gaastmeer</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666; width: 40%;">Naam</td>
            <td style="padding: 12px 0; color: #2D2D2D; font-weight: 600;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">E-mail</td>
            <td style="padding: 12px 0; color: #2D2D2D;"><a href="mailto:${data.email}" style="color: #1B3A5C;">${data.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #E5E5E5;">
            <td style="padding: 12px 0; color: #666;">Onderwerp</td>
            <td style="padding: 12px 0; color: #2D2D2D;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #666; vertical-align: top;">Bericht</td>
            <td style="padding: 12px 0; color: #2D2D2D;">${data.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>

        <div style="margin-top: 32px; padding: 16px; background: #1B3A5C; border-radius: 8px; text-align: center;">
          <a href="mailto:${data.email}?subject=Re: ${data.subject}"
             style="color: white; text-decoration: none; font-size: 16px; font-weight: 600;">
            Antwoord aan ${data.name} →
          </a>
        </div>
      </div>
    `,
  })
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('nl-NL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
