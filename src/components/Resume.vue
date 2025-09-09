<template>
  <div v-if="show" class="resume-modal-overlay" @click="closeModal">
    <div class="resume-modal" :class="{ 'dark-mode': nightMode }" @click.stop>
      <div class="resume-header">
        <h3 class="resume-title">Resume</h3>
      </div>
      <div class="resume-content">
        <div class="resume-iframe-container">
          <iframe 
            :src="resumeUrl" 
            width="100%" 
            height="600px"
            frameborder="0"
            class="resume-iframe"
            @load="onIframeLoad"
            @error="onIframeError"
            @click="handleIframeClick"
          ></iframe>
          <div class="iframe-overlay" @click="showPortfolioMessage = true">
            <div class="overlay-message" v-if="showPortfolioMessage">
              <p>To view the portfolio, please use the button below or right-click the link in the resume and select "Open in new tab".</p>
              <button @click="openPortfolioInNewTab" class="portfolio-button">Open Portfolio</button>
              <button @click="showPortfolioMessage = false" class="close-message-button">Close</button>
            </div>
          </div>
        </div>
        <div v-if="loading" class="loading-message">
          Loading resume...
        </div>
        <div v-if="error" class="error-message">
          <p>Unable to load resume. Please try again or download directly.</p>
          <a :href="resumeUrl" target="_blank" class="download-link">Download Resume</a>
        </div>
        <div class="resume-actions">
          <button @click="openPortfolioInNewTab" class="action-button portfolio-action">
            Open Portfolio in New Tab
          </button>
          <a :href="resumeUrl" target="_blank" class="action-button download-action">
            Download Resume
          </a>
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
      resumeUrl: process.env.NODE_ENV === 'production' ? '/Shraav-sMindPalace/resume.pdf' : '/resume.pdf',
      loading: true,
      error: false,
      showPortfolioMessage: false
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
    },
    handleIframeClick(event) {
      // Due to cross-origin restrictions, we can't access iframe content directly
      // Instead, we'll show a message to guide users
      console.log('Iframe clicked - this is expected due to cross-origin restrictions');
    },
    handleIframeNavigation() {
      // This will be called when the iframe tries to navigate
      // We'll prevent the navigation and show a message
      console.log('Iframe navigation detected');
    },
    openPortfolioInNewTab() {
      // Method to open portfolio in new tab
      const portfolioUrl = process.env.NODE_ENV === 'production' 
        ? 'https://shraavb.github.io/Shraav-sMindPalace/'
        : 'http://localhost:8080/';
      window.open(portfolioUrl, '_blank');
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
  position: relative;
}

.resume-iframe-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.resume-iframe {
  border: none;
  width: 100%;
  height: 100%;
}

.iframe-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  pointer-events: none;
}

.overlay-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  z-index: 2;
  pointer-events: all;
}

.overlay-message p {
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.4;
}

.portfolio-button, .close-message-button {
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.portfolio-button {
  background-color: #669db3ff;
  color: white;
}

.portfolio-button:hover {
  background-color: #5a8ba3;
}

.close-message-button {
  background-color: #6c757d;
  color: white;
}

.close-message-button:hover {
  background-color: #5a6268;
}

.resume-actions {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  z-index: 3;
}

.action-button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.portfolio-action {
  background-color: #669db3ff;
  color: white;
}

.portfolio-action:hover {
  background-color: #5a8ba3;
  color: white;
  text-decoration: none;
}

.download-action {
  background-color: #28a745;
  color: white;
}

.download-action:hover {
  background-color: #218838;
  color: white;
  text-decoration: none;
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

.resume-modal.dark-mode .overlay-message {
  background: rgba(44, 62, 80, 0.95);
  color: #ecf0f1;
}

.resume-modal.dark-mode .portfolio-button {
  background-color: #669db3ff;
  color: white;
}

.resume-modal.dark-mode .close-message-button {
  background-color: #6c757d;
  color: white;
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
  
  .resume-actions {
    position: relative;
    bottom: auto;
    right: auto;
    justify-content: center;
    padding: 10px;
    background: rgba(248, 249, 250, 0.9);
  }
  
  .action-button {
    font-size: 11px;
    padding: 6px 12px;
  }
  
  .overlay-message {
    max-width: 250px;
    padding: 15px;
  }
  
  .overlay-message p {
    font-size: 12px;
  }
}
</style>
