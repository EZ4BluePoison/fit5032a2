import express from 'express'
import bodyParser from 'body-parser'
import sgMail from '@sendgrid/mail'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

sgMail.setApiKey('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')

const app = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(cors())

app.post('/send-email', async (req, res) => {
  const { to, subject, text, attachment } = req.body

  const msg = {
    to: to,
    from: '652857323@qq.com',
    subject: subject,
    text: text,
    attachments: [
      {
        content: attachment.content,
        filename: attachment.filename,
        type: attachment.type,
        disposition: 'attachment'
      }
    ]
  }

  try {
    console.log('Sending email with SendGrid...')
    const response = await sgMail.send(msg)
    console.log('Email sent successfully:', response)
    res.status(200).send('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error)
    res.status(500).send('Failed to send email')
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
