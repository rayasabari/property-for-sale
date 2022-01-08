<template>
  <section
    id="keyinvestment"
    class="min-h-screen bg-blue-900 flex flex-col items-center justify-center"
  >
    <div class="w-9/12 h-full my-24">
      <rhc-title class="text-blue-50">Key Investment Highlight</rhc-title>
      <div class="w-full h-auto flex text-blue-100">
        <div class="w-6/12 m-4 flex flex-col">
          <div
            class="bg-blue-800 hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-300 flex items-center p-8 mb-5 shadow-xl rounded-xl leading-loose text-lg"
          >
            <div class="w-6/12 text-center">
              <font-awesome-icon class="text-6xl" :icon="['fas', 'map-marker-alt']" />
            </div>
            <div
              class="pl-8"
            >Located within a mature township with established amenities and a mere 6 minutes drive from exit gate Jakarta - Tangerang Highway.</div>
          </div>
          <div
            class="bg-blue-800 hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-300 flex items-center p-8 mt-5 shadow-xl rounded-xl leading-loose text-lg"
          >
            <div class="w-6/12 text-center">
              <font-awesome-icon class="text-6xl" :icon="['fas', 'route']" />
            </div>
            <div
              class="pl-8"
            >Development options include complete redevelopment or possibly retention and re- purposing of the existing buildings combined with new development such as multi-storey housing / condominium and commercial amenities.</div>
          </div>
        </div>
        <div class="w-6/12 m-4 flex flex-col items-center justify-center">
          <div
            class="bg-blue-800 hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-300 flex items-center p-8 mb-5 shadow-xl rounded-xl leading-loose text-lg"
          >
            <div class="w-3/12  text-center">
              <font-awesome-icon class="text-6xl" :icon="['fas', 'shapes']" />
            </div>
            <div class="pl-8">The Site is very suitable for a large-scale mixed use development.</div>
          </div>
          <div
            class="bg-blue-800 hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-300 flex items-center p-8 mt-5 shadow-xl rounded-xl leading-loose text-lg"
          >
            <div class="w-6/12 text-center">
              <font-awesome-icon class="text-6xl" :icon="['fas', 'hotel']" />
            </div>
            <div
              class="pl-8"
            >Development options include complete redevelopment or possibly retention and re- purposing of the existing buildings combined with new development such as multi-storey housing / condominium and commercial amenities</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  name: 'KeyInvestmentSection',
  components: { RhcTitle },
}
</script>

<style>
</style>