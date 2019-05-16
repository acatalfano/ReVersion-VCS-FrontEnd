<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span class="mr-2">Latest Release</span>
        </v-btn>

        <v-btn flat to="/">Home</v-btn>

        <v-btn flat to="/about">About</v-btn>
        <v-btn flat to="/branch">Branch</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //
    }
  }
}
</script>
