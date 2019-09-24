<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <div style="text-align: center;">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
    </div>
    <div class="flex-grow-1"></div>
    <span class="font-weight-light">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="/"
        target="_blank">Fun day</a>, made with
      <v-icon
        color="error"
        size="17">mdi-heart</v-icon>
      for a e-store
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/' },
      { name: 'Creative Tim', Link: 'https://www.creative-tim.com' },
      { name: 'About Us', Link: 'https://creative-tim.com/presentation' },
      { name: 'Blog', Link: 'https://blog.creative-tim.com' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
