const n=`<template>
  <div class="grid gap-6 md:max-w-3xl md:grid-cols-2">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      :rows="6"
      addon
    >
      <template #addon>
        <div class="flex items-center gap-2">
          <BaseAvatar
            src="/img/avatars/2.svg"
            class="me-1"
            size="xs"
          />

          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            مایا
          </BaseHeading>
        </div>

        <div class="flex items-center gap-2">
          <BaseButton size="sm">
            ارسال نظر
          </BaseButton>
        </div>
      </template>
    </BaseTextarea>

    <BaseTextarea
      v-model="value"
      label="پیام"
      rounded="md"
      placeholder="نوشتن یک پیام..."
      :rows="6"
      addon
    >
      <template #addon>
        <div class="flex items-center gap-2">
          <BaseAvatar
            src="/img/avatars/2.svg"
            class="me-1"
            size="xs"
          />

          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            مایا
          </BaseHeading>
        </div>

        <div class="flex items-center gap-2">
          <BaseButton size="sm">
            ارسال نظر
          </BaseButton>
        </div>
      </template>
    </BaseTextarea>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;export{n as default};
