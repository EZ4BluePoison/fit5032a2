import sgMail from '@sendgrid/mail'

sgMail.setApiKey('YOUR_SENDGRID_API_KEY')

const sendEmail = async (recipientEmail, subject, text, attachment) => {
  const msg = {
    to: recipientEmail,
    from: 'your-email@example.com',
    subject: subject,
    text: text,
    attachments: [
      {
        content: attachment.content, // Base64 encoded content
        filename: attachment.filename,
        type: attachment.type,
        disposition: 'attachment'
      }
    ]
  }

  try {
    await sgMail.send(msg)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

// Example usage
sendEmail('652857323@qq.com', 'Test Email', 'Hello, this is a test email with an attachment', {
  content: 'BASE64_ENCODED_CONTENT',
  filename: 'test.pdf',
  type: 'application/pdf'
})
