<template>
  <div
    class="featured-project"
    :class="{
      'expanded': isExpanded,
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode
    }"
  >
    <!-- Main Content -->
    <div class="featured-content">
      <!-- Left: Image/Video -->
      <div class="featured-media">
        <img
          v-if="(!showVideo || !project.video) && project.pictures.length > 0"
          :src="project.pictures[0].img"
          :alt="cleanName"
          class="featured-image"
        />
        <div
          v-else-if="(!showVideo || !project.video) && project.pictures.length === 0"
          class="featured-image featured-image-placeholder"
        />
        <video
          v-else-if="isLocalVideo(project.video)"
          :src="getVideoUrl(project.video)"
          controls
          class="featured-video"
        >
          Your browser does not support the video tag.
        </video>
        <!-- Video toggle button - below media -->
        <div v-if="project.video && isLocalVideo(project.video)" class="video-toggle-container">
          <button
            class="video-toggle"
            @click="showVideo = !showVideo"
          >
            <i :class="showVideo ? 'fas fa-image' : 'fas fa-play'"></i>
            {{ showVideo ? 'Show Image' : 'Watch Demo' }}
          </button>
        </div>
      </div>

      <!-- Right: Info -->
      <div class="featured-info">
        <!-- Title with badge -->
        <div class="featured-title-row">
          <h2 class="featured-title" :class="{ 'text-light': nightMode }">
            {{ cleanName }}
          </h2>
          <span v-if="isInProgress" class="badge badge-warning"><span class="status-dot"></span>in progress</span>
        </div>

        <!-- Date & Category -->
        <p class="featured-meta" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
          {{ project.date }} <span v-if="project.category">• {{ project.category }}</span>
        </p>

        <!-- Tech tags -->
        <div class="featured-tags">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="tech-tag"
            :class="{ 'tag-dark': nightMode }"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Preview -->
        <p class="featured-preview" :class="{ 'text-light': nightMode }">
          {{ project.preview }}
        </p>

        <!-- Expand button -->
        <button
          class="expand-btn"
          @click="toggleExpand"
          :class="{ 'btn-dark': nightMode }"
        >
          {{ isExpanded ? 'Show Less' : 'Show Details' }}
          <i :class="isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </button>

        <!-- Quick links -->
        <div class="quick-actions">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="action-link"
            :class="{ 'link-dark': nightMode }"
          >
            <i class="fab fa-github"></i> Repo
          </a>
          <a
            v-if="project.huggingface"
            :href="getHuggingFaceUrl(project.huggingface)"
            target="_blank"
            class="action-link"
            :class="{ 'link-dark': nightMode }"
          >
            🤗 Model
          </a>
          <a
            v-if="project.visit"
            :href="project.visit"
            target="_blank"
            class="action-link"
            :class="{ 'link-dark': nightMode }"
          >
            <i class="fas fa-globe"></i> Website
          </a>
        </div>
      </div>
    </div>

    <!-- Expanded Details -->
    <transition name="slide-fade">
      <div v-if="isExpanded" class="featured-details">
        <!-- Full description -->
        <div class="featured-description" v-html="project.description"></div>

        <!-- Image gallery (if multiple images) -->
        <div v-if="project.pictures.length > 1" class="featured-gallery">
          <h4 :class="{ 'text-light': nightMode }">Gallery</h4>
          <div class="gallery-grid">
            <img
              v-for="(pic, idx) in project.pictures.slice(1)"
              :key="idx"
              :src="pic.img"
              class="gallery-thumb"
              @click="openImage(pic.img)"
            />
          </div>
        </div>

        <!-- Additional links -->
        <div v-if="(project.pictures.length > 0 && project.pictures[0].pdf) || project.presentation" class="additional-links">
          <a
            v-if="project.pictures[0] && project.pictures[0].pdf"
            :href="getPdfUrl(project.pictures[0].pdf)"
            target="_blank"
            class="doc-link"
          >
            <i class="fas fa-file-pdf"></i> Read Paper
          </a>
          <a
            v-if="project.presentation"
            :href="getPdfUrl(project.presentation)"
            target="_blank"
            class="doc-link"
          >
            <i class="fas fa-file-powerpoint"></i> View Presentation
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FeaturedProject",
  props: {
    project: {
      type: Object,
      required: true
    },
    nightMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExpanded: false,
      showVideo: false
    };
  },
  computed: {
    cleanName() {
      return this.project.name.replace(/ <span class='badge badge-warning ml-2'>in-progress<\/span>/, '');
    },
    isInProgress() {
      return this.project.name.includes('in-progress');
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    isLocalVideo(videoPath) {
      return videoPath && !videoPath.startsWith('http://') && !videoPath.startsWith('https://');
    },
    getVideoUrl(videoPath) {
      if (process.env.NODE_ENV === 'production') {
        return `/Shraav-sMindPalace/${videoPath}`;
      }
      return `/${videoPath}`;
    },
    getPdfUrl(pdfPath) {
      if (process.env.NODE_ENV === 'production') {
        return `/Shraav-sMindPalace/${pdfPath}`;
      }
      return `/${pdfPath}`;
    },
    openImage(imgSrc) {
      window.open(imgSrc, '_blank');
    },
    getHuggingFaceUrl(huggingface) {
      // If it's an array, return the first URL (model), otherwise return the string
      return Array.isArray(huggingface) ? huggingface[0] : huggingface;
    }
  }
};
</script>

<style scoped>
.featured-project {
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #0f766e;
  transition: all 0.3s ease;
  background: transparent;
}

.featured-project:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.featured-content {
  display: flex;
  gap: 2rem;
}

/* Media Section */
.featured-media {
  flex-shrink: 0;
  width: 45%;
  position: relative;
}

.featured-image-placeholder {
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-image,
.featured-video {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.video-toggle-container {
  margin-top: 0.75rem;
  text-align: center;
}

.video-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #0f766e;
  border: 1px solid #99f6e4;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.video-toggle:hover {
  background: #f0fdfa;
  color: #0d6b62;
}

/* Info Section */
.featured-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.featured-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.featured-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.badge-warning {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: #fffbeb;
  color: #92400e;
  border: 1px solid #fcd34d;
  font-weight: 500;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.2px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f59e0b;
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.featured-meta {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #f0fdfa;
  color: #134e4a;
  border: 1px solid #99f6e4;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
}

.tech-tag.tag-dark {
  background-color: rgba(45, 212, 191, 0.1);
  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.2);
}

.featured-preview {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border: 1.5px solid #0f766e;
  background: transparent;
  color: #0f766e;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
  margin-bottom: 1rem;
}

.expand-btn:hover {
  background: #0f766e;
  color: white;
}

.expand-btn.btn-dark {
  border-color: #2dd4bf;
  color: #2dd4bf;
}

.expand-btn.btn-dark:hover {
  background: #0f766e;
  border-color: #0f766e;
  color: white;
}

.quick-actions {
  display: flex;
  gap: 1.25rem;
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #0f766e;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.action-link:hover {
  color: #0d6b62;
  text-decoration: underline;
}

.action-link.link-dark {
  color: #2dd4bf;
}

.action-link.link-dark:hover {
  color: #99f6e4;
}

/* Expanded Details */
.featured-details {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.featured-description {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.featured-description :deep(ul) {
  padding-left: 1.5rem;
  margin: 0;
}

.featured-description :deep(li) {
  margin-bottom: 0.6rem;
}

.featured-gallery h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.gallery-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.gallery-thumb {
  width: 140px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-thumb:hover {
  transform: scale(1.05);
}

.additional-links {
  display: flex;
  gap: 1.5rem;
}

.doc-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: #f0fdfa;
  color: #0f766e;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.doc-link:hover {
  background: #ccfbf1;
}

/* Slide transition */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 992px) {
  .featured-content {
    flex-direction: column;
  }

  .featured-media {
    width: 100%;
  }

  .featured-image,
  .featured-video {
    height: 220px;
  }
}

@media (max-width: 576px) {
  .featured-project {
    padding: 1.25rem;
  }

  .featured-title {
    font-size: 1.25rem;
  }

  .featured-image,
  .featured-video {
    height: 180px;
  }
}

/* Background classes */
.bg-light {
  background-color: #ffffff;
}

.bg-dark2 {
  background-color: #161b22;
}
</style>
