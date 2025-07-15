const t=`<template>
  <div>
    <BaseButton @click="open('activity')">
      باز کردن پنل
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
<\/script>
`;export{t as default};
