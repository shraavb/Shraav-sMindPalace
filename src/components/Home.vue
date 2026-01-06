<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st hero-section"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 text-center d-flex align-items-center justify-content-center">
          <img :src="picture" class="avatar-image" />
        </div>
        <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 hero-content">
          <!-- Name -->
          <h1 class="hero-name" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
            {{ name }}
          </h1>

          <!-- Tagline with links -->
          <p class="hero-tagline" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
            <a href="https://fisher.wharton.upenn.edu" target="_blank" class="tagline-link">M&T</a> @
            <a href="https://www.upenn.edu" target="_blank" class="tagline-link">University of Pennsylvania</a> | Computer Science + Management
          </p>

          <!-- Research Focus -->
          <p class="hero-focus" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
            {{ research_focus }}
          </p>

          <!-- Current Work -->
          <p class="hero-current" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
            {{ current_work }}
          </p>

          <!-- Quick Links Bar -->
          <div class="quick-links">
            <a
              :href="'mailto:' + email"
              class="quick-link-btn"
              :class="{ 'btn-light-mode': !nightMode, 'btn-dark-mode': nightMode }"
            >
              <i class="fas fa-envelope"></i> Email
            </a>
            <button
              class="quick-link-btn"
              :class="{ 'btn-light-mode': !nightMode, 'btn-dark-mode': nightMode }"
              @click="openResume"
            >
              <i class="fas fa-file-alt"></i> Resume
            </button>
            <a
              :href="linkedin"
              target="_blank"
              class="quick-link-btn"
              :class="{ 'btn-light-mode': !nightMode, 'btn-dark-mode': nightMode }"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              :href="github"
              target="_blank"
              class="quick-link-btn"
              :class="{ 'btn-light-mode': !nightMode, 'btn-dark-mode': nightMode }"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      name: info.name,
      tagline: info.tagline,
      research_focus: info.research_focus,
      current_work: info.current_work,
      email: info.email,
      linkedin: info.links.linkedin,
      github: info.links.github
    };
  },
  methods: {
    openResume() {
      this.$emit('showResume');
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: auto;
  display: flex;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.hero-content {
  padding: 2rem 0;
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: -0.5px;
}

.hero-tagline {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.tagline-link {
  color: #805ad5;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.tagline-link:hover {
  color: #553c9a;
  text-decoration: underline;
}

.hero-focus {
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hero-current {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.avatar-image {
  max-width: 280px;
  height: auto;
  border-radius: 12px;
}

/* Quick Links Bar */
.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.quick-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border: 1.5px solid #805ad5;
  background-color: transparent;
  color: #805ad5;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-link-btn:hover {
  background-color: #805ad5;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(128, 90, 213, 0.3);
  text-decoration: none;
}

.quick-link-btn i {
  font-size: 0.95rem;
}

/* Dark mode button styles */
.btn-dark-mode {
  border-color: #b794f6;
  color: #b794f6;
}

.btn-dark-mode:hover {
  background-color: #805ad5;
  border-color: #805ad5;
  color: white;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .hero-content {
    text-align: center;
    padding-top: 1.5rem;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .hero-focus {
    font-size: 1rem;
  }

  .quick-links {
    justify-content: center;
  }

  .avatar-image {
    max-width: 200px;
    border-radius: 50%;
    border: 3px solid rgba(128, 90, 213, 0.3);
  }
}

@media only screen and (max-width: 576px) {
  .hero-name {
    font-size: 1.75rem;
  }

  .quick-link-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
