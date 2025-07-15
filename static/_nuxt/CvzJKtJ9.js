const n=`<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="demoBreadcrumbOne">
      <Icon name="lucide:arrow-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>

    <BaseBreadcrumb :items="demoBreadcrumbTwo">
      <Icon name="lucide:arrow-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>
  </div>
</template>

<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'خانه',
    hideLabel: false,
    icon: 'ph:house-duotone',
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
    icon: 'ph:house-duotone',
    to: '#',
  },
  {
    label: 'محصولات',
    hideLabel: false,
    icon: 'ph:grid-four-duotone',
    to: '#',
  },
  {
    label: 'لپ‌تاپ‌ها',
    hideLabel: false,
    icon: 'ph:laptop-duotone',
    to: '#',
  },
]
<\/script>
`;export{n as default};
