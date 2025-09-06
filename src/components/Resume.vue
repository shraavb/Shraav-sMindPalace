<template>
  <div v-if="show" class="resume-modal-overlay" @click="closeModal">
    <div class="resume-modal" :class="{ 'dark-mode': nightMode }" @click.stop>
      <div class="resume-header">
        <h3 class="resume-title">Resume</h3>
      </div>
      <div class="resume-content">
        <iframe 
          :src="resumeUrl" 
          width="100%" 
          height="600px"
          frameborder="0"
          class="resume-iframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    nightMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      resumeUrl: "/resume.pdf"
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.resume-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.resume-modal {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.resume-title {
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}


.resume-content {
  padding: 0;
  height: 600px;
}

.resume-iframe {
  border: none;
  width: 100%;
  height: 100%;
}

/* Dark mode styles */
.resume-modal.dark-mode {
  background: #2c3e50;
}

.resume-modal.dark-mode .resume-header {
  background-color: #34495e;
  border-bottom-color: #4a5f7a;
}

.resume-modal.dark-mode .resume-title {
  color: #ecf0f1;
}


@media (max-width: 768px) {
  .resume-modal {
    width: 95%;
    margin: 10px;
  }
  
  .resume-content {
    height: 500px;
  }
  
  .resume-iframe {
    height: 500px;
  }
}
</style>
