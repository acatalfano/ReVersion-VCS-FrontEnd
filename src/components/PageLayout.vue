<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 align-center>
        <h1>{{ heading }}</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 offset-xs2 align-center>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    heading: String
  }
}
</script>
