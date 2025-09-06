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
          @load="onIframeLoad"
          @error="onIframeError"
        ></iframe>
        <div v-if="loading" class="loading-message">
          Loading resume...
        </div>
        <div v-if="error" class="error-message">
          <p>Unable to load resume. Please try again or download directly.</p>
          <a :href="resumeUrl" target="_blank" class="download-link">Download Resume</a>
        </div>
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
      resumeUrl: process.env.NODE_ENV === 'production' ? './resume.pdf' : '/resume.pdf',
      loading: true,
      error: false
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    onIframeLoad() {
      this.loading = false;
      this.error = false;
    },
    onIframeError() {
      this.loading = false;
      this.error = true;
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

.loading-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666;
  font-size: 16px;
  text-align: center;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #e74c3c;
}

.error-message p {
  margin-bottom: 15px;
  font-size: 16px;
}

.download-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #669db3ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.download-link:hover {
  background-color: #5a8ba3;
  color: white;
  text-decoration: none;
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

.resume-modal.dark-mode .loading-message {
  color: #bdc3c7;
}

.resume-modal.dark-mode .error-message {
  color: #e74c3c;
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
