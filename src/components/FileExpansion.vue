<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="item in items" :key="item.id">
      <template v-slot:header>
        <div>{{ item.name }}</div>
      </template>
      <v-card>
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'FileExpansion',
  data: () => {
    return {
      items: [
        {
          name: 'item 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Quis imperdiet massa tincidunt nunc. Pharetra et ultrices neque ornare aenean. Viverra adipiscing at in tellus integer feugiat scelerisque. Tortor at auctor urna nunc id cursus metus.',
          id: 1
        },
        {
          name: 'item 2',
          description:
            'Odio facilisis mauris sit amet massa vitae tortor condimentum. Id aliquet lectus proin nibh nisl. Feugiat in fermentum posuere urna nec tincidunt. At urna condimentum mattis pellentesque id nibh tortor. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.',
          id: 2
        },
        {
          name: 'item 3',
          description:
            'Eleifend donec pretium vulputate sapien. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Pharetra sit amet aliquam id diam maecenas. Odio aenean sed adipiscing diam donec adipiscing tristique. Commodo elit at imperdiet dui. A condimentum vitae sapien pellentesque habitant morbi tristique.',
          id: 3
        },
        {
          name: 'item 4',
          description:
            'Vitae sapien pellentesque habitant morbi tristique senectus. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Dignissim convallis aenean et tortor at risus. Nibh cras pulvinar mattis nunc sed blandit. Dis parturient montes nascetur ridiculus mus mauris vitae.',
          id: 4
        },
        {
          name: 'item 5',
          description:
            'Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Id aliquet lectus proin nibh nisl condimentum id venenatis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet.',
          id: 5
        }
      ]
    }
  }
}
</script>

<style></style>
