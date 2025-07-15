const n=`<template>
  <div class="flex flex-wrap items-end justify-end gap-6">
    <TairoPopover placement="bottom-end">
      <div class="flex items-center">
        <BaseAvatar src="/img/avatars/2.svg" />

        <span class="text-muted-800 ms-3 font-sans text-sm font-medium dark:text-white">
          مایا روسلینی
        </span>
      </div>

      <template #content>
        <TairoPopoverContentDual
          :stats="[
            {
              title: 'انگولار',
              subtitle: '16 پروژه',
              image: 'https://vuero.cssninja.io/images/icons/stacks/angular.svg',
            },
            {
              title: 'پروژه‌ها',
              subtitle: '56 پروژه',
              icon: 'ph:briefcase-duotone',
            },
          ]"
          image="/img/avatars/2.svg"
          title="مایا روسلینی"
          subtitle="مهندس نرم‌افزار"
          footer-title="55 تومان / ساعتی"
          footer-text="بر اساس ۵ شغل اخیر"
          link-label="استخدام کنید"
          link="/"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;export{n as default};
