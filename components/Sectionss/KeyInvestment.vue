<template>
  <section
    id="keyinvestment"
    class="min-h-screen bg-blue-900 flex flex-col items-center justify-center"
  >
    <Container class="my-24">
      <rhc-title class="text-white">Key Investment Highlight</rhc-title>
      <div class="w-full pt-4 h-auto flex flex-wrap text-blue-100">
        <div
          v-for="(key, index) in keyInvestment"
          :key="index"
          class="p-8 w-6/12 hover:bg-blue-800 hover:shadow-xl overflow-hidden hover:text-white hover:scale-105 transition duration-300 flex items-center rounded-xl leading-loose text-lg"
        >
          <div class="w-2/12 flex items-center justify-center h-full">
            <font-awesome-icon class="text-6xl text-white" :icon="['fas', key.icon]" />
          </div>
          <div class="pl-8 w-10/12">{{ key.text }}.</div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue'
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  name: 'KeyInvestmentSection',
  components: { RhcTitle, Container },
  data() {
    return {
      keyInvestment: [
        {
          text: 'Located within a mature township with established amenities and a mere 6 minutes drive from exit gate Jakarta - Tangerang Highway',
          icon: 'map-marker-alt',
        },
        {
          text: 'The Site is very suitable for a large-scale mixed use development.',
          icon: 'shapes',
        },
        {
          text: 'Development options include complete redevelopment or possibly retention and re-purposing of the existing buildings combined with new development such as multi-storey housing / condominium and commercial amenities.',
          icon: 'route',
        },
        {
          text: 'Development options include complete redevelopment or possibly retention and re-purposing of the existing buildings combined with new development such as multi-storey housing / condominium and commercial amenities.',
          icon: 'hotel',
        },
      ],
    }
  },
}
</script>

<style>
</style>