<template>
  <div slot="header">
    {{ label }}
    <v-btn
      flat
      icon
      @click.native.stop
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-file-document-edit</v-icon>
    </v-btn>
    <v-btn
      flat
      icon
      @click.native.stop
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-textbox</v-icon>
    </v-btn>
    <v-btn
      flat
      icon
      @click.native.stop
      @mousedown.native.stop
      @touchstart.native.stop
    >
      <v-icon>mdi-undo</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FileHeader',
  props: {
    label: {
      required: true
    }
  }
}
</script>

<style></style>
