const n=`<template>
  <div class="flex flex-wrap items-end justify-end gap-6">
    <TairoPopover size="sm" placement="bottom-end">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 size-4" />

        <span class="font-sans text-sm">متن کمک</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="طراحی جدید"
          subtitle="افزودن طرح‌های جدید"
          text="لورم ایپسوم دولور سیت آمیت، کانسکتتور آدیپیسینگ الیت سولور
                      مورانیتور لوبیس ام."
          icon="lucide:gem"
          icon-color="info"
        />
      </template>
    </TairoPopover>

    <TairoPopover size="sm" placement="bottom-end">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 size-4" />

        <span class="font-sans text-sm">متن کمک</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="خطا"
          subtitle="Handling errors"
          text="لورم ایپسوم دولور سیت آمیت، کانسکتتور آدیپیسینگ الیت سولور
                      مورانیتور لوبیس ام."
          icon="lucide:x-octagon"
          icon-color="danger"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;export{n as default};
