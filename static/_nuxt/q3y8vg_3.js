const n=`<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect
      v-model="value"
      :children="tree"
      treeline
    />
  </div>
</template>

<script setup lang="ts">
const value = ref<any>([])

const tree = [
  {
    item: 'Item 1',
    children: [
      {
        item: 'Item 1.1',
      },
      {
        item: 'Item 1.2',
      },
    ],
  },
  {
    item: 'Item 2',
  },
  {
    item: 'Item 3',
    open: true,
    children: [
      {
        item: 'Item 3.0',
      },
      {
        item: 'Item 3.1',
        open: true,
        children: [
          {
            item: 'Item 3.1.1',
          },
          {
            item: 'Item 3.1.2',
            open: true,
            children: [],
          },
          {
            item: 'Item 3.1.3',
          },
        ],
      },
      {
        item: 'Item 3.2',
      },
      {
        item: 'Item 3.3',
        children: [],
      },
    ],
  },
  {
    item: 'Item 4',
  },
]
<\/script>
`;export{n as default};
