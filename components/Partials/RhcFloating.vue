<template>
  <a
    href="#"
    class="h-14 w-14 shadow-sm bottom-7 right-7 rounded-full bg-green-500 hover:bg-green-600 transition duration-500 fixed z-50 flex justify-center items-center"
  >
    <font-awesome-icon class="text-4xl text-white" :icon="['fab', 'whatsapp']" />
  </a>
</template>

<script>
export default {
  props: ["contacts"]
}
</script>

<style>
</style>