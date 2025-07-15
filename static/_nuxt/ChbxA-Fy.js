const e=`<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover placement="bottom-start">
      <div class="flex items-center">
        <span
          class="border-muted-300 text-muted-800 dark:border-muted-600 rounded-full border px-3 py-1.5 font-sans text-sm font-medium dark:text-white"
        >
          خانه زیبا
        </span>
      </div>

      <template #content>
        <TairoPopoverContentMedia
          :images="[
            'https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300',
            'https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150',
            'https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150',
          ]"
          title="خانه"
          subtitle="۵ اتاق"
          text="لورم ایپسوم متن ساختگی است. چه کسی می‌تواند آن را به یک خردمند ثابت کند؟"
          footer-title="$150/night"
          footer-text="خیابان کلمبیا ۱۴، بلوک C"
          link-label="اکنون اجاره کنید"
          to="#"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;export{e as default};
