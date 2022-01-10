<template>
  <section id="hero" class="h-screen bg-gray-700 bg-hero-image">
    <div
      class="h-full flex items-center justify-center backdrop-blur-md backdrop-brightness-75 backdrop-contrast-125"
    >
      <Container>
        <div class="flex items-center justify-between">
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
              >Get Started</a>
              <button
                class="px-8 py-3 border border-white-300 rounded-lg text-white font-medium hover:bg-white hover:text-lime-700 transition duration-300"
              >Call</button>
            </div>
          </div>
          <div class="bg-blue-900 h-auto w-5/12"></div>
        </div>
      </Container>
      <!-- <div class="flex flex-col items-center justify-center absolute">
        <div class="rounded-lg bg-rose-500 backdrop-blur py-5 px-10 shadow-2xl">
          <h1 class="text-white font-bold text-9xl">FOR SALE</h1>
        </div>
        <div
          class="mt-3 w-7/12 text-center font-light text-3xl leading-relaxed text-white p-5"
        >Large piece of rare redevelopment land within a matured township in Tangerang, Indonesia</div>
      </div>

      <div class="flex w-64 h-64 justify-between items-center bottom-0 absolute">
        <a href="https://rantaka.id">
          <img src="@/assets/images/logo-rhr.png" alt="RHR Logo" class="h-20 hover:scale-110 transition duration-300" />
        </a>
        <a href="https://www.colliers.com/en-id">
          <img src="@/assets/images/logo-colliers.png" alt="Colliers Logo" class="h-20 hover:scale-110 transition duration-300" />
        </a>
      </div>-->
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