<template>
  <section id="about" class="flex items-center justify-center">
    <Container class="my-16 lg:my-20">
      <rhc-title class="text-orange-400">About Us</rhc-title>
      <div class="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 text-md leading-loose text-justify">
        <div class="w-full lg:w-6/12 p-4">
          <div class="w-full flex justify-center items-center">
            <img src="@/assets/images/logo-rhr-black.png" alt="Colliers Logo" class="h-20 mb-10" />
          </div>
          <p
            class="mb-2"
          >PT RHR was established in October 2018 as an extension of the scope of the services of HBN Group (established in 1996 with 9 offices all over Indonesia) and to provide more value added services to our client.</p>
          <p class="mb-2">PT RHR's scope of business includes as follow:</p>
          <ul>
            <li v-for="(l,idx) in list" :key="idx">- {{l}}</li>
          </ul>
          <div class="space-x-2">
            <a class="font-medium text-orange-500" href="https://www.rantaka.id">www.rantaka.id</a>
            <a class="font-medium text-orange-500" href="https://www.rhr.co.id">www.rhr.co.id</a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 p-4">
          <div class="w-full flex justify-center items-center">
            <img src="@/assets/images/logo-colliers.png" alt="Colliers Logo" class="h-20 mb-10" />
          </div>
          <p>Colliers International is the leader in global real estate services, defined by our spirit of enterprise. Through a culture of service excellence and a shared sense of initiative, we integrate the resources of real estate specialists worldwide to accelerate the success of our partners. Colliers International delivers real estate services globally through 15,000 specialized professionals in more than 396 offices in 68 countries. Colliers provides advice to clients on more than USD105 billion in transactions annually and manages 2 billion square feet with revenue exceeding USD2.6 billion.</p>
          <a class="font-medium text-orange-500" href="https://www.colliers.com">www.colliers.com</a>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue'
import RhcTitle from '../Partials/RhcTitle.vue'

export default {
  name: 'AboutPage',
  components: {
    Container,
    RhcTitle,
  },
  data() {
    return {
      list: [
        'Property agency services',
        'Leasingand property management',
        'Propertyinvestmentadvisory',
        'Consultancy',
        'Business development services',
        'Development projects',
      ],
    }
  },
}
</script>

<style>
</style>