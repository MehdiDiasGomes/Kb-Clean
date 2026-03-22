import { Resend } from 'resend'

import { generateContactEmailHtml } from '@/templates/email/contactEmail'

type ContactFormData = {
  lastName: string
  email: string
  companyName?: string
  requestType: string
  message: string
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const body = await readBody<ContactFormData>(event)

  if (!body.lastName || !body.email || !body.requestType || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  const emailRegex = /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  try {
    const resend = new Resend(config.resendApiKey)

    const requestTypeLabels: Record<string, { fr: string; en: string }> = {
      demo: { fr: 'Démonstration', en: 'Demo' },
      callback: { fr: 'Rappel téléphonique', en: 'Callback' },
      quote: { fr: 'Devis', en: 'Quote' },
    }

    const requestTypeLabel = requestTypeLabels[body.requestType]?.fr || body.requestType

    const emailHtml = generateContactEmailHtml({
      lastName: body.lastName,
      email: body.email,
      companyName: body.companyName,
      requestTypeLabel,
      message: body.message,
    })

    const { data, error } = await resend.emails.send({
      from: 'BINOVYA Contact <contact@dg-zenith.com>',
      to: [config.contactEmailTo],
      subject: `Nouveau contact: ${requestTypeLabel} - ${body.lastName}`,
      html: emailHtml,
      replyTo: body.email,
    })

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email',
        data: error,
      })
    }

    return {
      success: true,
      messageId: data?.id,
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error',
      cause: err,
    })
  }
})
