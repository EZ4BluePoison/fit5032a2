import express from 'express'
import bodyParser from 'body-parser'
import sgMail from '@sendgrid/mail'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// 使用 __dirname 替代方案，因为 ES 模块没有 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 加载自定义路径的 .env 文件
dotenv.config({ path: path.join(__dirname, '../sendgrid.env') })

// 确认环境变量是否正确加载
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY)

// 设置 SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
