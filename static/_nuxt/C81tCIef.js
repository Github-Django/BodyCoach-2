const n=`<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseSwitchThin
      v-model="values.primary"
      label="Primary"
      color="primary"
    />

    <BaseSwitchThin
      v-model="values.info"
      label="اطلاعات"
      color="info"
    />

    <BaseSwitchThin
      v-model="values.success"
      label="موفقیت"
      color="success"
    />

    <BaseSwitchThin
      v-model="values.warning"
      label="هشدار"
      color="warning"
    />

    <BaseSwitchThin
      v-model="values.danger"
      label="خطر"
      color="danger"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const values = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
})
<\/script>
`;export{n as default};
