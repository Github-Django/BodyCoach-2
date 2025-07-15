const e=`<template>
  <div class="w-full max-w-sm">
    <BaseTabs
      justify="center"
      model-value="team"
      :tabs="[
        { label: 'تیم', value: 'team' },
        { label: 'پروژه‌ها', value: 'projects' },
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
      </template>
    </BaseTabs>
  </div>
</template>
`;export{e as default};
