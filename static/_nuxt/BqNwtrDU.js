const n=`<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="button"
      label="منوی کشویی"
      placement="bottom-start"
    >
      <BaseDropdownItem
        to="#"
        title="پروفایل"
        text="نمایش پروفایل شما"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:user-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="پروژه‌ها"
        text="مشاهده پروژه‌های شما"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:briefcase-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="تیم"
        text="مدیریت تیم شما"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:users-four-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivider />

      <BaseDropdownItem
        to="#"
        title="تنظیمات"
        text="تنظیم ترجیحات خود"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:gear-six-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
`;export{n as default};
