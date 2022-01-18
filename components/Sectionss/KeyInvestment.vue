<template>
  <section id="keyinvestment" class="bg-white">
    <div class="flex flex-col items-center justify-center backdrop-blur-lg">
      <Container class="my-16 lg:my-24">
        <rhc-title class="text-orange-400">Key Investment Highlight</rhc-title>
        <div class="w-full pt-4 lg:pt-8 h-auto flex flex-col lg:flex-row text-orange-700">
          <div
            v-for="(key, index) in keyInvestment"
            :key="index"
            class="mb-2 lg:mb-0 w-full lg:w-6/12 text-center overflow-hidden text-gray-500 text-opacity-90 hover:text-opacity-100 hover:scale-105 transition duration-500 flex flex-col items-center rounded-xl leading-loose"
          >
            <div
              class="w-2/12 flex lg:mb-5 items-center lg:items-start justify-center h-full lg:h-auto"
            >
              <font-awesome-icon
                class="text-6xl text-orange-300 lg:mb-4"
                :icon="['fas', key.icon]"
              />
            </div>
            <div class="pt-6 pb-12 lg:py-0 w-10/12">
              <div class="text-xl mb-2 font-medium text-orange-300">{{key.heading}}</div>
              {{ key.text }}
            </div>
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
          heading: 'Strategic Location',
          text: '6 minutes drive from exit gate Jakarta - Tangerang Highway',
          icon: 'map-marker-alt',
        },
        {
          heading: 'Investment Opportunity',
          text: 'The Site is very suitable for a large-scale mixed use development such as multi-storey housing/condominium and commercial amenities',
          icon: 'shapes',
        },
        {
          heading: 'Surrounding Areas',
          text: 'Malls, hospital, educational institutions, and commercial development including golf and country club',
          icon: 'route',
        },
        // {
        //   heading: '',
        //   text: 'Such as multi-storey housing/condominium and commercial amenities',
        //   icon: 'hotel',
        // },
      ],
    }
  },
}
</script>

<style>
</style>