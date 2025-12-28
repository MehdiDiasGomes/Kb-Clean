<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <PageContainer>
    <section class="page-padding-x py-16">
      <div
        ref="elementRef"
        :class="['mx-auto max-w-5xl scroll-animate', isVisible && 'is-visible']"
      >
        <div class="space-y-12">
          <h1 class="text-center font-heading text-3xl text-foreground sm:text-4xl md:text-5xl">
            {{ $t('contact.title') }}
          </h1>

          <div class="grid gap-6 sm:grid-cols-3">
            <div class="flex flex-col items-center space-y-3 text-center">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Icon name="Phone" class="h-5 w-5 text-foreground" aria-hidden="true" />
              </div>
              <div class="space-y-1">
                <a
                  :href="`tel:${$t('contact.info.phone.number')}`"
                  class="block text-sm text-foreground hover:text-primary"
                >
                  {{ $t('contact.info.phone.display') }}
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center space-y-3 text-center">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Icon name="Mail" class="h-5 w-5 text-foreground" aria-hidden="true" />
              </div>
              <div class="space-y-1">
                <a
                  :href="`mailto:${$t('contact.info.email.address')}`"
                  class="block text-sm text-foreground hover:text-primary"
                >
                  {{ $t('contact.info.email.address') }}
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center space-y-3 text-center">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Icon name="MapPin" class="h-5 w-5 text-foreground" aria-hidden="true" />
              </div>
              <div class="space-y-1">
                <p class="text-sm text-foreground">
                  {{ $t('contact.info.address.line1') }}<br />
                  {{ $t('contact.info.address.line2') }}
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <h2 class="text-center text-2xl font-semibold text-foreground">
              {{ $t('contact.form.subtitle') }}
            </h2>

            <form class="space-y-6" @submit="onSubmit">
              <div class="grid gap-6 sm:grid-cols-2">
                <FormField #default="{ componentField }" name="requestType">
                  <FormItem>
                    <FormLabel>
                      {{ $t('contact.form.requestType.label') }}
                      <span class="text-destructive" :aria-label="$t('common.required')">*</span>
                    </FormLabel>
                    <Select v-bind="componentField">
                      <FormControl>
                        <SelectTrigger class="w-full">
                          <SelectValue :placeholder="$t('contact.form.requestType.placeholder')" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="demo">
                          {{ $t('contact.form.requestType.options.demo') }}
                        </SelectItem>
                        <SelectItem value="callback">
                          {{ $t('contact.form.requestType.options.callback') }}
                        </SelectItem>
                        <SelectItem value="quote">
                          {{ $t('contact.form.requestType.options.quote') }}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField #default="{ componentField }" name="companyName">
                  <FormItem>
                    <FormLabel>
                      {{ $t('contact.form.companyName.label') }}
                      <span class="text-muted-foreground">
                        {{ $t('contact.form.companyName.optional') }}
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        :placeholder="$t('contact.form.companyName.placeholder')"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <FormField #default="{ componentField }" name="lastName">
                  <FormItem>
                    <FormLabel>
                      {{ $t('contact.form.lastName.label') }}
                      <span class="text-destructive" :aria-label="$t('common.required')">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        :placeholder="$t('contact.form.lastName.placeholder')"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>

                <FormField #default="{ componentField }" name="email">
                  <FormItem>
                    <FormLabel>
                      {{ $t('contact.form.email.label') }}
                      <span class="text-destructive" :aria-label="$t('common.required')">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        :placeholder="$t('contact.form.email.placeholder')"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <FormField #default="{ componentField }" name="message">
                <FormItem>
                  <FormLabel>
                    {{ $t('contact.form.message.label') }}
                    <span class="text-destructive" :aria-label="$t('common.required')">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      :placeholder="$t('contact.form.message.placeholder')"
                      class="min-h-50"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <div class="flex justify-end">
                <Button type="submit" class="w-full sm:w-auto" :disabled="isSubmitting">
                  {{ isSubmitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

const formSchema = toTypedSchema(
  z.object({
    lastName: z.string().min(2, t('contact.form.validation.lastNameMin')),
    email: z.string().email(t('contact.form.validation.emailInvalid')),
    companyName: z.string().optional(),
    requestType: z.string().min(1, t('contact.form.validation.requestTypeRequired')),
    message: z.string().min(10, t('contact.form.validation.messageMin')),
  }),
)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    lastName: '',
    email: '',
    companyName: '',
    requestType: '',
    message: '',
  },
})

const isSubmitting = ref(false)

const onSubmit = form.handleSubmit(async values => {
  isSubmitting.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: values,
    })

    if (response.success) {
      toast.success(t('contact.form.success'))
      form.resetForm()
    }
  } catch {
    toast.error(t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
})

const { elementRef, isVisible } = useScrollAnimation(0.2)
</script>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}

:deep([data-slot='form-message']) {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
