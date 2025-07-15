const n=`<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="people"
      :display-value="(item: Person) => item.name"
      :filter-items="filterItems"
      icon="ph:users-three"
      rounded="md"
      placeholder="جستجو..."
      label="مامور"
      clearable
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Person {
  id: number
  name: string
  text: string
  media: string
}

const people = ref<Person[]>([
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
])
const value = ref<Person>()

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}
<\/script>
`;export{n as default};
