const n=`<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseSelect
        v-model="first"
        size="sm"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          انتخاب یک قهرمان
        </option>

        <optgroup label="مارول">
          <option value="مرد آهنی">
            مرد آهنی
          </option>

          <option value="مگنیتو">
            مگنیتو
          </option>

          <option value="سایکلوپس">
            سایکلوپس
          </option>
        </optgroup>

        <optgroup label="کمیک‌های دی‌سی">
          <option value="سوپرمن">
            سوپرمن
          </option>

          <option value="بتمن">
            بتمن
          </option>
        </optgroup>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="second"
        size="md"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          انتخاب یک قهرمان
        </option>

        <optgroup label="مارول">
          <option value="مرد آهنی">
            مرد آهنی
          </option>

          <option value="مگنیتو">
            مگنیتو
          </option>

          <option value="سایکلوپس">
            سایکلوپس
          </option>
        </optgroup>

        <optgroup label="کمیک‌های دی‌سی">
          <option value="سوپرمن">
            سوپرمن
          </option>

          <option value="بتمن">
            بتمن
          </option>
        </optgroup>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="third"
        size="lg"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          انتخاب یک قهرمان
        </option>

        <optgroup label="مارول">
          <option value="مرد آهنی">
            مرد آهنی
          </option>

          <option value="مگنیتو">
            مگنیتو
          </option>

          <option value="سایکلوپس">
            سایکلوپس
          </option>
        </optgroup>

        <optgroup label="کمیک‌های دی‌سی">
          <option value="سوپرمن">
            سوپرمن
          </option>

          <option value="بتمن">
            بتمن
          </option>
        </optgroup>
      </BaseSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
<\/script>
`;export{n as default};
