<template>
  <div class="w-full text-center mb-8 lg:mb-10">
    <h1 class="font-semibold text-3xl">
      <slot></slot>
    </h1>
    <!-- <div class="mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati.
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'RhcTitle',
  props:['desc']
}
</script>

<style>
</style>