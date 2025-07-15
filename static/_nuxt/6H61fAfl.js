const n=`<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModal2XlOpen = true">
        <Icon name="lucide:app-window" class="w-4" />
        2XL dialog
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModal3XlOpen = true">
        <Icon name="lucide:app-window" class="w-4" />
        دیالوگ ۳XL
      </BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <TairoModal
    :open="isModal2XlOpen"
    size="2xl"
    @close="isModal2XlOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          2دیالوگ XL
        </h3>

        <BaseButtonClose @click="isModal2XlOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/13.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          دعوت جدید
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal2XlOpen = false">
            رد کردن
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModal2XlOpen = false"
          >
            قبول
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModal3XlOpen"
    size="3xl"
    @close="isModal3XlOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          دیالوگ ۳XL
        </h3>

        <BaseButtonClose @click="isModal3XlOpen = false" />
      </div>
    </template>
    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/17.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          دعوت جدید
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal3XlOpen = false">
            رد کردن
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModal3XlOpen = false"
          >
            قبول
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModal2XlOpen = ref(false)
const isModal3XlOpen = ref(false)
<\/script>
`;export{n as default};
