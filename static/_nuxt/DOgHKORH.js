const n=`<template>
  <div>
    <BaseButton @click="open('language')">
      باز کردن پنل
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
<\/script>
`;export{n as default};
