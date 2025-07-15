const n=`<template>
  <div>
    <BaseButton @click="open('task', { task: task })">
      باز کردن پنل
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()

const task = {
  id: 0,
  name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
  description:
    'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
  completion: 100,
  status: 5,
  created: '۲ روز پیش',
  assignee: {
    id: 27,
    src: '/img/avatars/24.svg',
    badge: '/img/stacks/illustrator.svg',
    role: 'طراح رابط کاربری / تجربه کاربری',
    bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
    tooltip: 'Carmen E.',
    text: 'CE',
  },
  files: [
    {
      id: 0,
      name: 'company-ux-guide.pdf',
      icon: '/img/icons/files/pdf.svg',
      size: '4.7MB',
      version: '1.5.2',
      uploaded: '2 weeks ago',
      author: {
        name: 'Hermann M.',
        picture: '/img/avatars/16.svg',
      },
    },
    {
      id: 1,
      name: 'project_sketches.ai',
      icon: '/img/icons/files/ai.svg',
      size: '8.9MB',
      version: '1.1.3',
      uploaded: 'یک هفته پیش',
      author: {
        name: 'کلاریسا م.',
        picture: '/img/avatars/5.svg',
      },
    },
  ],
  checklist: [
    {
      text: 'ایجاد مجموعه‌ای از عناصر دکمه',
      done: true,
    },
    {
      text: 'ایجاد مجموعه‌ای از عناصر نشان',
      done: true,
    },
    {
      text: 'ایجاد مجموعه‌ای از عناصر ورودی',
      done: true,
    },
    {
      text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
      done: true,
    },
    {
      text: 'ایجاد مجموعه‌ای از المان‌های کارت',
      done: true,
    },
  ],
  comments: [
    {
      text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
      author: {
        name: 'Marjory L.',
        picture: '/img/avatars/12.svg',
        posted: '۲ روز پیش',
      },
    },
    {
      text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
      author: {
        name: 'کندرا و.',
        picture: '/img/avatars/10.svg',
        posted: '۲ روز پیش',
      },
    },
    {
      text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
      author: {
        name: 'Marjory L.',
        picture: '/img/avatars/12.svg',
        posted: '۲ روز پیش',
      },
    },
  ],
}
<\/script>
`;export{n as default};
