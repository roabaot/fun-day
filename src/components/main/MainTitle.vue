<template>
  <v-toolbar
    id="main-title"

    flat
    style="background: #fafafa; margin-bottom: 0;"
  >
    <v-container
      fill-height
      grid-list-xl
      class="defult-text"
    >
      <slot name='title' />

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-flex
          align-center
          layout
          style="margin: -12px auto;"
        > 
          <slot name='button' />
          
          
        </v-flex>
      </v-toolbar-items>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    title: 'title',
    more: 'more'
  })
}
</script>

<style lang="scss">
  #main-title {
    .defult-text {
      border-bottom: 2px solid #9c27b0;
      text-indent: .0892857143em;
      text-transform: uppercase;
      font-size: .875rem;
      font-weight: 400;
      letter-spacing: .0892857143em;
      .btnH {
        margin: auto;
        &:hover {
          background-color: #9900cc2e;
        }
        &:active {
          background-color: #9900cc59;
        }
      }
    }
  }
</style>