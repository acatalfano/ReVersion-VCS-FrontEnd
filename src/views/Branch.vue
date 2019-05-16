<!--
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 align-center>
        <h1>Branch Page</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 offset-xs2 align-center>
        <NestedFileExpansion
          :id="tree.root.id"
          :item="tree.root"
        ></NestedFileExpansion>
      </v-flex>
    </v-layout>
  </v-container>
</template>
-->
<template>
  <PageLayout>
    <NestedFileExpansion :id="tree.root.id" :item="tree.root">
    </NestedFileExpansion>
  </PageLayout>
</template>

<script>
let tree = {
  root: {
    label: 'root',
    id: 1,
    isFile: false,
    children: [
      {
        label: 'item1',
        id: 2,
        isFile: false,
        children: [
          {
            label: 'item1.1',
            isFile: false,
            id: 3
          },
          {
            label: 'item1.2',
            id: 4,
            isFile: false,
            children: [
              {
                label: 'item1.2.1',
                isFile: false,
                id: 5,
                children: [
                  {
                    label: 'item1.2.1.1',
                    isFile: true,
                    id: 6
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'item2',
        isFile: true,
        id: 7
      }
    ]
  }
}

import PageLayout from '../components/PageLayout'
import NestedFileExpansion from '../components/NestedFileExpansion'
export default {
  components: {
    NestedFileExpansion,
    PageLayout
  },
  data() {
    return {
      tree
    }
  }
}
</script>

<style></style>
