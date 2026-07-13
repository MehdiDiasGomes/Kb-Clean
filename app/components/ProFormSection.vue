<template>
  <section id="contact" class="bg-navy-950 py-20">
    <div class="mx-auto max-w-[1180px] px-8">
      <div class="mb-12 text-center">
        <span class="mb-2.5 block text-[12.5px] font-black uppercase tracking-[1.5px] text-turquoise">
          {{ $t('proForm.eyebrow') }}
        </span>
        <h2 class="text-[32px] font-black text-white">{{ $t('proForm.title') }}</h2>
        <p class="mx-auto mt-3 max-w-[560px] text-[15px] leading-relaxed text-[#7d93a8]">
          {{ $t('proForm.subtitle') }}
        </p>
      </div>

      <div class="mx-auto max-w-2xl">
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="pro-lastname" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
                {{ $t('proForm.fields.lastName') }}
              </label>
              <input
                id="pro-lastname"
                v-model="form.lastName"
                type="text"
                :placeholder="$t('proForm.fields.lastNamePlaceholder')"
                required
                class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
              />
            </div>
            <div>
              <label for="pro-firstname" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
                {{ $t('proForm.fields.firstName') }}
              </label>
              <input
                id="pro-firstname"
                v-model="form.firstName"
                type="text"
                :placeholder="$t('proForm.fields.firstNamePlaceholder')"
                required
                class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
              />
            </div>
          </div>

          <div>
            <label for="pro-society" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
              {{ $t('proForm.fields.society') }}
            </label>
            <input
              id="pro-society"
              v-model="form.society"
              type="text"
              :placeholder="$t('proForm.fields.societyPlaceholder')"
              class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="pro-phone" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
                {{ $t('proForm.fields.phone') }}
              </label>
              <input
                id="pro-phone"
                v-model="form.phone"
                type="tel"
                :placeholder="$t('proForm.fields.phonePlaceholder')"
                required
                class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
              />
            </div>
            <div>
              <label for="pro-email" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
                {{ $t('proForm.fields.email') }}
              </label>
              <input
                id="pro-email"
                v-model="form.email"
                type="email"
                :placeholder="$t('proForm.fields.emailPlaceholder')"
                required
                class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
              />
            </div>
          </div>

          <div>
            <label for="pro-subject" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
              {{ $t('proForm.fields.subject') }}
            </label>
            <select
              id="pro-subject"
              v-model="form.subject"
              required
              class="w-full rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
            >
              <option value="" disabled>{{ $t('proForm.fields.subjectPlaceholder') }}</option>
              <option value="quote">{{ $t('proForm.subjects.quote') }}</option>
              <option value="meeting">{{ $t('proForm.subjects.meeting') }}</option>
              <option value="info">{{ $t('proForm.subjects.info') }}</option>
              <option value="other">{{ $t('proForm.subjects.other') }}</option>
            </select>
          </div>

          <div>
            <label for="pro-message" class="mb-1 block text-sm font-semibold text-[#dce8f0]">
              {{ $t('proForm.fields.message') }}
            </label>
            <textarea
              id="pro-message"
              v-model="form.message"
              rows="5"
              :placeholder="$t('proForm.fields.messagePlaceholder')"
              required
              class="w-full resize-none rounded-lg border border-line bg-navy-800/50 px-4 py-3 text-sm text-white placeholder-[#7d93a8] outline-none transition-colors focus:border-turquoise focus:ring-1 focus:ring-turquoise"
            />
          </div>

          <div
            v-if="formStatus"
            :class="[
              'rounded-lg p-3 text-sm font-semibold',
              formStatus === 'ok' ? 'text-green-400' : 'text-red-400',
            ]"
            role="alert"
          >
            {{ formStatus === 'ok' ? $t('proForm.success') : $t('proForm.error') }}
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-black text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-px hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            :aria-label="$t('proForm.submitAriaLabel')"
          >
            <Icon v-if="isSubmitting" name="Loader2" class="h-4 w-4 animate-spin" aria-hidden="true" />
            {{ isSubmitting ? $t('proForm.submitting') : $t('proForm.submit') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ProForm = {
  lastName: string
  firstName: string
  society: string
  phone: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'ok' | 'err' | null

const form = ref<ProForm>({
  lastName: '',
  firstName: '',
  society: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref<boolean>(false)
const formStatus = ref<FormStatus>(null)

const handleSubmit = async (): Promise<void> => {
  isSubmitting.value = true
  formStatus.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })
    formStatus.value = 'ok'
    form.value = { lastName: '', firstName: '', society: '', phone: '', email: '', subject: '', message: '' }
  } catch {
    formStatus.value = 'err'
  } finally {
    isSubmitting.value = false
  }
}
</script>
