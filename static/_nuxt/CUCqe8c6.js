const n=`<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree" treeline>
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            media: child.item.media,
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
      name: 'مدیریت عالی',
      text: undefined,
    },
    children: [
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/8.svg',
          name: 'هارولد فریزر',
          text: 'بنیان‌گذار گروه',
        },
        children: [],
      },
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/5.svg',
          name: 'کلاریسا میلر',
          text: 'مدیر اجرایی',
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: 'Teams',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: 'بازاریابی',
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/3.svg',
              name: 'کلارک اسمیت',
              text: 'همکار بازاریابی',
            },
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
              name: 'خانواده اولگا',
              text: 'همکار بازاریابی',
            },
            children: [
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'کلارک اسمیت',
                  text: 'همکار بازاریابی',
                },
                children: [],
              },
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'خانواده اولگا',
                  text: 'همکار بازاریابی',
                },
              },
            ],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/16.svg',
              name: 'هرمان مایر',
              text: 'مسئول بازاریابی',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'فروش',
          text: undefined,
        },
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/9.svg',
              name: 'آنا لوپز',
              text: 'مدیر فروش',
            },
            children: [],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/25.svg',
              name: 'ملانی لافیلد',
              text: 'مدیر فروش',
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: 'https://media.cssninja.io/shuriken/avatars/14.svg',
      name: 'ژان لوبوس',
      text: 'همکار بازاریابی',
    },
  },
]
<\/script>
`;export{n as default};
