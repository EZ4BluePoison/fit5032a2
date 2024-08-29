<template>
  <div>
    <h2>Resources Center</h2>
    <p>Find articles, guides, and FAQs about mental health.</p>
    <!-- Example of static content, replace with dynamic content as needed -->
    <ul>
      <li><router-link to="/faq">FAQ</router-link></li>
      <li><router-link to="/guides">Guides</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #8e44ad;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
