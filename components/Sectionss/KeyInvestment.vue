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
            class="bg-blue-800 p-8 mb-5 shadow-xl rounded-xl leading-loose text-lg"
          >Located within a mature township with established amenities and a mere 6 minutes drive from exit gate Jakarta - Tangerang Highway.</div>
          <div
            class="bg-blue-800 p-8 mt-5 shadow-xl rounded-xl leading-loose text-lg"
          >Development options include complete redevelopment or possibly retention and re- purposing of the existing buildings combined with new development such as multi-storey housing / condominium and commercial amenities</div>
        </div>
        <div class="w-6/12 m-4 flex flex-col items-center justify-center">
          <div
            class="bg-blue-800 p-8 mb-5 shadow-xl rounded-xl leading-loose text-lg"
          >The Site is very suitable for a large-scale mixed use development.</div>
          <div
            class="bg-blue-800 p-8 mt-5 shadow-xl rounded-xl leading-loose text-lg"
          >The surrounding areas around the subject property consist of many established amenities such as shopping and commercial facilities, educational institutions, housing estates (condominium and landed), recreational facilities including golf and country club and medical institutions.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  components: { RhcTitle },
  name: 'KeyInvestmentSection',
}
</script>

<style>
</style>