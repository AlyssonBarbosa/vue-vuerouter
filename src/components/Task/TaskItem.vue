<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :readonly="true"
        :value="task.title"
        placeholder="Input title"
      />
    </div>
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({
      id: "",
      state: "",
      title: "",
    }),
  },
});

const taskClass = computed(() => {
  return `list-item ${props.task.state}`;
});

const isChecked = computed(() => {
  return props.task.state === "TASK_ARCHIVED";
});
</script>
