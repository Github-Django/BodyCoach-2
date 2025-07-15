const e=`<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="demoBreadcrumbOne">
      <Icon name="lucide:chevron-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>

    <BaseBreadcrumb :items="demoBreadcrumbTwo">
      <Icon name="lucide:chevron-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>
  </div>
</template>

<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'خانه',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'محصولات',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'لپ‌تاپ‌ها',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'خانه',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'محصولات',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: 'لپ‌تاپ‌ها',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#',
  },
]
<\/script>
`;export{e as default};
