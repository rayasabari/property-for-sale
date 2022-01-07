<template>
  <div>
    <hero/>
    <development/>
    <key-investment/>
    <site/>
    <contacts/>
  </div>
</template>

<script>
import Contacts from '~/components/Sectionss/Contacts.vue'
import Development from '~/components/Sectionss/Development.vue'
import Hero from '~/components/Sectionss/Hero.vue'
import KeyInvestment from '~/components/Sectionss/KeyInvestment.vue'
import Site from '~/components/Sectionss/Site.vue'
export default {
  components: { Hero, Development, KeyInvestment, Site, Contacts },
  name: 'IndexPage',
  head: {
    title: 'RHC',
  },
}
</script>
