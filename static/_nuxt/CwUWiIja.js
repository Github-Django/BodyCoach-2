const n=`<template>
  <div class="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
    <BaseMessage icon rounded="sm">
      یک پیام موفق.
    </BaseMessage>

    <BaseMessage
      color="info"
      icon
      rounded="md"
    >
      یک پیام اطلاعاتی.
    </BaseMessage>

    <BaseMessage
      color="warning"
      icon
      rounded="lg"
    >
      یک پیام هشدار.
    </BaseMessage>

    <BaseMessage
      color="danger"
      icon
      rounded="full"
    >
      یک پیام مخرب.
    </BaseMessage>
  </div>
</template>
`;export{n as default};
