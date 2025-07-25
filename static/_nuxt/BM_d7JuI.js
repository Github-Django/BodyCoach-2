const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.first"
        contrast="default-contrast"
        size="sm"
        rounded="md"
        label="Rounded: md"
        placeholder="مثال: نام کاربری"
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.second"
        contrast="default-contrast"
        size="md"
        rounded="md"
        label="Rounded: md"
        placeholder="مثال: نام کاربری"
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.third"
        contrast="default-contrast"
        size="lg"
        rounded="md"
        label="Rounded: md"
        placeholder="مثال: نام کاربری"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
})
<\/script>
`;export{n as default};
