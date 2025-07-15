const e=`<template>
  <div class="relative flex">
    <div class="flex grow flex-col gap-1">
      <TairoTocAnchor label="مثال لینک سطح ۱" level="1" />

      <TairoTocAnchor label="مثال لینک سطح ۲" level="2" />

      <TairoTocAnchor label="مثال لینک سطح ۳" level="3" />

      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
      >
        <TairoTocAnchor
          label="مثال لینک سطح ۴"
          level="4"
          prefix="•"
          prefix-classes="opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5"
        />
      </BaseHeading>
    </div>

    <TairoToc />
  </div>
</template>
`;export{e as default};
