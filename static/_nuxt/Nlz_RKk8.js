const n=`<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      contrast="muted-contrast"
      size="sm"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      color-focus
    />

    <BaseTextarea
      v-model="value"
      contrast="muted-contrast"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      color-focus
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;export{n as default};
