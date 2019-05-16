<template>
  <!--
  <v-expansion-panel expand focusable popout>
    <v-expansion-panel-content
      v-for="(item, index) in items"
      :key="item.id"
      :expand-icon="ExpandIconValue(index)"
      :ripple="HasRipple(index)"
      :class="['pb-3', 'px-3', 'indigo', 'lighten-' + ((depth % 3) + 2)]"
      lazy
      :readonly="ReadOnlyValue(index) ? true : false"
    >
      <div slot="header">
        {{ item.label }}
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <v-btn v-if="true" color="success">Open File</v-btn>
      <v-btn v-if="true" color="info">Add New Subdirectory</v-btn>
      <v-btn v-if="true" color="accent">Add New File</v-btn>
      <recursive-file-expansion
        v-if="!(typeof item.children === undefined)"
        :items="item.children"
        :depth="depth + 1"
      ></recursive-file-expansion>
    </v-expansion-panel-content>
  </v-expansion-panel>
  -->
  <v-expansion-panel expand focusable popout>
    <!--
    <ExpansionItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :depth="depth"
    ></ExpansionItem>
    -->
    <!--removed :ripple="HasRipple"-->
    <v-expansion-panel-content
      :expand-icon="ExpandIconValue"
      :ripple="HasRipple"
      :class="['mb-3', 'px-3', 'indigo', 'lighten-' + ((depth % 3) + 2)]"
      lazy
      :readonly="ReadOnlyValue"
    >
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
      <!--
        TODO:
          add <v-textarea v-if="isFile"></v-textarea> with w/e attributes and slots and props and events
          that are necessary

          also include default text and include that in the passed data (i.e. from Test.vue)

          ALSO later move all this to RecursiveFileExpansion.vue and delete this file and backup .txt file
                      and Test.vue, and edit router.js and App.vue


          handle custom events from DirectoryHeader.vue and FileHeader.vue
          (also incorporate custom events in those components)
        -->
      <!--removed: v-if="!isLeaf()" b/c wanted wrapper-->
      <NestedFileExpansion
        v-for="item in item.children"
        :key="item.id"
        :item="item"
        :depth="depth + 1"
      ></NestedFileExpansion>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import '../styles/sass/themes/_colorClasses.scss'
//import ExpansionItem from './FileExpansionSubComponents/ExpansionItem'
import FileHeader from './FileExpansionSubComponents/FileHeader'
import DirectoryHeader from './FileExpansionSubComponents/DirectoryHeader'

export default {
  //name: 'recursive-file-expansion',
  name: 'NestedFileExpansion',
  components: {
    //ExpansionItem
    FileHeader,
    DirectoryHeader
  },
  props: {
    /*
    items: {
      type: Array
    },*/
    item: {
      type: Object
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isLeaf: function() {
      return 'children' in this.item && this.item.children.length
    }
  },
  computed: {
    HasRipple: function() {
      return (
        'children' in this.item &&
        this.item.children.length !== 0 &&
        !this.item.isFile
      )
    },
    ExpandIconValue: function() {
      if (this.item.isFile) return 'mdi-file-document-edit-outline'
      if (!('children' in this.item) || this.item.children.length === 0)
        return 'mdi-folder-outline'
      return '$vuetify.icons.expand'
    },
    ReadOnlyValue: function() {
      return (
        this.item.isFile ||
        !('children' in this.item) ||
        this.item.children.length === 0
      )
    }
  }
  /*
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
  */
  /*
   TODO: isLeaf and isFile (should they be computed, if so then do away with the methods/index thing?
          just do it on the child level?)
  */
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
