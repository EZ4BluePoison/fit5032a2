<template>
  <div>
    <h2>Help</h2>
    <p>If you need assistance, please contact our support team.</p>
    <!-- Email link -->
    <p>
      Email: <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
    <br />
    <!-- Phone number links -->
    <p>
      Phonenumber:<br />
      <a :href="`tel:${phone1}`">{{ phone1 }}</a
      ><br />
      <a :href="`tel:${phone2}`">{{ phone2 }}</a>
    </p>
  </div>
</template>

<script setup>
const email = 'zhee0056@student.monash.edu'
const phone1 = '+86 18015316517'
const phone2 = '+61 472778808'
</script>

<style scoped>
h2 {
  color: #27ae60;
}
</style>
