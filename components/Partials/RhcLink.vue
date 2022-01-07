<template>
  <a
    :class="active ? 'text-blue-700':''"
    class="hover:text-blue-700 transition duration-300 text-gray-500"
    :href="to"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['to', 'active'],
  name: 'RhcLink',
}
</script>

<style>
</style>