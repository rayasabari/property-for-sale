<template>
  <div>
    <Navbar></Navbar>
    <rhc-floating />
    <main>
      <Nuxt></Nuxt>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import RhcFloating from '~/components/Partials/RhcFloating.vue'
export default {
  components: { RhcFloating },
  name: 'DefaultLayout',
  head: {
    htmlAttrs: {
      class: 'scroll-smooth',
    },
    bodyAttrs: {
      class: 'font-poppins text-gray-500',
    },
  },
  mounted() {
    this.setViewHeight()
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
  },
  methods: {
    setViewHeight: function () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
}
</script>

<style>
</style>