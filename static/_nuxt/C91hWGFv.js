const e=`<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="منوی کشویی"
      placement="bottom-start"
    >
      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_1">
          <BaseDropdownItem
            to="#"
            title="شخصی"
            text="برخی اطلاعات مفید"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_1"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_2">
          <BaseDropdownItem
            to="#"
            title="شرکت"
            text="برخی اطلاعات مفید"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_2"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_3">
          <BaseDropdownItem
            to="#"
            title="غیرانتفاعی"
            text="برخی اطلاعات مفید"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_3"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const model = ref(['value_1'])
<\/script>
`;export{e as default};
