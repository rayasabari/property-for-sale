<template>
  <nav
    :class="navColor"
    class="flex z-40 items-center shadow-lg text-base justify-center font-medium backdrop-blur-2xl transition duration-500 h-16 fixed px-5 w-full"
  >
    <ul class="flex items-center justify-center" :class="textColor">
      <li class="px-3" v-for="(l, idx) in link" :key="idx" @click="active(l.to)">
        <rhc-link
          :textColor="textColor"
          :textHover="textHover"
          :activeColor="activeColor"
          :active="l.to == isActive"
          :to="l.to"
        >{{l.section}}</rhc-link>
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
      textColor: 'text-white text-opacity-50',
      navColor: '',
      activeColor: 'text-white',
      textHover: 'text-white',
      isActive: '#hero',
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    active(to) {
      this.isActive = to
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition < 100) {
        this.textColor = 'text-white text-opacity-50'
        this.textHover = 'text-white'
        this.navColor = 'bg-transparent'
        this.activeColor = 'text-white'
      } else {
        this.textColor = 'text-gray-500'
        this.textHover = 'text-blue-700'
        this.navColor = 'bg-white'
        this.activeColor = 'text-blue-700'
      }
    },
  },
}
</script>

<style>
</style>