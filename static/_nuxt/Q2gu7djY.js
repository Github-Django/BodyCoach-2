const n=`<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseInput
      v-model="fields.first"
      rounded="none"
      label="Rounded: none"
      placeholder="مثال: نام کاربری"
    />

    <BaseInput
      v-model="fields.second"
      rounded="sm"
      label="Rounded: sm"
      placeholder="مثال: نام کاربری"
    />

    <BaseInput
      v-model="fields.third"
      rounded="md"
      label="Rounded: md"
      placeholder="مثال: نام کاربری"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="lg"
      label="Rounded: lg"
      placeholder="مثال: نام کاربری"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="full"
      label="Rounded: full"
      placeholder="مثال: نام کاربری"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
<\/script>
`;export{n as default};
