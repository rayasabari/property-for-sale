<template>
  <nav
    class="flex z-40 items-center shadow-xl text-base justify-center font-medium backdrop-blur-md bg-white bg-opacity-80 h-16 fixed px-5 w-full"
  >
    <ul class="flex items-center justify-center">
      <li class="px-3" v-for="(l, idx) in link" :key="idx"  @click="active(l.to)">
        <rhc-link :active="l.to == activeClass" :to="l.to">{{l.section}}</rhc-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import RhcLink from './Partials/RhcLink.vue'
export default {
  components: { RhcLink },
  name: 'NavbarComponent',
  data() {
    return {
      link: [
        { to: '#hero', section: 'Home' },
        { to: '#development', section: 'Development Site' },
        { to: '#keyinvestment', section: 'Key Investment Highlight' },
        { to: '#site', section: 'Site' },
        { to: '#contacts', section: 'Contacs' },
      ],
      activeClass: '#hero'
    }
  },
  methods: {
    active(to){
      this.activeClass = to;
    }
  }
}
</script>

<style>
</style>