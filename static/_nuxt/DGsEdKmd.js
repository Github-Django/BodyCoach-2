const n=`<template>
  <div class="grid gap-4 md:grid-cols-2">
    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="none"
    />

    <BaseAccordion :items="accordion" rounded="sm" />

    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="md"
    />

    <BaseAccordion
      :items="accordion"
      exclusive
      rounded="lg"
    />
  </div>
</template>

<script setup lang="ts">
// demo data for the accordion
const accordion = [
  {
    title: 'آکاردئون آیتم ۱',
    content:
      'لورم ایپسوم متن ساختگی است. پس چگونه؟ از کجا شروع کنیم؟ اولین چیزی که می‌گویی چیست؟ دو پادشاه: ساخت اینترنت.',
  },
  {
    title: 'آکاردئون آیتم ۲',
    content:
      'لورم ایپسوم متن ساختگی است. پس چگونه؟ از کجا شروع کنیم؟ اولین چیزی که می‌گویی چیست؟ دو پادشاه: ساخت اینترنت.',
  },
  {
    title: 'آکاردئون آیتم ۳',
    content:
      'لورم ایپسوم متن ساختگی است. پس چگونه؟ از کجا شروع کنیم؟ اولین چیزی که می‌گویی چیست؟ دو پادشاه: ساخت اینترنت.',
  },
]
<\/script>
`;export{n as default};
