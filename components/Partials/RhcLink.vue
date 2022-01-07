<template>
  <a
    :class="active ? 'text-rose-400':''"
    class="hover:text-rose-400 transition duration-300 text-gray-500"
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