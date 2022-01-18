<template>
  <header
    class="flex bg-white z-40 bg-opacity-90 items-center justify-center shadow-sm text-xl lg:text-base font-medium backdrop-blur-sm transition duration-500 h-12 lg:h-16 fixed w-full"
  >
    <div class="flex flex-col items-center lg:flex-row-reverse w-11/12 lg:w-10/12">
      <nav
        :class="!open ? 'hidden' : 'bg-white -mt-2 lg:mt-0'"
        class="lg:block flex flex-col items-center justify-center absolute lg:static w-full h-screen lg:h-auto transition duration-500"
      >
        <ul
          class="flex flex-col lg:flex-row lg:space-x-2 items-center justify-center text-center lg:justify-end"
        >
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
      <div class="flex items-center h-full justify-between w-full lg:w-auto">
        <rhc-link to="#hero" class="w-60 text-xl font-bold text-orange-400 hover:text-orange-500 transition duration-300">Hotel For Sale</rhc-link>
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
        { to: '#keyinvestment', section: 'Key Investment Highlight' },
        { to: '#about', section: 'About Us' },
        { to: '#contacts', section: 'Contact Us' },
      ],
      textColor: 'text-gray-500',
      navColor: 'bg-white',
      navColorSm: '',
      activeColor: 'text-orange-500',
      textHover: 'text-orange-500',
      isActive: '#hero',
      scrollPosition: null,
      open: false,
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    active(to) {
      this.isActive = to
      this.open = false
    },
    menuClick() {
      this.open = !this.open
      this.textColor = 'text-gray-500'
      this.textHover = 'text-orange-500'
      this.navColorSm = 'bg-white'
      this.activeColor = 'text-orange-500'
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition < 100) {
        // this.textColor = 'text-gray-400 lg:text-white lg:text-opacity-50'
        // this.textHover = 'text-orange-500 lg;text-white'
        // this.navColor = 'bg-transparent'
        // this.activeColor = 'text-orange-500 lg:text-white'
        this.textColor = 'text-gray-500'
        this.textHover = 'text-orange-500'
        this.navColor = 'bg-white'
        this.activeColor = 'text-orange-500'
      } else {
        this.textColor = 'text-gray-500'
        this.textHover = 'text-orange-500'
        this.navColor = 'bg-white'
        this.activeColor = 'text-orange-500'
      }
    },
  },
}
</script>

<style>
</style>