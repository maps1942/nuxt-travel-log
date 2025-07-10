<script setup lang="ts">
const props = defineProps<{
  icon: string;
  label: string;
  to: string;
  showLabel: boolean;
}>();
const route = useRoute();
</script>

<template>
  <div
    class="tooltip-right"
    :data-tip="showLabel ? undefined : props.label"
    :class="{ tooltip: !showLabel }"
  >
    <NuxtLink
      :to="props.to"
      :class="{
        'bg-base-200': route.path === props.to,
        'justify-center': !props.showLabel,
        'justify-start': props.showLabel,
      }"
      class="btn btn-ghost gap-2 p-2 bg-base-100 hover:bg-base-300 hover:cursor-pointer flex-nowrap"
    >
      <Icon :name="props.icon" size="24" />
      <Transition name="grow">
        <span v-if="props.showLabel">
          {{ props.label }}
        </span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.5s;
}
.grow-leave-active {
  animation: grow 0.5s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
