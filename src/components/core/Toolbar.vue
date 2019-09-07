<template>
  <v-toolbar
    id="core-toolbar"

    :style="responsiveM"
    flat
    style="background: #fafafa; margin-bottom: 0;"
  >
    <v-container
      fill-height
      grid-list-xl
    >
      <v-toolbar-title
        class="tertiary--text font-weight-light"
      >
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-flex
          align-center
          layout
          py-2
        >
          <v-text-field
            v-if="responsiveInput"
            class="mr-4 mt-2 purple-input main-search"
            label="Search..."
            hide-details
            color="purple"
          />
          <router-link
            v-ripple
            class="toolbar-items"
            to="/"
          >
            <v-icon color="tertiary">mdi-view-dashboard</v-icon>
          </router-link>
          
            <v-menu
              bottom
              left
              content-class="v-menu__content"
              offset-y
              transition="slide-y-transition">
              <template v-slot:activator="{ on }">
                <v-list-item
                  tag="router-link"
                  style="flex: 1 0 0"
                  v-ripple
                  class="toolbar-items unactive"
                  to="/notifications"
                  v-on="on"
                >
                  <v-badge
                    color="error"
                    overlap
                  >
                    <template slot="badge">
                      {{ notifications.length }}
                    </template>
                    <v-icon color="tertiary">mdi-bell</v-icon>
                  </v-badge>
                </v-list-item>
              </template>
              <v-card>
                <v-list dense>
                  <v-list-item
                    v-for="notification in notifications"
                    :key="notification"
                    @click="onClick"
                  >
                    <v-list-item-title
                      v-text="notification"
                    />
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          
          <router-link
            v-ripple
            class="toolbar-items"
            to="/user-profile"
          >
            <v-icon color="tertiary">mdi-account</v-icon>
          </router-link>
        </v-flex>
      </v-toolbar-items>
    </v-container>
  </v-toolbar>
</template>

<script>

import {
  mapMutations
} from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    responsiveInput: false,
    responsiveM: ''
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      this.responsiveM = (window.innerWidth < 991) ? '' : 'margin-top: 75px;'
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>

<style lang="scss">
  #core-toolbar {
    a {
    text-decoration: none;
    }
    .unactive {
        
        &:before {
          background-color: unset;
        }
      }
  }
</style>
