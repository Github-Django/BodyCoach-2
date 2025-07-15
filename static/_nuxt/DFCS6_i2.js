const n=`<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="openModal">
        <Icon name="lucide:app-window" class="w-4" />
        دیالوگ کوچک
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModalMdOpen = true">
        <Icon name="lucide:app-window" class="w-4" />
        دیالوگ متوسط
      </BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <TairoModal
    :open="isModalOpen"
    size="sm"
    @close="closeModal"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          دیالوگ کوچک
        </h3>

        <BaseButtonClose @click="closeModal" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/3.svg"
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
          <BaseButton @click="closeModal">
            رد کردن
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="closeModal"
          >
            قبول
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModalMdOpen"
    size="md"
    @close="isModalMdOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          دیالوگ متوسط
        </h3>

        <BaseButtonClose @click="isModalMdOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/7.svg"
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
          <BaseButton @click="isModalMdOpen = false">
            رد کردن
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModalMdOpen = false"
          >
            قبول
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)

function closeModal() {
  isModalOpen.value = false
}
function openModal() {
  isModalOpen.value = true
}

const isModalMdOpen = ref(false)
<\/script>
`;export{n as default};
