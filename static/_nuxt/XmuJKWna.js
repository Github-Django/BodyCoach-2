const n=`<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="hobbies"
      :display-value="(item: Hobby) => item.name"
      :filter-items="filterItems"
      icon="ph:buildings"
      rounded="md"
      placeholder="انتخاب یک سرگرمی"
      label="شرکت"
      clearable
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        icon: 'icon',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

const value = ref<Hobby>()
const hobbies = ref<Hobby[]>([
  {
    id: 1,
    name: 'فیلم‌ها',
    text: 'سینما و نمایش‌ها',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'سفر',
    text: 'گردشگری و سفر',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'نوشیدنی‌ها',
    text: 'شراب‌ها و نوشیدنی‌های عالی',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'هنرها',
    text: 'نقاشی‌ها و مجسمه‌سازی',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'کارائوکه',
    text: 'خواندن با دوستان',
    icon: 'ph:microphone-stage-duotone',
  },
])

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
