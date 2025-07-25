const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        contrast="muted-contrast"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="مثال: جاوااسکریپت"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        contrast="muted-contrast"
        size="md"
        rounded="md"
        label="اندازه: md"
        placeholder="مثال: جاوااسکریپت"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        contrast="muted-contrast"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="مثال: جاوااسکریپت"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;export{n as default};
