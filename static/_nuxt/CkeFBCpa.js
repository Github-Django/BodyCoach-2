const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="sm"
        :items="frameworks"
        placeholder="انتخاب یک چارچوب"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="md"
        :items="frameworks"
        placeholder="انتخاب یک چارچوب"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="lg"
        :items="frameworks"
        placeholder="انتخاب یک چارچوب"
        rounded="md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
<\/script>
`;export{n as default};
