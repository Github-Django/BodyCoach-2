const t=`<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover placement="bottom-start">
      <div class="flex items-center">
        <BaseAvatar src="/img/avatars/3.svg" />

        <span class="font-heading text-muted-800 ms-3 text-sm font-medium dark:text-white">
          مایک میلر
        </span>
      </div>

      <template #content>
        <TairoPopoverContentDual
          :stats="[
            {
              title: 'جاوااسکریپت',
              subtitle: '65 پروژه',
              image: 'https://vuero.cssninja.io/images/icons/stacks/js.svg',
            },
            {
              title: 'پروژه‌ها',
              subtitle: '154 پروژه',
              icon: 'ph:briefcase-duotone',
            },
          ]"
          image="/img/avatars/3.svg"
          title="مایک میلر"
          subtitle="مهندس نرم‌افزار"
          footer-title="4,800,000 تومان / ساعتی"
          footer-text="بر اساس ۵ شغل اخیر"
          link-label="استخدام کنید"
          link="/"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;export{t as default};
