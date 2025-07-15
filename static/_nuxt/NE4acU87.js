const n=`<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect
      v-model="first"
      size="sm"
      rounded="md"
      label="Rounded: md"
      label-float
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
      v-model="first"
      icon="fa6-solid:mask"
      size="sm"
      rounded="md"
      label="Rounded: md"
      label-float
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
      v-model="second"
      size="md"
      rounded="md"
      label="Rounded: md"
      label-float
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
      v-model="second"
      icon="fa6-solid:mask"
      size="md"
      rounded="md"
      label="Rounded: md"
      label-float
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
      v-model="third"
      size="lg"
      rounded="md"
      label="Rounded: md"
      label-float
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
      v-model="third"
      icon="fa6-solid:mask"
      size="lg"
      rounded="md"
      label="Rounded: md"
      label-float
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
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
<\/script>
`;export{n as default};
