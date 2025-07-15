const n=`<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="fields.first"
      rounded="none"
      label="Rounded: none"
      placeholder="مثال: نام کاربری"
    />

    <BaseInputNumber
      v-model="fields.second"
      rounded="sm"
      label="Rounded: sm"
      placeholder="مثال: نام کاربری"
    />

    <BaseInputNumber
      v-model="fields.third"
      rounded="md"
      label="Rounded: md"
      placeholder="مثال: نام کاربری"
    />

    <BaseInputNumber
      v-model="fields.fourth"
      rounded="lg"
      label="Rounded: lg"
      placeholder="مثال: نام کاربری"
    />

    <BaseInputNumber
      v-model="fields.fifth"
      rounded="full"
      label="Rounded: full"
      placeholder="مثال: نام کاربری"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
})
<\/script>
`;export{n as default};
