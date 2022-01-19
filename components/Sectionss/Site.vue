<template>
  <div id="site" class="h-auto bg-orange-400 text-white flex flex-col items-center justify-center">
    <Container class="my-16 lg:my-14">
      <div
        class="w-10/12 mx-auto lg:px-10 flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between"
      >
        <div class="flex flex-col items-center justify-center" v-for="(sp, idx) in spek" :key="idx">
          <div class="text-4xl lg:text-5xl font-medium mb-1">
            <span v-if="sp.plusmin">&plusmn;</span>
            <span>{{sp.value}}</span>
            <span v-if="sp.satuan != null" class="text-2xl ml-1">{{sp.satuan}}</span>
          </div>
          <div>{{sp.desc}}</div>
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
      spek: [
        {
          desc: 'Total Land Area',
          value: '5.4',
          satuan: 'Ha',
          plusmin: true,
        },
        {
          desc: 'Building Area',
          value: '1.7',
          satuan: 'Ha',
          plusmin: true,
        },
        {
          desc: 'Number of Room',
          value: '190',
          satuan: null,
          plusmin: false,
        },
      ],
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