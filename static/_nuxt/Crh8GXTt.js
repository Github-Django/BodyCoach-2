const n=`<template>
  <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseSelect
      v-model="options.first"
      rounded="none"
      label="Rounded: none"
    >
      <option value="">
        انتخاب یک قهرمان
      </option>

      <option value="سوپرمن">
        سوپرمن
      </option>

      <option value="بتمن">
        بتمن
      </option>

      <option value="مرد آهنی">
        مرد آهنی
      </option>

      <option value="مگنیتو">
        مگنیتو
      </option>

      <option value="سایکلوپس">
        سایکلوپس
      </option>
    </BaseSelect>

    <BaseSelect
      v-model="options.second"
      rounded="sm"
      label="Rounded: sm"
    >
      <option value="">
        انتخاب یک قهرمان
      </option>

      <option value="سوپرمن">
        سوپرمن
      </option>

      <option value="بتمن">
        بتمن
      </option>

      <option value="مرد آهنی">
        مرد آهنی
      </option>

      <option value="مگنیتو">
        مگنیتو
      </option>

      <option value="سایکلوپس">
        سایکلوپس
      </option>
    </BaseSelect>

    <BaseSelect
      v-model="options.third"
      rounded="md"
      label="Rounded: md"
    >
      <option value="">
        انتخاب یک قهرمان
      </option>

      <option value="سوپرمن">
        سوپرمن
      </option>

      <option value="بتمن">
        بتمن
      </option>

      <option value="مرد آهنی">
        مرد آهنی
      </option>

      <option value="مگنیتو">
        مگنیتو
      </option>

      <option value="سایکلوپس">
        سایکلوپس
      </option>
    </BaseSelect>

    <BaseSelect
      v-model="options.fourth"
      rounded="lg"
      label="Rounded: lg"
    >
      <option value="">
        انتخاب یک قهرمان
      </option>

      <option value="سوپرمن">
        سوپرمن
      </option>

      <option value="بتمن">
        بتمن
      </option>

      <option value="مرد آهنی">
        مرد آهنی
      </option>

      <option value="مگنیتو">
        مگنیتو
      </option>

      <option value="سایکلوپس">
        سایکلوپس
      </option>
    </BaseSelect>

    <BaseSelect
      v-model="options.fifth"
      rounded="full"
      label="Rounded: full"
    >
      <option value="">
        انتخاب یک قهرمان
      </option>

      <option value="سوپرمن">
        سوپرمن
      </option>

      <option value="بتمن">
        بتمن
      </option>

      <option value="مرد آهنی">
        مرد آهنی
      </option>

      <option value="مگنیتو">
        مگنیتو
      </option>

      <option value="سایکلوپس">
        سایکلوپس
      </option>
    </BaseSelect>
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})
<\/script>
`;export{n as default};
