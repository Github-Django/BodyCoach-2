const n=`<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="context"
      label="منوی کشویی"
      placement="bottom-start"
    >
      <BaseDropdownItem
        to="#"
        title="پروفایل"
        text="نمایش پروفایل شما"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="پروژه‌ها"
        text="مشاهده پروژه‌های شما"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="تیم"
        text="مدیریت تیم شما"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="تنظیمات"
        text="تنظیم ترجیحات خود"
        rounded="sm"
      />
    </BaseDropdown>
  </div>
</template>
`;export{n as default};
