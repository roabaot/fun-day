<template>
  <v-container
    id="home"
    fill-height
    grid-list-xl
  >
    <v-layout wrap>

      <!---------------------- main header ---------------------->

      <v-flex
        md12
      >
        <v-card
          class="mt-3 mb-5"
          outlined
        >
          <v-container pa-6 fluid>
            <v-layout
              justify-center
              wrap
              
            >
              <v-flex
                xs12
                md3
                sm6
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto card-hover"
                    >
                      <v-img contain height="200" ma-1 src="@/image/pokal-glass-pink.webp"></v-img>

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
                sm12
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
                    cols="8"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  />
                </v-carousel>
              </v-flex>
              <v-flex
                xs12
                md3
                sm6
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto card-hover"
                    >
                      <v-img contain height="200" my-2 src="@/image/pokal-glass-blue.webp"></v-img>

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

      <!---------------------------- new --------------------------->
      
      <v-flex
        md12
      >
        <main-MainTitle>
          <v-toolbar-title
            slot="title"
            class="tertiary--text font-weight-light"
          >
            new
          </v-toolbar-title>

          <v-btn
            slot="button"
            text
            class="text-primary btnH"
            to="@"
          >
            more
            <v-icon color="text-primary">mdi-view-list</v-icon>
          </v-btn>
        </main-MainTitle>
      </v-flex>

      <v-flex
        md12
      >
        <v-card
          class="mt-3 mb-5"
          outlined
        >
          <v-container pa-6 fluid>
            <v-layout
              justify-center
              wrap
              
            >
              <v-flex
                md12
                sm6
                lg10
              >
                <v-item-group
                  v-model="selected"
                  multiple
                >
                  <v-row>
                    <v-col
                      v-for="(item, i) in today"
                      :key="i"
                      cols="12"
                      md="4"
                    >
                      <v-hover>
                        <template v-slot:default="{ hover }">
                          <v-card
                            class="mx-auto card-hover"
                          >
                            <v-item>
                            <v-img contain height="200" my-2 :src="item.src"></v-img>
                            </v-item>
                            <v-card-text>
                              <h2 class="title text-primary">{{ item.title }}</h2>
                              {{ item.description }}
                            </v-card-text>

                            <v-card-title>
                              <v-rating
                                :value="item.rate"
                                dense
                                color="orange"
                                background-color="orange"
                                hover
                                class="mr-2"
                              ></v-rating>
                              <span class="text-primary subtitle-2">{{ item.review}} Reviews</span>
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
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>

      <!---------------------------- Discounts --------------------------->
      
      <v-flex
        md12
      >
        <main-MainTitle>
          <v-toolbar-title
            slot="title"
            class="tertiary--text font-weight-light"
          >
            Discounts
          </v-toolbar-title>

          <v-btn
            slot="button"
            text
            class="text-primary btnH"
            to="@"
          >
            more
            <v-icon color="text-primary">mdi-view-list</v-icon>
          </v-btn>
        </main-MainTitle>
      </v-flex>

      <v-flex
        md12
      >
        <v-sheet
          class="mx-auto"
          elevation="2"
        >
          <v-slide-group
            class="pa-4"
            show-arrows
          >
            <v-slide-item
              v-for="(product,i) in discounts"
              :key="i"
            >
              <v-card
                class="ma-4"
                height="275"
                width="200"
              >
                <v-img
                  :src="product.src"
                  class="white--text"
                  height="200px"
                >
                </v-img>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">$ {{ product.discount }}</v-list-item-title>
                    <v-flex pa-0>
                      <v-list-item-subtitle style="text-decoration: line-through; float: left;}">$ {{ product.original_price }}</v-list-item-subtitle>
                      <v-list-item-subtitle style="float: right">off % {{ discountedPrice(product) }}</v-list-item-subtitle>
                    </v-flex>
                    
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://www.spiegelau.com/fileadmin/_processed_/9/5/csm_slider_elegance_1_4e4d33b3e9.jpg',
        },
        {
          src: 'https://bolurkar.ir/wp-content/uploads/2018/11/%D9%BE%D8%A7%D8%B1%DA%86-%D8%A8%D9%84%D9%88%D8%B1-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86-512x330.jpg',
        },
        {
          src: 'https://cf.shopee.ph/file/6a8bee99eee2670a202781919726dc46',
        },
        {
          src: 'https://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/590/37441_1.jpg',
        },
      ],
      today: [
        {
          title: 'bar craft acrylic',
          description: 'Buy Kitchen Craft Acrylic Cut Glass Tumbler 600ml online at vituzote.com Nairobi, Kenya. Countrywide delivery., Kitchen Craft Acrylic Cut Glass.',
          src: 'https://www.vituzote.com/image/cache/23RD/bar-craft-acrylic-cut-glass-tumbler-600ml-3313-700x700.jpg',
          rate: 3,
          review: 15
        },
        {
          title: 'glass shot',
          description: 'Entirely Handmade in the USA. #bulletproof 2 oz shot glass from the father and son team at BenShot. We\'re a family run team of artisan glass-makers.',
          src: 'https://cdn.shopify.com/s/files/1/1171/7642/products/BenShot-Rocks-glass-with-real-bullet-large-bullet-glass-Made-in-the-USA-1_2000x.jpg',
          rate: 4,
          review: 23
        },
        {
          title: 'crystal Highball glass',
          description: 'This straight sided crystal Highball glass is perfect for serving long drinks and tall cocktails or juice.',
          src: 'https://www.dartington.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/b/rb5527_tum_12_highball.jpg',
          rate: 5,
          review: 45
        },
      ],
      discounts: [
        {
          src: 'https://www.spiegelau.com/fileadmin/_processed_/9/5/csm_slider_elegance_1_4e4d33b3e9.jpg',
          discount: 10,
          original_price: 20
        },
        {
          src: 'https://bolurkar.ir/wp-content/uploads/2018/11/%D9%BE%D8%A7%D8%B1%DA%86-%D8%A8%D9%84%D9%88%D8%B1-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86-512x330.jpg',
          discount: 23,
          original_price: 53
        },
        {
          src: 'https://cf.shopee.ph/file/6a8bee99eee2670a202781919726dc46',
          discount: 54,
          original_price: 86
        },
        {
          src: 'https://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/590/37441_1.jpg',
          discount: 34,
          original_price: 65
        },
        {
          src: 'https://www.vituzote.com/image/cache/23RD/bar-craft-acrylic-cut-glass-tumbler-600ml-3313-700x700.jpg',
          discount: 43,
          original_price: 88
        },
        {
          src: 'https://cdn.shopify.com/s/files/1/1171/7642/products/BenShot-Rocks-glass-with-real-bullet-large-bullet-glass-Made-in-the-USA-1_2000x.jpg',
          discount: 21,
          original_price: 33
        },
        {
          src: 'https://www.dartington.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/b/rb5527_tum_12_highball.jpg',
          discount: 8,
          original_price: 26
        }
      ],
      selected: [],
    }
  },
  methods: {
    discountedPrice (product) {
      return Math.floor(product.discount * 100 / product.original_price)
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
    .v-slide-group {
      .v-slide-group__prev,
      .v-slide-group__next {
        display: flex;
      }
    }
  }
  .container.grid-list-xl .layout .flex {
    padding: 12px;

    .card-hover {
      padding: 15px 0;
    }
  }
</style>
