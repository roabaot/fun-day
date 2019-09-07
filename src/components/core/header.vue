<template>
  <v-app-bar
    v-if="responsive"
    id="app-header"
    dense
    fixed
    style="z-index: 10;"
  >
    <v-container
      fill-height
      grid-list-xl
      py-0
    >
      <v-img
        :src="logo"
        class="mr-4"
        contain
        height="auto"
        width="48"
        max-width="48"
        @click="$router.push('/')"
      />
      <v-menu
        v-for="(item, i) in menu"
        :key="i"
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            :to="item.to"
            active-class="text-primary"
            class="btnH"
            style="font-size: 14px;"
            text
            v-on="on"
          >
            {{ item.text }}
          </v-btn>
        </template>
        <v-list v-if="item.items!=null">
          <v-list-item
            v-for="(link, i) in item.items"
            :key="i"
            :to="link.to"
            active-class="text-primary"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <div style="font-size: 14px;">
        <span>Welcome visitor, you can </span>
        <router-link to="/">login </router-link>
        <span>or </span>
        <router-link to="/">create an account</router-link>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: './img/vuetifylogo.png',
    links: [
      {
        to: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ],
    menu: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'Other',
        to: null,
        items: [
          {
            to: '/dashboard',
            icon: 'mdi-view-dashboard',
            text: 'Dashboard'
          },
          {
            to: '/user-profile',
            icon: 'mdi-account',
            text: 'User Profile'
          },
          {
            to: '/table-list',
            icon: 'mdi-clipboard-outline',
            text: 'Table List'
          },
          {
            to: '/typography',
            icon: 'mdi-format-font',
            text: 'Typography'
          },
          {
            to: '/icons',
            icon: 'mdi-chart-bubble',
            text: 'Icons'
          },
          {
            to: '/maps',
            icon: 'mdi-map-marker',
            text: 'Maps'
          },
          {
            to: '/notifications',
            icon: 'mdi-bell',
            text: 'Notifications'
          }
        ]
      },
      {
        text: 'Home & Art',
        to: null,
        items: [
          {
            to: '/home-decor',
            text: 'Home Décor'
          },
          {
            to: '/art',
            text: 'Art & Craft Supplies'
          }
        ]
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['color'])
  },

  created () {
    if (window.innerWidth < 991) {
      this.responsive = false
    } else {
      this.responsive = true
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
    ...mapMutations('app', ['toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = false
      } else {
        this.responsive = true
      }
    }
  }
}
</script>
