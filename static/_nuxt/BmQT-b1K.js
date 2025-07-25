const n=`<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseListbox
      v-model="value"
      label="Rounded: none"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="none"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: sm"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="sm"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: md"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="md"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: lg"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="lg"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: full"
      :items="frameworks"
      placeholder="انتخاب یک چارچوب"
      rounded="full"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
<\/script>
`;export{n as default};
