const n=`<template>
  <BaseFocusLoop
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
  >
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      rounded="md"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      rounded="md"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      rounded="md"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="اطلاعات"
      rounded="md"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="موفقیت"
      rounded="md"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="هشدار"
      rounded="md"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="خطر"
      rounded="md"
      color="danger"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  sixth: true,
  seventh: true,
})
<\/script>
`;export{n as default};
