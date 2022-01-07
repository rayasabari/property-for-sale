<template>
  <section id="development" class="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <div class="w-9/12 h-full my-24">
      <rhc-title class="text-gray-800">Development Site</rhc-title>
      <div class="w-full h-auto flex text-gray-700">
        <div class="w-6/12 m-4 flex items-center justify-center">
          <div
            class="bg-white p-8 shadow-xl rounded-xl leading-loose text-lg"
          >The development site is located in Tangerang Regency, Banten. It is situated in the heart of commercial area of a mature township with established amenities such shopping and commercial facilities, educational institutions, housing estates (condominium and landed), recreational facilities including golf and country club and medical institutions.</div>
        </div>
        <div class="w-6/12 m-4 flex flex-col">
          <div
            class="bg-white p-8 mb-5 shadow-xl rounded-xl leading-loose text-lg"
          >Tangerang is a city in the province of Banten, Indonesia. Located on the western border of Jakarta, it is the third largest urban centre in the Greater Jakarta metropolitan area after Jakarta and Bekasi; the sixth largest city in the nation; and the largest city in Banten province.</div>
          <div
            class="bg-white p-8 mt-5 shadow-xl rounded-xl leading-loose text-lg"
          >The opportunity consists of the outright purchase of the asset or the owning company of the asset (special purpose company). The land has a total land area of approximately 54,410 sqm.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  components: { RhcTitle },
  name: 'DevelopmentSection',
}
</script>

<style>
</style>