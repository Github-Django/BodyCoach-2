const n=`<template>
  <div class="max-w-md">
    <form
      action=""
      method="POST"
      class="space-y-10"
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

      <TairoFormGroup label="کجا زندگی می‌کنید؟" sublabel="مکان خود را به ما اطلاع دهید">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseSelect v-model="country" label="کشور">
              <option value="">
                انتخاب یک کشور
              </option>

              <option value="italy">
                ایالات متحده
              </option>

              <option value="italy">
                ایتالیا
              </option>

              <option value="france">
                فرانسه
              </option>

              <option value="spain">
                اسپانیا
              </option>

              <option value="germany">
                آلمان
              </option>

              <option value="portugal">
                چین
              </option>
            </BaseSelect>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="شهر"
              placeholder="مثال: میلان"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="address"
              label="آدرس"
              placeholder="مثال: ۲۳ام شرقی، جاده پلازای جمهوری، ۲۸۰۰۱"
            />
          </div>
        </div>
      </TairoFormGroup>

      <TairoFormSave />
    </form>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref('')
const address = ref('')
<\/script>
`;export{n as default};
