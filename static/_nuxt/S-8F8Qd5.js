const n=`<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      label="شماره تلفن"
      placeholder="مثال: +1 555 555 5555"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('')
<\/script>
`;export{n as default};
