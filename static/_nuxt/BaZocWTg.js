const n=`<template>
  <div class="flex max-w-4xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="sm"
        rounded="md"
        label="سرگرمی‌ها"
        :items="hobbies"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          icon: 'icon',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="md"
        rounded="md"
        label="سرگرمی‌ها"
        :items="hobbies"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          icon: 'icon',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="lg"
        rounded="md"
        label="سرگرمی‌ها"
        :items="hobbies"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          icon: 'icon',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 2,
  name: 'سفر',
  text: 'گردشگری و سفر',
  icon: 'ph:airplane-duotone',
})

const hobbies = [
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
]
<\/script>
`;export{n as default};
