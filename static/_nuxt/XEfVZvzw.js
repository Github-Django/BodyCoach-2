const n=`<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      loading
    />

    <BaseTextarea
      v-model="value"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      loading
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;export{n as default};
