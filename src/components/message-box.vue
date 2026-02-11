<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const sendMessage = () => {
  emailjs.send(
    'service_5etgb9d',
    'template_8zez5co',
    {
      from_name: name.value,
      from_email: email.value,
      message: message.value
    },
    '8vKUa65NaF6AwJFVt'
  ).then(() => {
    alert("Message sent!")
  }).catch(() => {
    alert("Failed to send")
  })
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="Your Name" />
    <input v-model="email" placeholder="Your Email" />
    <textarea v-model="message" placeholder="Message"></textarea>

    <button @click="sendMessage">Send</button>
  </div>
</template>
