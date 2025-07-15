const n=`<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree">
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            icon: child.item.icon,
          }"
        />
      </template>
    </BaseTreeSelect>
  </div>
</template>

<script setup lang="ts">
const tree = [
  {
    item: {
      media: undefined,
      name: 'General',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          icon: 'ph:cards-duotone',
          name: 'Company',
          text: 'Everything about the company',
        },
      },
      {
        item: {
          icon: 'ph:buildings-duotone',
          name: 'Company',
          text: 'Select filial',
        },
        children: [
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 1',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 2',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 3',
              text: 'Everything about the company',
            },
          },
        ],
      },
      {
        item: {
          icon: 'ph:suitcase-duotone',
          name: 'کسب و کار',
          text: 'سوالات مربوط به کسب و کار',
        },
        children: [],
      },
    ],
  },
  {
    item: {
      icon: 'ph:suitcase-duotone',
      name: 'کسب و کار',
      text: 'سوالات مربوط به کسب و کار',
    },
  },
  {
    item: {
      media: undefined,
      name: 'موضوعات',
      text: undefined,
    },
    children: [
      {
        item: {
          media: undefined,
          name: 'کسب و کار',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:rocket-duotone',
              name: 'استارتاپ‌ها',
              text: 'مدیریت استارتاپ‌ها',
            },
          },
          {
            item: {
              icon: 'ph:robot-duotone',
              name: 'محصولات',
              text: 'چرخه‌های عمر محصول',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Web Content',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:pencil-duotone',
              name: 'Blogging',
              text: 'Tips & tricks about blogging',
              children: [],
            },
          },
          {
            item: {
              icon: 'ph:circles-four-duotone',
              name: 'Social media',
              text: 'Managing social media content',
            },
          },
        ],
      },
    ],
  },
]
<\/script>
`;export{n as default};
