const e=`<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-1"
      label="گزینه ۱"
      value="گزینه ۱"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-2"
      label="گزینه ۲"
      value="گزینه ۲"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-3"
      label="گزینه ۳"
      value="گزینه ۳"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-4"
      label="گزینه ۴"
      value="گزینه ۴"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-5"
      label="گزینه ۵"
      value="گزینه ۵"
      rounded="lg"
      color="muted"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const value = ref(['گزینه ۱', 'گزینه ۲'])
<\/script>
`;export{e as default};
