const n=`<template>
  <BaseFocusLoop
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
  >
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      rounded="full"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      rounded="full"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      rounded="full"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="اطلاعات"
      rounded="full"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="موفقیت"
      rounded="full"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="هشدار"
      rounded="full"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="خطر"
      rounded="full"
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
