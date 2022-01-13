<template>
  <header
    :class="navColor"
    class="flex flex-col lg:flex-row z-40 items-center shadow-lg text-xl lg:text-base justify-between lg:justify-center font-medium backdrop-blur-2xl transition duration-500 h-12 lg:h-16 fixed px-5 w-full"
  >
    <nav
      :class="!open ? 'hidden' : 'bg-white'"
      class="lg:flex flex flex-col items-center justify-center absolute lg:static w-full lg:w-auto h-screen lg:h-auto transition duration-500"
    >
      <ul class="flex flex-col lg:flex-row items-center justify-center">
        <li
          :class="textColor"
          class="px-3 py-3 lg:py-0"
          v-for="(l, idx) in link"
          :key="idx"
          @click="active(l.to)"
        >
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
    <div class="flex items-center h-full justify-between w-full lg:hidden">
      <div :class="textColor" class="lg:hidden">RHC Logo</div>
      <button @click="menuClick" :class="textColor" class="block lg:hidden z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!open"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </header>
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
      navColorSm: '',
      activeColor: 'text-white',
      textHover: 'text-white',
      isActive: '#hero',
      scrollPosition: null,
      open: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    active(to) {
      this.isActive = to
      this.open = false
    },
    menuClick() {
      this.open = !this.open
      this.textColor = 'text-gray-400'
      this.textHover = 'text-blue-700'
      this.navColorSm = 'bg-white'
      this.activeColor = 'text-blue-700'
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition < 100) {
        this.textColor = 'text-gray-400 lg:text-white lg:text-opacity-50'
        this.textHover = 'text-blue-700 lg;text-white'
        this.navColor = 'bg-transparent'
        this.activeColor = 'text-blue-700 lg:text-white'
      } else {
        this.textColor = 'text-gray-400'
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