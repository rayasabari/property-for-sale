<template>
  <a
    :class="active ? `${activeColor}` : `${textColor} hover:${textHover}`"
    class="transition duration-300"
    :href="to"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['to', 'active','textColor','activeColor','textHover'],
  name: 'RhcLink',
}
</script>

<style>
</style>