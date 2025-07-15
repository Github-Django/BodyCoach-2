const n=`<template>
  <div class="flex max-w-4xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="sm"
        rounded="md"
        label="سرگرمی‌ها"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="md"
        rounded="md"
        label="سرگرمی‌ها"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="lg"
        rounded="md"
        label="سرگرمی‌ها"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 2,
  name: 'آرون اسپلاتر',
  text: 'مدیر پروژه',
  media: '/img/avatars/16.svg',
})

const people = [
  {
    id: 1,
    name: 'کلاریسا پرز',
    text: 'مدیر فروش',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'آرون اسپلاتر',
    text: 'مدیر پروژه',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'مایک میلر',
    text: 'طراح رابط کاربری / تجربه کاربری',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'بندیکت کسلر',
    text: 'توسعه‌دهنده موبایل',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'مایا روسلینی',
    text: 'مدیر محصول',
    media: '/img/avatars/2.svg',
  },
]
<\/script>
`;export{n as default};
