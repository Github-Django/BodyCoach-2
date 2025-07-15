const e=`<template>
  <BasePlaceholderPage
    title="به نظر می‌رسد شما جدید هستید!"
    subtitle="لورم ایپسوم متن ساختگی است. واقعاً پولمونیس بود. دو پادشاه."
  >
    <template #image>
      <img src="/img/illustrations/placeholders/people/1.svg" alt="placeholder-image">
    </template>

    <div class="mt-2 flex justify-center gap-2">
      <BaseButton
        color="default"
        rounded="lg"
        class="h-11 w-32"
      >
        بازگشت به خانه
      </BaseButton>

      <BaseButton
        color="primary"
        rounded="lg"
        class="h-11 w-32"
      >
        ویرایش پروفایل
      </BaseButton>
    </div>
  </BasePlaceholderPage>
</template>
`;export{e as default};
