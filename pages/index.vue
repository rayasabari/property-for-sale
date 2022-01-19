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
