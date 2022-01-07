<template>
  <div>
    <Navbar></Navbar>
    <main>
      <Nuxt></Nuxt>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head: {
    htmlAttrs: {
      class: 'scroll-smooth',
    },
    bodyAttrs: {
      class: 'font-poppins text-gray-500',
    },
  },
}
</script>

<style>
</style>