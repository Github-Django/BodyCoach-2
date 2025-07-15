const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="sm"
        rounded="md"
        label="مردم"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="md"
        rounded="md"
        label="مردم"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="lg"
        rounded="md"
        label="مردم"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 3,
  name: 'مایک میلر',
  text: 'طراح رابط کاربری / تجربه کاربری',
})

const peopleNames = ref([
  {
    id: 1,
    name: 'کلاریسا پرز',
    text: 'مدیر فروش',
  },
  {
    id: 2,
    name: 'آرون اسپلاتر',
    text: 'مدیر پروژه',
  },
  {
    id: 3,
    name: 'مایک میلر',
    text: 'طراح رابط کاربری / تجربه کاربری',
  },
  {
    id: 4,
    name: 'بندیکت کسلر',
    text: 'توسعه‌دهنده موبایل',
  },
  {
    id: 5,
    name: 'مایا روسلینی',
    text: 'مدیر محصول',
  },
])
<\/script>
`;export{n as default};
