<template>
  <div>
    <hero />
    <key-investment />
    <site />
    <about/>
    <contacts/>
  </div>
</template>

<script>
import About from '~/components/Sectionss/About.vue'
import Contacts from '~/components/Sectionss/Contacts.vue'
import Hero from '~/components/Sectionss/Hero.vue'
import KeyInvestment from '~/components/Sectionss/KeyInvestment.vue'
import Site from '~/components/Sectionss/Site.vue'
export default {
  components: { Hero, KeyInvestment, Site, Contacts, About },
  name: 'IndexPage',
  head: {
    title: 'RHC',
  },
}
</script>
