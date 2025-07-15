const e=`<template>
  <TairoTable rounded="sm">
    <template #header>
      <TairoTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selectAll"
            rounded="sm"
            color="primary"
          />
        </div>
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        همکار
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        تخصص
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        امتیاز
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        وضعیت
      </TairoTableHeading>

      <TairoTableHeading uppercase class="p-4">
        <span class="sr-only">نمایش</span>
      </TairoTableHeading>
    </template>

    <TairoTableRow v-for="member in team" :key="member.id">
      <TairoTableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="\`table-4-\${member.id}\`"
            rounded="sm"
            color="primary"
          />
        </div>
      </TairoTableCell>

      <TairoTableCell>
        <div class="flex items-center">
          <BaseAvatar :src="member.src" size="sm" />

          <div class="ms-3 leading-none">
            <h4 class="font-sans text-sm font-medium">
              {{ member.name }}
            </h4>

            <p class="text-muted-400 font-sans text-xs font-normal">
              {{ member.role }}
            </p>
          </div>
        </div>
      </TairoTableCell>

      <TairoTableCell light>
        {{ member.expertise }}
      </TairoTableCell>

      <TairoTableCell>{{ member.rate }} تومان / ساعتی</TairoTableCell>

      <TairoTableCell>
        <BaseTag
          v-if="member.status === 'Available'"
          color="success"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === 'New'"
          color="info"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === 'استخدام شده'"
          color="warning"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>
      </TairoTableCell>

      <TairoTableCell>
        <a
          href="#"
          class="text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
        >
          نمایش
        </a>
      </TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
const selected = ref([])
const selectAll = ref(false)

const team = [
  {
    id: 0,
    src: '/img/avatars/22.svg',
    name: 'آنا ورینکوف',
    role: 'طراح رابط کاربری / تجربه کاربری',
    expertise: 'طراحی تجربه کاربری',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    src: '/img/avatars/3.svg',
    name: 'جان کمبل',
    role: 'مدیر فروش',
    expertise: 'مدیریت',
    rate: 74,
    status: 'استخدام شده',
  },
  {
    id: 2,
    src: '/img/avatars/9.svg',
    name: 'بث دلانو',
    role: 'طراح محصول',
    expertise: 'محصول',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    src: '/img/avatars/14.svg',
    name: 'اندرو هیگز',
    role: 'مدیر پروژه',
    expertise: 'پروژه',
    rate: 69,
    status: 'New',
  },
]
<\/script>
`;export{e as default};
