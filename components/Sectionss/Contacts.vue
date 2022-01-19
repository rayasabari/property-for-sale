<template>
  <div
    id="contacts"
    class="h-auto bg-hero-image-2 bg-cover backdrop-filter backdrop-blur bg-opacity-50"
  >
    <div class="flex flex-col items-center justify-center bg-white bg-opacity-90 ">
      <Container class="my-16 lg:my-24">
        <rhc-title desc="Lorem10" class="text-orange-400">Contact Us</rhc-title>
        <div
          class="w-full h-auto flex flex-col lg:flex-row items-center justify-center space-y-7 lg:space-y-0 lg:space-x-7 pt-4 px-3"
        >
          <div
            v-for="(contact, index) in contacts"
            :key="index"
            :class="contact.bg"
            class="w-full lg:w-2/12 hover:scale-110 overflow-hidden rounded-3xl transition duration-300"
          >
            <div class="flex flex-col">
              <a :href="contact.wa" target="_blank" class=" flex items-center justify-center space-x-2">
                <div class="p-2 space-x-1">
                  <font-awesome-icon
                    class="text-4xl text-emerald-400 transition duration-500"
                    :icon="['fab', 'whatsapp-square']"
                  />
                </div>
                <h1 class="text-xl font-medium text-gray-600">{{ contact.nama }}</h1>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../Container.vue'
import RhcTitle from '../Partials/RhcTitle.vue'
export default {
  components: { RhcTitle, Container },
  name: 'ContactsSection',
  data() {
    return {
      contacts: [
         {
          nama: 'Ringkardo',
          phone: '+62 812-8000-0380',
          wa: 'https://wa.me/6281280000380',
          bg: '',
        },
        {
          nama: 'Vania',
          phone: '+62 813-1931-5077',
          wa: 'https://wa.me/6281319315077',
          bg: '',
        },
        {
          nama: 'Elfira',
          phone: '+62 812-4512-8181',
          wa: 'https://wa.me/6281245128181',
          bg: '',
        },
      ],
    }
  },
}
</script>

<style>
</style>