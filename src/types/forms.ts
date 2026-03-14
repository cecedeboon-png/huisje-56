import { z } from 'zod'

export const inquirySchema = z.object({
  name: z.string().min(2, 'Naam is verplicht').max(100),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().optional(),
  arrivalDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Ongeldige datum'),
  departureDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Ongeldige datum'),
  guests: z.coerce.number().int().min(1).max(10),
  message: z.string().max(1000).optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht').max(100),
  email: z.string().email('Ongeldig e-mailadres'),
  subject: z.string().min(3).max(200),
  message: z.string().min(10, 'Bericht is te kort').max(2000),
})

export type InquiryFormData = z.infer<typeof inquirySchema>
export type ContactFormData = z.infer<typeof contactSchema>
