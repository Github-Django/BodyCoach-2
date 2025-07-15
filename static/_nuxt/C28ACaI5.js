const n=`<template>
  <div class="grid items-center gap-8 md:grid-cols-2">
    <AddonMarkdownRemark :source="markdown" />

    <BaseTextarea
      v-model="markdown"
      autogrow
    />
  </div>
</template>

<script setup lang="ts">
const markdown = ref([
  '# Hello world',
  '',
  \`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.\`,
  '',
  '\`\`\`js',
  'const hello = "world"',
  '\`\`\`',
].join('\\n'))
<\/script>
`;export{n as default};
