const n=`<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="منوی کشویی"
      placement="bottom-start"
    >
      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseRadioHeadless
          v-model="value"
          value="personal"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="شخصی"
            text="برخی اطلاعات مفید"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="personal"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseRadioHeadless
          v-model="value"
          value="company"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="شرکت"
            text="برخی اطلاعات مفید"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="company"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseRadioHeadless
          v-model="value"
          value="nonprofit"
          name="demo_radio_dropdown"
        >
          <BaseDropdownItem
            to="#"
            title="غیرانتفاعی"
            text="برخی اطلاعات مفید"
            rounded="sm"
            color="primary"
          >
            <template #start>
              <BaseRadio
                v-model="value"
                value="nonprofit"
                rounded="curved"
                color="primary"
                name="demo_radio_dropdown"
              />
            </template>
          </BaseDropdownItem>
        </BaseRadioHeadless>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const value = ref('personal')
<\/script>
`;export{n as default};
