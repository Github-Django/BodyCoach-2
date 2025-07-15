const n=`<template>
  <div class="flex flex-wrap items-end gap-2">
    <BaseButtonIcon rounded="lg" data-nui-tooltip="وقت چرت زدن!">
      <Icon name="ph:timer-duotone" class="size-5 text-sky-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      rounded="lg"
      data-nui-tooltip-position="left"
      data-nui-tooltip="این را اکنون باز کنید!"
    >
      <Icon name="ph:lock-duotone" class="size-5 text-emerald-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      rounded="lg"
      data-nui-tooltip-position="right"
      data-nui-tooltip="کمی محبت بدهید!"
    >
      <Icon name="ph:heartbeat-duotone" class="size-5 text-rose-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      rounded="lg"
      data-nui-tooltip-position="down"
      data-nui-tooltip="پادشاه شمال!"
    >
      <Icon name="ph:crown-duotone" class="size-5 text-yellow-500" />
    </BaseButtonIcon>

    <BaseButtonAction rounded="lg" data-nui-tooltip="بفرمایید!">
      <Icon name="ph:bell-ringing-duotone" class="text-primary-500 -ms-1 me-2 size-4" />

      <span class="py-2">اشتراک</span>
    </BaseButtonAction>
  </div>
</template>
`;export{n as default};
