const n=`<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="button"
      label="منوی کشویی"
      placement="bottom-start"
      header-label="تیم من"
    >
      <BaseDropdownItem
        to="#"
        title="لانا جنسن"
        text="مهندس نرم‌افزار"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="شاون میلر"
        text="مدیر محصول"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="جان مارینسکی"
        text="مدیر فروش"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/18.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivider />

      <BaseDropdownItem
        to="#"
        title="گری پورتر"
        text="مدیر عامل - بنیان‌گذار"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/6.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
`;export{n as default};
