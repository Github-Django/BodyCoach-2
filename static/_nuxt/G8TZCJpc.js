const n=`<template>
  <div>
    <BaseButton @click="open('search')">
      باز کردن پنل
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
<\/script>
`;export{n as default};
