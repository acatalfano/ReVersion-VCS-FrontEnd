<template>
  <div slot="header">
    {{ label }}
    <v-btn
      flat
      icon
      @click.native.stop="newFolder"
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-folder-plus</v-icon>
    </v-btn>
    <v-btn
      flat
      icon
      @click.native.stop="newFile"
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-file-plus</v-icon>
    </v-btn>
    <v-btn
      flat
      icon
      @click.native.stop="rename"
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-textbox</v-icon>
    </v-btn>
    <v-btn
      flat
      icon
      @click.native.stop="discardChanges"
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-undo</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'DirectoryHeader',
  props: {
    label: {
      required: true
    }
  },
  methods: {
    newFolder() {},
    newFile() {},
    rename() {
      this.label = 'i renamed!'
    },
    discardChanges() {}
  }
}
</script>

<style></style>
