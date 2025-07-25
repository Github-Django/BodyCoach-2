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
            color="primary"
          >
            <template #start>
              <BaseSwitchBall
                :checked="model.includes('value_1')"
                value="demo-curved-1"
                rounded="curved"
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
            color="primary"
          >
            <template #start>
              <BaseSwitchBall
                :checked="model.includes('value_2')"
                value="demo-curved-2"
                rounded="curved"
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
            color="primary"
          >
            <template #start>
              <BaseSwitchBall
                :checked="model.includes('value_3')"
                value="demo-curved-3"
                rounded="curved"
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
