<template>
  <section id="hero" class="h-screen bg-gray-700 bg-hero-image-3 bg-cover">
    <div
      class="h-full flex items-center justify-center backdrop-filter backdrop-brightness-75 backdrop-contrast-150 bg-gray-700 bg-opacity-70"
    >
      <Container>
        <div class="flex lg:flex-row flex-col justify-between items-end w-full">
          <div class="lg:w-7/12 h-auto">
            <div
              class="text-3xl lg:text-5xl text-white font-semibold leading-snug lg:leading-none mb-5"
            >Hotel for Sale and Investment Opportunities</div>
            <div
              class="text-lg lg:text-xl text-white text-opacity-90 leading-relaxed mb-8"
            >5-Star Hotel plus development site of 3.4 Ha in strategic location within estabilished area of Tangerang, Indonesia</div>
            <div class="space-x-3">
              <a
                href="#keyinvestment"
                class="px-6 py-3  rounded-lg font-medium bg-orange-400 hover:bg-orange-500 transition duration-300 text-white"
              >More Info</a>
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