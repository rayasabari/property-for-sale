<template>
  <section id="hero" class="h-screen bg-gray-700 bg-hero-image">
    <div
      class="h-full flex flex-col items-center justify-center backdrop-blur-md backdrop-brightness-75 backdrop-contrast-125"
    >
      <div class="flex flex-col items-center justify-center absolute">
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
      </div>
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