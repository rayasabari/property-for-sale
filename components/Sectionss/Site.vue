<template>
  <div id="site" class="h-auto flex flex-col items-center justify-center">
    <Container class="my-16 lg:my-24">
      <rhc-title class="text-indigo-600">Site - Property</rhc-title>
      <div class="min-h-96 mt-12 lg:mt-4 lg:px-10 w-full flex flex-col lg:flex-row justify-between">
        <div class="w-full lg:w-7/12 text-center lg:text-left">
          <div class="mb-10">
            <h1 class="text-indigo-600 text-xl font-semibold mb-4">Site Area</h1>
            <span class="text-gray-500 text-md">54,410 sqm</span>
          </div>
          <div class="mb-10">
            <h1 class="text-indigo-600 text-xl font-semibold mb-4">Legal Description</h1>
            <span class="text-gray-500 text-md">15 (fifteen) Right to Build (HGB) Certificates</span>
          </div>
          <div class="mb-10">
            <h1 class="text-indigo-600 text-xl font-semibold mb-4">Town Planning</h1>
            <table class="table-auto ">
              <tbody>
                <tr v-for="(tp,idx) in townPlanning" :key="idx">
                  <td class="pr-2 pb-3 text-right lg:text-left">{{tp.desc}}</td>
                  <td class="pr-2 pb-3 text-left font-semibold">{{tp.value}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="w-full lg:w-5/12 p-4 flex flex-col-reverse lg:flex-col items-center justify-center">
          <img
            src="@/assets/images/site-plan.png"
            alt="Site Plan"
            class="h-80 hover:scale-105 transition duration-300"
          />
          <h1 class="text-indigo-600 text-xl font-semibold mb-4">Lot Plan</h1>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../Container.vue'
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  components: { RhcTitle, Container },
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