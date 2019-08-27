<template>
  <v-container
    id="home"
    fill-height
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
      >
        <v-card
          class="mt-3 mb-5"
          outlined
        >
          <v-container pa-6>
            <v-layout
              justify-center
              wrap
              
            >
              <v-flex
                xs12
                md3
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto"
                      height="400"
                    >
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                      <v-card-text>
                        <h2 class="title text-primary">Magento Forests</h2>
                        Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                      </v-card-text>

                      <v-card-title>
                        <v-rating
                          :value="4"
                          dense
                          color="orange"
                          background-color="orange"
                          hover
                          class="mr-2"
                        ></v-rating>
                        <span class="text-primary subtitle-2">64 Reviews</span>
                      </v-card-title>

                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="tertiary"
                        >
                          <v-btn color="primary">See more info</v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-flex>

              <v-flex
                xs12
                md6
              >
                <v-carousel
                  cycle
                  height="400"
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  />
                </v-carousel>
              </v-flex>
              <v-flex
                xs12
                md3
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto"
                      height="400"
                    >
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                      <v-card-text>
                        <h2 class="title text-primary">Magento Forests</h2>
                        Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                      </v-card-text>

                      <v-card-title>
                        <v-rating
                          :value="4"
                          dense
                          color="orange"
                          background-color="orange"
                          hover
                          class="mr-2"
                        ></v-rating>
                        <span class="text-primary subtitle-2">64 Reviews</span>
                      </v-card-title>

                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="tertiary"
                        >
                          <v-btn color="primary">See more info</v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      src: [
        'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      ],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          title: 'First'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: 'Second'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: 'Third'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Fourth'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #home {
    .v-window {
      .v-window__container {
        .v-window {
          &__prev,
          &__next {
            .v-btn {
              margin: 0;
            }
          }
        }
      }
    }
  }
  .container.grid-list-xl .layout .flex {
    padding: 30px 12px;
  }
</style>
