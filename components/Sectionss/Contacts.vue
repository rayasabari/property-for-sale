<template>
  <div id="contacts" class="h-auto flex flex-col items-center justify-center">
    <Container class="my-16 lg:my-24">
      <rhc-title desc="Lorem10" class="text-blue-700">Contacts</rhc-title>
      <div class="w-full h-auto flex flex-col lg:flex-row items-center justify-center space-y-7 lg:space-y-0 lg:space-x-7 pt-4 px-3">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          :class="contact.bg"
          class="w-full lg:w-80 shadow-lg overflow-hidden rounded-3xl hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          <div class="flex flex-col">
            <div class="w-full p-10 flex">
              <div class="bg-gray-300 w-40 h-40 m-auto rounded-full overflow-hidden border-4 border-white bg-[url('https://source.unsplash.com/random/300×300')] bg-cover">
              </div>
            </div>
            <div class="h-40 flex flex-col items-center justify-center bg-white">
              <h1 class="text-sm text-blue-500">{{ contact.nama }}</h1>
              <div class="py-1 text-2xl font-medium">{{contact.phone}}</div>
              <div class="p-2 space-x-1">
                <font-awesome-icon
                  class="text-4xl text-emerald-400 transition duration-500 hover:scale-105 hover:text-emerald-300"
                  :icon="['fab', 'whatsapp-square']"
                />
                <font-awesome-icon
                  class="text-4xl text-sky-400 transition duration-500 hover:scale-105 hover:text-sky-300"
                  :icon="['fas', 'phone-square']"
                />
              </div>
            </div>
          </div>
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
  name: 'ContactsSection',
  data() {
    return {
      contacts: [
        { nama: 'Vania Alfida', phone: '+628123456XXX', bg:'bg-blue-50 hover:bg-blue-100' },
        { nama: 'Elfira Pranda', phone: '+628123456XXX', bg:'bg-blue-50 hover:bg-blue-100' },
        { nama: 'Ringkardo Siregar', phone: '+628123456XXX', bg:'bg-blue-50 hover:bg-blue-100' },
      ],
    }
  },
}
</script>

<style>
</style>