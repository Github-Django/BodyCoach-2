const e=`<template>
  <div class="w-full">
    <form class="mx-auto w-full">
      <fieldset class="w-full space-y-6">
        <div
          class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"
        >
          <legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium">
            انتخاب افراد
          </legend>

          <button
            type="reset"
            class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
            @click.prevent="reset"
          >
            Cancel
          </button>
        </div>

        <div class="grid gap-6 sm:grid-cols-3">
          <BaseCheckboxHeadless v-model="value" value="team_member_1">
            <BaseCard
              rounded="sm"
              class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            >
              <div class="flex w-full items-center gap-2">
                <BaseAvatar src="/img/avatars/10.svg" />

                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    کندرا ویلسون
                  </BaseHeading>

                  <BaseText size="xs" class="text-muted-400">
                    مهندس نرم‌افزار
                  </BaseText>
                </div>

                <div class="child text-muted-300 ms-auto">
                  <div class="size-3 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>

          <BaseCheckboxHeadless v-model="value" value="team_member_2">
            <BaseCard
              rounded="sm"
              class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            >
              <div class="flex w-full items-center gap-2">
                <BaseAvatar src="/img/avatars/16.svg" />

                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    هرمان مایر
                  </BaseHeading>

                  <BaseText size="xs" class="text-muted-400">
                    مدیر فروش
                  </BaseText>
                </div>

                <div class="child text-muted-300 ms-auto">
                  <div class="size-3 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>

          <BaseCheckboxHeadless v-model="value" value="team_member_3">
            <BaseCard
              rounded="sm"
              class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            >
              <div class="flex w-full items-center gap-2">
                <BaseAvatar src="/img/avatars/25.svg" />

                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    ملانی لاورایت
                  </BaseHeading>

                  <BaseText size="xs" class="text-muted-400">
                    مدیر منابع انسانی
                  </BaseText>
                </div>

                <div class="child text-muted-300 ms-auto">
                  <div class="size-3 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
const value = ref([])

function reset() {
  value.value = []
}
<\/script>
`;export{e as default};
