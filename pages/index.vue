<template>
  <div>
    <hero />
    <key-investment />
    <site />
    <about />
    <contacts @sendToFloating="sendToFloat"/>
    <rhc-floating :contacts="contacts" />
  </div>
</template>

<script>
import RhcFloating from '~/components/Partials/RhcFloating.vue'
import About from '~/components/Sectionss/About.vue'
import Contacts from '~/components/Sectionss/Contacts.vue'
import Hero from '~/components/Sectionss/Hero.vue'
import KeyInvestment from '~/components/Sectionss/KeyInvestment.vue'
import Site from '~/components/Sectionss/Site.vue'
export default {
  components: { Hero, KeyInvestment, Site, Contacts, About, RhcFloating },
  name: 'IndexPage',
  head: {
    title: 'Property For Sale',
  },
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    sendToFloat(data) {
      this.contacts = data;
    },
  },
}
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-217719492-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-217719492-1');
</script>
