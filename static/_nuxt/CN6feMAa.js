const n=`<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="فریم‌ورک"
      size="sm"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="md"
      loading
    />

    <BaseListbox
      v-model="objectValue"
      size="sm"
      rounded="md"
      label="مردم"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      loading
    />

    <BaseListbox
      v-model="value"
      label="فریم‌ورک"
      size="md"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="md"
      loading
    />

    <BaseListbox
      v-model="objectValue"
      size="md"
      rounded="md"
      label="مردم"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      loading
    />

    <BaseListbox
      v-model="value"
      label="فریم‌ورک"
      size="lg"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="md"
      loading
    />

    <BaseListbox
      v-model="objectValue"
      size="lg"
      rounded="md"
      label="مردم"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      loading
    />
  </div>
</template>

<script setup lang="ts">

const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']

const objectValue = ref({
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
