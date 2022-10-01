import TaskItem from "./TaskItem.vue";

import { action } from "@storybook/addon-actions";

export default {
  title: "TaskItem",
  component: { TaskItem },
  argTypes: {
    task: "Object",
  },
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const TaskData = {
  id: "1",
  title: "Test Task",
  state: "Task_INBOX",
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const taskTemplate = `<TaskItem :task="task" />`;

export const Default = () => ({
  components: { TaskItem },
  template: taskTemplate,
  props: {
    task: {
      default: () => TaskData,
    },
  },
  methods: actionsData,
});

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TaskItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: taskTemplate,
  props: {
    task: {
      default: () => TaskData,
    },
  },
});

export const Pinned = () => ({
  components: { TaskItem },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...TaskData,
        state: "TASK_PINNED",
      }),
    },
  },
  methods: actionsData,
});

export const Archived = () => ({
  components: { TaskItem },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...TaskData,
        state: "TASK_ARCHIVED",
      }),
    },
  },
  methods: actionsData,
});
