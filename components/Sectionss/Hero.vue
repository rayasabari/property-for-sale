<template>
  <section id="hero" class="h-screen bg-indigo-600 rounded-br-full">
    <div
      class="h-full flex items-center justify-center"
    >
      <Container>
        <div class="flex lg:flex-row flex-col justify-between items-end w-full">
          <div class="lg:w-7/12 h-auto">
            <div
              class="text-3xl lg:text-5xl text-white font-semibold leading-snug lg:leading-none mb-5"
            >Large piece of rare redevelopment land within a matured township in Tangerang, Indonesia</div>
            <div
              class="text-lg text-white text-opacity-70 leading-relaxed mb-8"
            >Rantaka Haburi Radika (RHR) and Colliers International Indonesia are privileged to offer for sale a unique land for redevelopment located in Tangerang, Indonesia which currently erected thereon an existing hotel, country club facilities and recreational amenities.</div>
            <div class="space-x-3">
              <a
                href="#development"
                class="px-6 py-3 border border-white rounded-lg font-medium bg-white hover:bg-indigo-50 hover:border-indigo-50 transition duration-300 text-indigo-600"
              >More Info</a>
              <button
                class="px-6 py-3 backdrop-blur-3xl border border-white-300 rounded-lg text-white font-medium hover:bg-white hover:text-indigo-700 transition duration-300"
              >Request a Callback</button>
            </div>
          </div>
          <div class="hidden lg:flex lg:h-96 w-full lg:w-5/12 justify-center lg:justify-end items-center lg:items-start">
            <div class="space-x-10 flex justify-center items-center">
              <a href="https://rantaka.id">
                <img
                  src="@/assets/images/logo-rhr.png"
                  alt="RHR Logo"
                  class="h-12 hover:scale-110 transition duration-300"
                />
              </a>
              <a href="https://www.colliers.com/en-id">
                <img
                  src="@/assets/images/logo-colliers.png"
                  alt="Colliers Logo"
                  class="h-12 hover:scale-110 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style>
#hero {
  background-size: cover;
  background-position: top;
}
</style>