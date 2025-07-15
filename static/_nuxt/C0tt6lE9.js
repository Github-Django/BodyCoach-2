const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        icon="lucide:search"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="مثال: نام کاربری"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        icon="lucide:search"
        size="md"
        rounded="md"
        label="اندازه: md"
        placeholder="مثال: نام کاربری"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        icon="lucide:search"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="مثال: نام کاربری"
      />
    </div>
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
