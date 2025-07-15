const n=`<template>
  <div class="max-w-md">
    <form
      action=""
      method="POST"
      @submit.prevent
    >
      <TairoFormGroup label="شما کی هستید؟" sublabel="نام خود را به ما اطلاع دهید">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="firstName"
              label="نام"
              placeholder="مثال: امیلی"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="نام خانوادگی"
              placeholder="مثال: والترز"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="email"
              label="آدرس ایمیل"
              placeholder="مثال: emilywalters@eltheme.ir"
            />
          </div>
        </div>
      </TairoFormGroup>
    </form>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
<\/script>
`;export{n as default};
