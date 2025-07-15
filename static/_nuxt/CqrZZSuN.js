const n=`<template>
  <div class="w-full max-w-sm">
    <BaseTabs
      type="box"
      model-value="team"
      :tabs="[
        {
          label: 'تیم',
          value: 'team',
          icon: 'ph:users-three-duotone',
        },
        {
          label: 'پروژه‌ها',
          value: 'projects',
          icon: 'ph:briefcase-duotone',
        },
        {
          label: 'وظایف',
          value: 'tasks',
          icon: 'ph:check-circle-duotone',
        },
      ]"
    >
      <template #tab="{ activeValue }">
        <p v-if="activeValue === 'team'" class="font-sans text-sm text-gray-500 dark:text-gray-400">
          لورم ایپسوم متن ساختگی است. حواس چگونه قضاوت می‌کنند؟ اولین چیزی که می‌گویی چیست؟ حتی سعادت؟ آیا نگران ربودن شاگرد نیستی؟
        </p>

        <p
          v-else-if="activeValue === 'projects'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          لورم ایپسوم متن ساختگی است. حواس چگونه قضاوت می‌کنند؟ اولین چیزی که می‌گویی چیست؟ حتی سعادت؟ آیا نگران ربودن شاگرد نیستی؟ اینها دقیقاً علیه آریستون گفته می‌شوند توسط کریپپو. دو پادشاه: ساخت اینترنت.
        </p>

        <p
          v-else-if="activeValue === 'tasks'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          لورم ایپسوم متن ساختگی است. حواس چگونه قضاوت می‌کنند؟ اولین چیزی که می‌گویی چیست؟ حتی سعادت؟ آیا نگران ربودن شاگرد نیستی؟ اینها دقیقاً علیه آریستون گفته می‌شوند.
        </p>
      </template>
    </BaseTabs>
  </div>
</template>
`;export{n as default};
