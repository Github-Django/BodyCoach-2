const n=`<template>
  <div class="md:max-w-lg">
    <BaseAccordion :items="accordion" />
  </div>
</template>

<script setup lang="ts">
// demo data for the accordion
const accordion = ref([
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
])
<\/script>
`;export{n as default};
