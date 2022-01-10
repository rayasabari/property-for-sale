<template>
  <div id="site" class="h-auto flex flex-col items-center justify-center">
    <Container class="my-24">
      <rhc-title class="text-blue-700">Site - Property</rhc-title>
      <div class="min-h-96 px-10 w-full flex justify-between">
        <div class="w-7/12">
          <div class="mb-10">
            <h1 class="text-blue-800 text-xl font-semibold mb-4">Site Area</h1>
            <span class="text-gray-500 text-md">54,410 sqm</span>
          </div>
          <div class="mb-10">
            <h1 class="text-blue-800 text-xl font-semibold mb-4">Legal Description</h1>
            <span class="text-gray-500 text-md">15 (fifteen) Right to Build (HGB) Certificates</span>
          </div>
          <div class="mb-10">
            <h1 class="text-blue-800 text-xl font-semibold mb-4">Town Planning</h1>
            <div class="flex justify-between mb-2 text-md">
              <div class="w-5/12">Site Coverage</div>
              <div class="w-7/12">: 40% / 50% / 60%</div>
            </div>
            <div class="flex justify-between mb-2 text-md">
              <div class="w-5/12">PlotRatio (KLB)</div>
              <div class="w-7/12">: > 10 / 7 / 3</div>
            </div>
            <div class="flex justify-between mb-2 text-md">
              <div class="w-5/12">Height Limitation</div>
              <div class="w-7/12">: 162 metres (based on KKOP regulation)</div>
            </div>
            <div class="flex justify-between mb-2 text-md">
              <div class="w-5/12">Green Coverage (KDH)</div>
              <div class="w-7/12">: 10% - 15%</div>
            </div>
          </div>
        </div>
        <div class="w-5/12 flex flex-col items-center justify-center">
          <img src="@/assets/images/site-plan.png" alt="Site Plan" class="h-80 hover:scale-105 transition duration-300" />
          <h1 class="text-blue-800 text-xl font-semibold mb-2">Lot Plan</h1>
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
}
</script>

<style>
</style>