const n=`<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
      <BaseCheckboxAnimated
        v-model="options"
        value="گزینه ۱"
        color="primary"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="گزینه ۲"
        color="info"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="گزینه ۳"
        color="success"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="گزینه ۴"
        color="warning"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="گزینه ۵"
        color="danger"
      />
    </BaseFocusLoop>
  </div>
</template>

<script setup lang="ts">
const options = ref([
  'گزینه ۱',
  'گزینه ۲',
  'گزینه ۳',
  'گزینه ۴',
  'گزینه ۵',
  'گزینه ۶',
  'گزینه ۷',
  'گزینه ۸',
  'گزینه ۹',
  'گزینه ۱۰',
  'گزینه ۱۱',
  'گزینه ۱۲',
  'گزینه ۱۳',
  'گزینه ۱۴',
  'گزینه ۱۵',
  'گزینه ۱۶',
  'گزینه ۱۷',
  'گزینه ۱۸',
  'گزینه ۱۹',
])
<\/script>
`;export{n as default};
