<template>
  <v-container fluid align-center grid-list-xs>
    <v-layout row align-center>
      <v-flex xs8 text-xs-center offset-xs2>
        <h1>About Page</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex xs4 offset-xs4>
        <v-card>
          <FileTree />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FileTree from '../components/FileTree'

export default {
  components: {
    FileTree
  }
}
</script>
