<template>
  <div id="site" class="h-auto bg-orange-400 text-white flex flex-col items-center justify-center">
    <Container class="my-16 lg:my-10">
      <div class="mt-12 w-10/12 mx-auto lg:mt-4 lg:px-10 flex flex-col lg:flex-row justify-between">
        <div class="flex flex-col items-center justify-center">
          <div class="text-5xl font-medium mb-2">
            &plusmn;5.4
            <span class="text-2xl ml-1">Ha</span>
          </div>
          <div>Total Land Area</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-5xl font-medium mb-2">
            &plusmn;1.7
            <span class="text-2xl ml-1">Ha</span>
          </div>
          <div>Building Area</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-5xl font-medium mb-2">190</div>
          <div>Number of Room</div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../Container.vue'
export default {
  components: { Container },
  name: 'SiteSection',
  data() {
    return {
      townPlanning: [
        { desc: 'Site Coverage', value: '40% / 50% / 60%' },
        { desc: 'PlotRatio (KLB)', value: '> 10 / 7 / 3%' },
        {
          desc: 'Height Limitation',
          value: '162 metres (based on KKOP regulation)',
        },
        { desc: 'Green Coverage {KDH}', value: '10% - 15%' },
      ],
    }
  },
}
</script>

<style>
</style>