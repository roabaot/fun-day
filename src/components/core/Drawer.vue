<template>
  <v-navigation-drawer
    v-if="responsive"
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    width="260"
  >
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-avatar
          color="white"
        >
          <v-img
            :src="logo"
            height="34"
            contain
          />
        </v-list-item-avatar>
        <v-list-item-title class="title">
          Vuetify MD
        </v-list-item-title>
      </v-list-item>
    </template>
      <v-divider/>
      <v-list>
        <v-list-item
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-item>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          active-class="purple"
          color="white"
          class="v-list-item btnH main-search"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            v-text="link.text"
          />
        </v-list-item>
        
      </v-list>
      <template v-slot:append>
          <v-list-item
            disabled
            class="v-list-item v-list-item--buy"
            to="/upgrade"
          >
            <v-list-item-icon>
              <v-icon>mdi-package-up</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-light">
              Upgrade To PRO
            </v-list-item-title>
          </v-list-item >
        </template>
  </v-navigation-drawer>
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
    responsive: false
  }),
  computed: {
    ...mapState('app', ['color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
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
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list-item {
      border-radius: 4px;
      margin: 0;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
        color: #ffffff80!important;
      }

    }

    .v-list-item--active {
      box-shadow: unset !important;
      
      &::before {
        opacity: 0;
      }
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

  }
</style>
