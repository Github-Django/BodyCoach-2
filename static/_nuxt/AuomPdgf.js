const n=`<template>
  <BaseFocusLoop
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
  >
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      rounded="lg"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      rounded="lg"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="اطلاعات"
      rounded="lg"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="موفقیت"
      rounded="lg"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="هشدار"
      rounded="lg"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="خطر"
      rounded="lg"
      color="danger"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const first = ref(false)
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
