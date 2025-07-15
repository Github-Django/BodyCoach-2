const n=`<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover
      size="sm"
      fixed
    >
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 size-4" />

        <span class="font-sans text-sm">متن کمک</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="Cookies"
          subtitle="مدیریت کوکی‌ها"
          text="لورم ایپسوم دولور سیت آمیت، کانسکتتور آدیپیسینگ الیت سولور
                      مورانیتور لوبیس ام."
          icon="lucide:cookie"
        />
      </template>
    </TairoPopover>

    <TairoPopover size="sm">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 size-4" />

        <span class="font-sans text-sm">متن کمک</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="داشبورد"
          subtitle="افزودن ویجت‌های جدید"
          text="لورم ایپسوم دولور سیت آمیت، کانسکتتور آدیپیسینگ الیت سولور
                      مورانیتور لوبیس ام."
          icon="lucide:layout-dashboard"
          icon-color="success"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;export{n as default};
