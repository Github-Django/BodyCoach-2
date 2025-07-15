const n=`<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="demoBreadcrumbOne">
      /
    </BaseBreadcrumb>

    <BaseBreadcrumb :items="demoBreadcrumbTwo">
      /
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
`;export{n as default};
