<template>
  <footer class="flex items-center justify-center text-sm text-gray-400 font-light">
    <Container class="flex flex-col-reverse lg:flex-row  justify-between items-center border-t p-8">
      <div>
        &copy; 2022
        <a
          href="https://rantaka.id"
          class="font-normal hover:text-orange-400 transition duration-300"
        >RHR</a> &
        <a
          href="https://www.colliers.com/en-id"
          class="font-normal hover:text-orange-400 transition duration-300"
        >Colliers</a>
      </div>
      <div class="space-x-3 mb-5 lg:mb-0">
        <font-awesome-icon
          class="text-2xl text-gray-400 transition duration-500 hover:scale-105 hover:text-orange-400"
          :icon="['fab', 'facebook']"
        />
        <font-awesome-icon
          class="text-2xl text-gray-400 transition duration-500 hover:scale-105 hover:text-orange-400"
          :icon="['fab', 'twitter']"
        />
        <font-awesome-icon
          class="text-2xl text-gray-400 transition duration-500 hover:scale-105 hover:text-orange-400"
          :icon="['fab', 'instagram']"
        />
        <font-awesome-icon
          class="text-2xl text-gray-400 transition duration-500 hover:scale-105 hover:text-orange-400"
          :icon="['fab', 'youtube']"
        />
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from './Container.vue'

export default {
  components: { Container },
  name: 'FooterComponent',
}
</script>

<style>
</style>