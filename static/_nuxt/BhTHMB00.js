const n=`<template>
  <BaseButtonGroup>
    <BaseButton color="muted">
      <span>USD</span>
    </BaseButton>

    <BaseInput
      v-model.number="amount"
      :classes="{
        wrapper: 'w-28',
      }"
      type="number"
      placeholder="0.00"
    />

    <BaseSelect
      v-model="taxes"
      :classes="{
        wrapper: 'w-36',
      }"
    >
      <option value="با مالیات">
        با مالیات
      </option>

      <option value="بدون مالیات">
        بدون مالیات
      </option>
    </BaseSelect>
  </BaseButtonGroup>
</template>

<script setup lang="ts">
const amount = ref<number | undefined>(undefined)
const taxes = ref('با مالیات')
<\/script>
`;export{n as default};
