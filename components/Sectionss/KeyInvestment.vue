<template>
  <section
    id="keyinvestment"
    class="bg-section-image bg-cover"
  >
    <div class="flex flex-col items-center justify-center backdrop-blur-lg">
      <Container class="my-16 lg:my-24">
        <rhc-title class="text-white">Key Investment Highlight</rhc-title>
        <div class="w-full pt-4 h-auto flex flex-col lg:flex-row flex-wrap text-blue-100">
          <div
            v-for="(key, index) in keyInvestment"
            :key="index"
            class="lg:p-8 mb-2 lg:mb-0 w-full lg:w-6/12 text-center lg:text-left overflow-hidden text-white text-opacity-75 hover:text-opacity-100 hover:scale-105 transition duration-500 flex flex-col lg:flex-row items-center rounded-xl leading-loose text-lg"
          >
            <div class="w-2/12 flex items-center justify-center h-full">
              <font-awesome-icon class="text-6xl text-white" :icon="['fas', key.icon]" />
            </div>
            <div class="pt-6 pb-12 lg:py-0 lg:pl-8 w-10/12">{{ key.text }}.</div>
          </div>
        </div>
      </Container>
    </div>
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
          text: 'The surrounding areas around the subject property consist of many established amenities such as shopping and commercial facilities, educational institutions, housing estates (condominium and landed), recreational facilities including golf and country club and medical institutions.',
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