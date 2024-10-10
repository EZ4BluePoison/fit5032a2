<template>
  <div>
    <!-- Header with Navigation -->
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/personalized-content">Personalized Content</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/resources">Resource Center</router-link>
        <router-link to="/FireLogin">Firebase Login</router-link>
      </nav>
    </header>

    <!-- Main Content (Privacy Policy) -->
    <main>
      <h2>Privacy Policy & Terms</h2>
      <p>We value your privacy. Please review our policies.</p>

      <p>
        1.The protection of users' personal information is one of our basic principles, and this
        website will collect, use, store and share your personal information in accordance with the
        provisions of this Agreement. Where there are no clear provisions in this Agreement
        regarding the protection of personal information, local laws and regulations shall prevail.
      </p>
      <p>
        2.You may need to fill in some necessary information in the process of registering an
        account or using the Service. If the national laws and regulations (" laws and regulations
        "in this Agreement refers to the user's/region, the country's current and effective laws,
        administrative regulations, judicial interpretations, local regulations, local rules,
        departmental rules and other normative documents, as well as the amendment and supplement of
        such laws and regulations from time to time, as well as relevant policies and regulations,
        etc., the same applies below.) If there are special provisions, you need to fill in the real
        identity information (including but not limited to mobile phone number and other
        information). If the information you fill in is incomplete or untrue, you may not be able to
        use the Service or may be restricted in your use.
      </p>
      <p>
        3.Under normal circumstances, you can browse and modify the information submitted by
        yourself according to the relevant product rules, but for security and identification (such
        as number retrieval, etc.) considerations, you may not be able to modify the initial
        registration information and other verification information provided during registration.
      </p>
      <p>
        4.In order to increase the entertainment of users' use of the Service, promote communication
        and exchange among users, and improve and optimize the corresponding services, we will use
        your nickname, avatar, and related operations in the software, etc. Information about you
        may also be displayed to you and other users through other services on this website or
        services provided by third parties (such as synchronizing your avatar, nickname, gender,
        region, friend relationship, etc.). If you refuse to provide the above information to us or
        third parties, you may modify it in the various software and services provided by us or
        third parties. However, you understand and agree that your above modification does not
        affect our previous use of your personal information based on your consent.
      </p>
      <p>
        5.We will use a variety of security technologies and procedures to establish a sound
        management system to protect your personal information from unauthorized access, use or
        disclosure.
      </p>
      <p>
        6.We will not transfer or disclose your personal information to any third party unless:
        <br />(1) Relevant laws and regulations or requirements of judicial and administrative
        organs; or <br />(2) for the purpose of completing a merger, division, acquisition or
        transfer of assets; or <br />(3) Necessary to provide the service you have requested.
      </p>
      <p>
        7.When you use this website to communicate with other software or hardware, you may ask us
        to transfer your relevant information on this website to other software or hardware
        providers, and you should fully understand the product functions and information protection
        policies of other software or hardware before making the above choice.
      </p>
      <p>
        8.We attach great importance to the protection of minors' personal information. If you do
        not have full capacity for civil conduct, you should obtain the consent of your guardian
        before using the Service.
      </p>
    </main>

    <!-- Footer -->
    <footer>
      <p>
        &copy; If you need any help, please contact
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'zhee0056@student.monash.edu' // 添加 email 数据
    }
  }
}
</script>

<style scoped>
/* Header and Navigation Styles */
header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}

/* Privacy Policy Styles */
h2 {
  color: #c0392b;
}

main {
  padding: 20px;
  line-height: 1.6;
}

/* Footer Styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
