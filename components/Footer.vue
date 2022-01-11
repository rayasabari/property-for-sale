<template>
  <footer class="flex h-16 items-center justify-center text-xs text-gray-400 font-light">
    <Container class="flex justify-between border-t pt-4 pb-8">
      <div>
        &copy; 2022
        <a
          href="https://rantaka.id"
          class="font-normal hover:text-blue-700 transition duration-300"
        >RHR</a> x
        <a
          href="https://www.colliers.com/en-id"
          class="font-normal hover:text-blue-700 transition duration-300"
        >Colliers</a>
      </div>
      <div>
        Developed by
        <a
          href="https://rayasabari.com"
          class="font-normal hover:text-blue-700 transition duration-300"
        >RYSB</a>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "./Container.vue"

export default{
  components: { Container },
  name: 'FooterComponent',
}
</script>

<style>
</style>