<template>
  <section id="development" class="min-h-screen bg-white flex flex-col items-center justify-center">
    <Container class="my-16 lg:my-24">
      <rhc-title class="text-indigo-600">Development Site</rhc-title>
      <div class="w-full text-center lg:text-left h-auto flex flex-col lg:flex-row items-center justify-center text-gray-700">
        <div class="w-full lg:w-6/12 m-2 lg:m-4 flex items-center justify-center">
          <div
            class="bg-white p-8 shadow-indigo-50 shadow-xl border border-indigo-50 rounded-xl leading-loose text-lg"
          >The development site is located in Tangerang Regency, Banten. It is situated in the heart of commercial area of a mature township with established amenities such shopping and commercial facilities, educational institutions, housing estates (condominium and landed), recreational facilities including golf and country club and medical institutions.</div>
        </div>
        <div class="w-full lg:w-6/12 m-2 lg:m-4 flex flex-col">
          <div
            class="bg-white p-8 mb-4 lg:mb-5 shadow-indigo-50 shadow-xl border border-indigo-50 rounded-xl leading-loose text-lg"
          >Tangerang is a city in the province of Banten, Indonesia. Located on the western border of Jakarta, it is the third largest urban centre in the Greater Jakarta metropolitan area after Jakarta and Bekasi; the sixth largest city in the nation; and the largest city in Banten province.</div>
          <div
            class="bg-white p-8 lg:mt-5 shadow-indigo-50 shadow-xl border border-indigo-50 rounded-xl leading-loose text-lg"
          >The opportunity consists of the outright purchase of the asset or the owning company of the asset (special purpose company). The land has a total land area of approximately 54,410 sqm.</div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue'
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  components: { RhcTitle, Container },
  name: 'DevelopmentSection',
}
</script>

<style>
</style>