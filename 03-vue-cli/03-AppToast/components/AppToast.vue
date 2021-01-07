<template>
  <div class="toasts">
      <div 
        class="toast" 
        :class="toast.type === 'success' ? 'toast_success' : 'toast_error'"
        v-for="toast in currentToasts" 
        :key="toast.key"
      >
        <app-icon :icon="toast.icon" />
        <span>{{ toast.message }}</span>
      </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data(){
    return{
      currentToasts: []
    }
  },

  methods: {
    error(message) {
      this.currentToasts.push({
      message,
      type: 'error',
      icon: 'alert-circle',
      key: Math.random(),
    });
      setTimeout(() => {
        this.currentToasts.splice(0, 1)
      }, DELAY);
    },

    success(message) {
      console.log('success');
      this.currentToasts.push({
      message,
      type: 'success',
      icon: 'check-circle',
    })
      setTimeout(() => {
        this.currentToasts.splice(0, 1)
      }, DELAY);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
