const n=`<template>
  <div class="flex w-full justify-end">
    <BaseDropdown
      variant="text"
      label="منوی کشویی"
      placement="bottom-end"
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
