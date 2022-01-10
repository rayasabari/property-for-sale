<template>
  <section id="hero" class="h-screen bg-gray-700 bg-hero-image">
    <div
      class="h-full flex items-center justify-center backdrop-blur-md backdrop-brightness-75 backdrop-contrast-125"
    >
      <Container>
        <div class="flex justify-between items-end">
          <div class="w-7/12 h-auto">
            <div
              class="text-5xl text-white font-semibold leading-relaxed mb-5"
            >Large piece of rare redevelopment land within a matured township in Tangerang, Indonesia</div>
            <div
              class="text-lg text-white text-opacity-80 leading-relaxed mb-8"
            >Rantaka Haburi Radika (RHR) and Colliers International Indonesia are privileged to offer for sale a unique land for redevelopment located in Tangerang, Indonesia which currently erected thereon an existing hotel, country club facilities and recreational amenities.</div>
            <div class="space-x-3">
              <a
                href="#development"
                class="px-6 py-3 border border-lime-300 rounded-lg font-medium bg-lime-300 hover:bg-lime-200 hover:border-lime-200 transition duration-300 text-lime-700"
              >More Info</a>
              <button
                class="px-8 py-3 backdrop-blur-3xl border border-white-300 rounded-lg text-white font-medium hover:bg-white hover:text-lime-700 transition duration-300"
              >Request a Callback</button>
            </div>
          </div>
          <div class="h-80 w-5/12 flex justify-end items-end">
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