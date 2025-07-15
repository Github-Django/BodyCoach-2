const a=`<template>
  <div class="w-full max-w-sm">
    <BaseTabSlider
      v-slot="{ activeValue }"
      model-value="team"
      rounded="sm"
      :tabs="[
        { label: 'تیم', value: 'team' },
        { label: 'پروژه‌ها', value: 'projects' },
        { label: 'وظایف', value: 'tasks' },
      ]"
    >
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
    </BaseTabSlider>
  </div>
</template>
`;export{a as default};
