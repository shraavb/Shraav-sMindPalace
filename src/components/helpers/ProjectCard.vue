<template>
  <div
    class="project-card"
    :class="{
      'expanded': isExpanded,
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode
    }"
  >
    <!-- Header: Image + Basic Info -->
    <div class="project-header">
      <div class="project-image-container">
        <img
          :src="project.pictures[0].img"
          :alt="cleanName"
          class="project-image"
        />
      </div>
      <div class="project-info">
        <!-- Title with in-progress badge -->
        <div class="project-title-row">
          <h3 class="project-title" :class="{ 'text-light': nightMode }">
            {{ cleanName }}
          </h3>
          <span v-if="isInProgress" class="badge badge-warning">in-progress</span>
        </div>

        <!-- Date & Category -->
        <p class="project-meta" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
          {{ project.date }} <span v-if="project.category">• {{ project.category }}</span>
        </p>

        <!-- Tech tags -->
        <div class="project-tags">
          <span
            v-for="tech in displayTechnologies"
            :key="tech"
            class="tech-tag"
            :class="{ 'tag-dark': nightMode }"
          >
            {{ tech }}
          </span>
          <span
            v-if="project.technologies.length > 5"
            class="tech-tag more-tag"
            :class="{ 'tag-dark': nightMode }"
          >
            +{{ project.technologies.length - 5 }}
          </span>
        </div>

        <!-- Preview text -->
        <p class="project-preview" :class="{ 'text-light': nightMode }">
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
      </div>
    </div>

    <!-- Expanded Details -->
    <transition name="slide-fade">
      <div v-if="isExpanded" class="project-details">
        <!-- Full description -->
        <div class="project-description" v-html="project.description"></div>

        <!-- Video (if available) -->
        <div v-if="project.video" class="project-video">
          <video
            v-if="isLocalVideo(project.video)"
            controls
            class="video-player"
          >
            <source :src="getVideoUrl(project.video)" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a
            v-else
            :href="project.video"
            target="_blank"
            class="video-link"
          >
            <i class="fas fa-play-circle"></i> Watch Demo Video
          </a>
        </div>

        <!-- Image gallery -->
        <div v-if="project.pictures.length > 1" class="project-gallery">
          <img
            v-for="(pic, idx) in project.pictures.slice(1)"
            :key="idx"
            :src="pic.img"
            class="gallery-image"
            @click="openImageModal(pic.img)"
          />
        </div>

        <!-- Action links -->
        <div class="project-links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="project-link"
          >
            <i class="fab fa-github"></i> Repo
          </a>
          <a
            v-if="project.huggingface"
            :href="getHuggingFaceUrl(project.huggingface)"
            target="_blank"
            class="project-link"
          >
            🤗 Model
          </a>
          <a
            v-if="project.visit"
            :href="project.visit"
            target="_blank"
            class="project-link"
          >
            <i class="fas fa-globe"></i> Website
          </a>
          <a
            v-if="project.pictures[0] && project.pictures[0].pdf"
            :href="getPdfUrl(project.pictures[0].pdf)"
            target="_blank"
            class="project-link"
          >
            <i class="fas fa-file-pdf"></i> Paper
          </a>
          <a
            v-if="project.presentation"
            :href="getPdfUrl(project.presentation)"
            target="_blank"
            class="project-link"
          >
            <i class="fas fa-file-alt"></i> Presentation
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
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
      isExpanded: false
    };
  },
  computed: {
    cleanName() {
      return this.project.name.replace(/ <span class='badge badge-warning ml-2'>in-progress<\/span>/, '');
    },
    isInProgress() {
      return this.project.name.includes('in-progress');
    },
    displayTechnologies() {
      return this.project.technologies.slice(0, 5);
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
    openImageModal(imgSrc) {
      // Could emit event to parent for full-screen modal
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
.project-card {
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.project-header {
  display: flex;
  gap: 1.5rem;
}

.project-image-container {
  flex-shrink: 0;
  width: 180px;
}

.project-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.project-info {
  flex: 1;
  min-width: 0;
}

.project-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.badge-warning {
  background-color: #f8fafc;
  color: #64748b;
  border: 1px solid #cbd5e1;
  font-weight: 400;
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-meta {
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.tech-tag {
  background-color: #f0fdfa;
  color: #134e4a;
  border: 1px solid #99f6e4;
  font-size: 0.7rem;
  font-weight: 400;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
}

.tech-tag.tag-dark {
  background-color: rgba(45, 212, 191, 0.1);
  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.2);
}

.more-tag {
  background: transparent;
  border: 1px dashed #cbd5e1;
  color: #94a3b8;
}

.project-preview {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: inherit;
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e1;
  background: transparent;
  color: #64748b;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.expand-btn:hover {
  border-color: #0f766e;
  color: #0f766e;
}

.expand-btn.btn-dark {
  border-color: #334155;
  color: #94a3b8;
}

.expand-btn.btn-dark:hover {
  border-color: #2dd4bf;
  color: #2dd4bf;
}

/* Expanded Details */
.project-details {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.project-description :deep(ul) {
  padding-left: 1.25rem;
  margin: 0;
}

.project-description :deep(li) {
  margin-bottom: 0.5rem;
}

.project-video {
  margin-bottom: 1.5rem;
}

.video-player {
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
}

.video-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0f766e;
  font-weight: 500;
  text-decoration: none;
}

.video-link:hover {
  text-decoration: underline;
}

.project-gallery {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.gallery-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #0f766e;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.project-link:hover {
  color: #0d6b62;
  text-decoration: underline;
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
@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
  }

  .project-image-container {
    width: 100%;
  }

  .project-image {
    height: 180px;
    width: 100%;
  }
}

/* Background classes */
.bg-light {
  background-color: #fafafa;
}

.bg-dark2 {
  background-color: #161b22;
}
</style>
