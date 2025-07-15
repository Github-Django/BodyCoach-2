const e=`<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="منوی کشویی"
      placement="bottom-start"
      size="lg"
    >
      <div class="relative p-2">
        <BaseInput
          icon="lucide:search"
          rounded="sm"
          placeholder="جستجوی کاربران..."
        />
      </div>

      <div class="nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2">
        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_1">
            <BaseDropdownItem
              to="#"
              title="جان رولند"
              text="مهندس نرم‌افزار"
              rounded="sm"
              color="primary"
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
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_2">
            <BaseDropdownItem
              to="#"
              title="پائولا هارتلی"
              text="مدیر فروش"
              rounded="sm"
              color="primary"
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
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_3">
            <BaseDropdownItem
              to="#"
              title="جان لاک"
              text="ماجراجو"
              rounded="sm"
              color="primary"
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

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_4">
            <BaseDropdownItem
              to="#"
              title="آدریان اسمیت"
              text="توسعه‌دهنده وب"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_4"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_5">
            <BaseDropdownItem
              to="#"
              title="کلارنس نلسون"
              text="معمار راه‌حل"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_5"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_6">
            <BaseDropdownItem
              to="#"
              title="جان بکستر"
              text="حسابدار ارشد"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_6"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_7">
            <BaseDropdownItem
              to="#"
              title="مایک پندلتون"
              text="افسر عملیات"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_7"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>
      </div>

      <div class="relative p-2">
        <BaseButton
          size="sm"
          variant="pastel"
          color="danger"
          class="w-full"
        >
          <Icon name="lucide:user-minus" class="size-4" />

          <span>حذف کاربر</span>
        </BaseButton>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const model = ref(['value_1'])
<\/script>
`;export{e as default};
