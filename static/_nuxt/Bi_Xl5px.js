const e=`<template>
  <div class="grid gap-6 md:max-w-3xl md:grid-cols-3">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      rounded="none"
      label="Rounded: none"
      placeholder="مثال: جاوااسکریپت"
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      rounded="sm"
      label="Rounded: sm"
      placeholder="مثال: جاوااسکریپت"
    />

    <BaseAutocomplete
      v-model="fields.third"
      :items="frameworks"
      rounded="md"
      label="Rounded: md"
      placeholder="مثال: جاوااسکریپت"
    />

    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      rounded="lg"
      label="Rounded: lg"
      placeholder="مثال: جاوااسکریپت"
    />

    <BaseAutocomplete
      v-model="fields.fifth"
      :items="frameworks"
      rounded="full"
      label="Rounded: full"
      placeholder="مثال: جاوااسکریپت"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;export{e as default};
