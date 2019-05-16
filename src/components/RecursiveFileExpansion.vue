<template>
  <v-expansion-panel expand focusable popout>
    <!--I removed this: :ripple="HasRipple(index)"-->
    <v-expansion-panel-content
      v-for="(item, index) in items"
      :key="item.id"
      :expand-icon="ExpandIconValue(index)"
      :class="['pb-3', 'px-3', 'indigo', 'lighten-' + ((depth % 3) + 2)]"
      lazy
      :readonly="ReadOnlyValue(index) ? true : false"
    >
      <!--<div slot="header">
        {{ item.label }}-->
      <!--TODO TODO TODO
        move buttons from down below up here as icons (no content below header) and see if works in the readonly ones
        ***NOTE: using :value="..." in v-expansion-panel-content gives a "deprecated" warning for v-model
                  and doesn't seem to work regardless-->
      <!--attributes "replace" and "to" for vue-router-->
      <!--<v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <v-btn v-if="true" color="success">Open File</v-btn>
      <v-btn v-if="true" color="info">Add New Subdirectory</v-btn>
      <v-btn v-if="true" color="accent">Add New File</v-btn>-->
      <FileHeader
        v-if="item.isFile"
        :label="item.label"
        slot="header"
      ></FileHeader>
      <DirectoryHeader
        v-else
        :label="item.label"
        slot="header"
      ></DirectoryHeader>
      <recursive-file-expansion
        v-if="!(typeof item.children === undefined)"
        :items="item.children"
        :depth="depth + 1"
      ></recursive-file-expansion>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import '../styles/sass/themes/_colorClasses.scss'

import FileHeader from './FileExpansionSubComponents/FileHeader'
import DirectoryHeader from './FileExpansionSubComponents/DirectoryHeader'

export default {
  components: {
    FileHeader,
    DirectoryHeader
  },
  name: 'recursive-file-expansion',
  props: {
    items: {
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  methods: {
    HasRipple: function(index) {
      return (
        'children' in this.items[index] &&
        this.items[index].children.length !== 0 &&
        !this.items[index].isFile
      )
    },

    ExpandIconValue: function(index) {
      if (this.items[index].isFile) return 'mdi-file-document-edit-outline'
      if (
        !('children' in this.items[index]) ||
        this.items[index].children.length === 0
      )
        return 'mdi-folder-outline'

      return '$vuetify.icons.expand'
    },

    ReadOnlyValue: function(index) {
      return (
        this.items[index].isFile ||
        !('children' in this.items[index]) ||
        this.items[index].children.length === 0
      )
    }
  }
}
</script>

<style></style>

<!--
    TODO: test it via
    recursive js object:
        {
            id: '',
            label: '',
            directoryContents: [
                {
                    id: '',
                    label: '',
                    directoryContents: [
                        ...
                    ]
                }
            ]
        }

        THEN
        generate js object from the serverside-generated data format
        and also create an auto-incrementing id (or grab it from database and include in the serverside-generated data)
-->
