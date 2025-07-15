const n=`<template>
  <form class="max-w-md" @submit.prevent="onSubmit">
    <AddonInputPhone
      ref="inputRef"
      v-model="phone"
      placeholder="برای تست اعتبارسنجی تایپ کنید"
      :error="error"
      @validation="onValidate"
    />
  </form>
</template>

<script lang="ts" setup>
import { AddonInputPhone } from '#components'

const phone = ref('012345')
const error = ref('')

const inputRef = ref<InstanceType<typeof AddonInputPhone>>()

function onSubmit() {
  if (!inputRef.value?.validation?.valid) {
    error.value = 'لطفاً یک شماره تلفن معتبر وارد کنید'
    return
  }

  alert(\`Selected: \${inputRef.value?.currentCountry?.label}\`)
}

function onValidate(state: { valid: boolean, touched: boolean, error: string }) {
  if (!state.error) {
    error.value = ''
    return
  }
  switch (state.error) {
    case 'INVALID_COUNTRY':
      error.value = 'لطفاً یک کشور انتخاب کنید'
      break
    case 'NO_POSSIBLE_COUNTRIES':
      error.value = 'کشورهای ممکن برای این شماره تلفن موجود نیستند'
      break
    case 'PHONE_NUMBER_NOT_POSSIBLE':
      error.value = 'این شماره تلفن برای کشور انتخاب شده معتبر نیست'
      break
    case 'NOT_A_NUMBER':
    case 'TOO_SHORT':
    case 'TOO_LONG':
    default:
      error.value = 'لطفاً یک شماره تلفن معتبر وارد کنید'
      break
  }
}
<\/script>
`;export{n as default};
