const e=`<template>
  <TairoFlexTable>
    <template #header>
      <TairoFlexTableHeading type="shrink">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selectAll"
            rounded="lg"
            color="primary"
          />
        </div>
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="grow">
        Member
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        تخصص
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        امتیاز
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        وضعیت
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        Actions
      </TairoFlexTableHeading>
    </template>

    <TairoFlexTableRow
      v-for="member in team"
      :key="member.id"
      rounded="lg"
    >
      <TairoFlexTableCell type="shrink" data-content="Selection">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="\`checkbox-\${member.id}\`"
            rounded="lg"
            class="text-primary-500"
          />
        </div>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="grow" data-content="Member">
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
      </TairoFlexTableCell>

      <TairoFlexTableCell
        type="stable"
        data-content="تخصص"
        light
      >
        {{ member.expertise }}
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="امتیاز">
        <span class="font-medium">{{ member.rate }} تومان / ساعتی</span>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="وضعیت">
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
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="Actions">
        <BaseButton
          color="primary"
          variant="outline"
          rounded="lg"
          class="scale-90"
        >
          نمایش
        </BaseButton>
      </TairoFlexTableCell>
    </TairoFlexTableRow>
  </TairoFlexTable>
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
