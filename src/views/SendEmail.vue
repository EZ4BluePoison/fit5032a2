<!-- SendEmail.vue -->
<template>
  <div>
    <h2>Send Email with Attachment</h2>
    <input v-model="email" placeholder="Recipient Email" />
    <input v-model="subject" placeholder="Subject" />
    <textarea v-model="message" placeholder="Message"></textarea>
    <input type="file" @change="onFileChange" />
    <button @click="sendEmail">Send Email</button>
  </div>
</template>

<script>
import { sendEmailWithAttachment } from '@/utils/sendGrid'

export default {
  data() {
    return {
      email: '',
      subject: '',
      message: '',
      attachment: null
    }
  },
  methods: {
    onFileChange(event) {
      this.attachment = event.target.files[0]
    },
    sendEmail() {
      sendEmailWithAttachment(this.email, this.subject, this.message, this.attachment)
    }
  }
}
</script>
