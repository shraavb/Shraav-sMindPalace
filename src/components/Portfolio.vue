<template>
  <div
    class="py-5 p-st"
    :class="{
      'bg-white': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-4">
        <span
          class="title"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
        >projects.</span>
      </div>
      <hr
        width="50%"
        class="mb-5"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <!-- Featured Work Section -->
      <section class="featured-section mb-5">
        <h2 class="section-header" :class="{ 'text-light': nightMode }">
          <i class="fas fa-star"></i> Featured Work
        </h2>
        <div class="featured-grid">
          <FeaturedProject
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            :nightMode="nightMode"
          />
        </div>
      </section>

      <!-- All Projects Section -->
      <section class="all-projects-section mb-5">
        <h2 class="section-header" :class="{ 'text-light': nightMode }">
          <i class="fas fa-folder-open"></i> All Projects
        </h2>

        <!-- Robotics & Research Category -->
        <div class="category-section mb-4" v-if="roboticsProjects.length > 0">
          <h3 class="category-header" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
            Robotics & Research
          </h3>
          <ProjectCard
            v-for="project in roboticsProjects"
            :key="project.id"
            :project="project"
            :nightMode="nightMode"
          />
        </div>

        <!-- Product & Engineering Category -->
        <div class="category-section mb-4" v-if="productProjects.length > 0">
          <h3 class="category-header" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
            Product & Engineering
          </h3>
          <ProjectCard
            v-for="project in productProjects"
            :key="project.id"
            :project="project"
            :nightMode="nightMode"
          />
        </div>
      </section>

      <!-- Design & Ventures Section (Deprioritized) -->
      <section class="secondary-section" v-if="showSecondary">
        <div class="text-center mb-4">
          <button
            class="toggle-secondary-btn"
            @click="showDesignVenture = !showDesignVenture"
            :class="{ 'btn-dark': nightMode }"
          >
            {{ showDesignVenture ? 'Hide' : 'Show' }} Design & Venture Projects
            <i :class="showDesignVenture ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
          </button>
        </div>

        <transition name="slide-fade">
          <div v-if="showDesignVenture">
            <!-- Design Projects -->
            <div class="category-section mb-4" v-if="design_info.length > 0">
              <h3 class="category-header" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
                Design Work
              </h3>
              <div class="design-grid">
                <div
                  v-for="(design, idx) in design_info"
                  :key="idx"
                  class="design-card"
                  :class="{ 'bg-light': !nightMode, 'bg-dark3': nightMode }"
                  @click="showDesignModalFn(design)"
                >
                  <img :src="design.pictures[0].img" class="design-image" />
                  <div class="design-info">
                    <h4 :class="{ 'text-light': nightMode }">{{ design.title || design.name }}</h4>
                    <div class="design-tags">
                      <span
                        v-for="tech in design.technologies.slice(0, 3)"
                        :key="tech"
                        class="tech-tag"
                        :class="{ 'tag-dark': nightMode }"
                      >{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Venture Concepts -->
            <div class="category-section mb-4" v-if="venture_info.length > 0">
              <h3 class="category-header" :class="{ 'text-muted': !nightMode, 'text-secondary': nightMode }">
                Venture Concepts
              </h3>
              <ProjectCard
                v-for="(venture, idx) in venture_info"
                :key="'venture-' + idx"
                :project="ventureToProject(venture)"
                :nightMode="nightMode"
              />
            </div>
          </div>
        </transition>
      </section>
    </div>

    <!-- Design Modal (keep for design projects) -->
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import ProjectCard from "./helpers/ProjectCard";
import FeaturedProject from "./helpers/FeaturedProject";
import DesignModal from "./helpers/DesignModal";
import info from "../../info";

export default {
  name: "Portfolio",
  components: {
    ProjectCard,
    FeaturedProject,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_projects: info.portfolio || [],
      design_info: info.portfolio_design || [],
      venture_info: info.portfolio_venture || [],
      featured_ids: info.featured_projects || [],
      showDesignModal: false,
      design_modal_info: {},
      showDesignVenture: false,
    };
  },
  computed: {
    // Featured projects (based on featured_projects array in info.js)
    featuredProjects() {
      return this.all_projects.filter(p => this.featured_ids.includes(p.id));
    },
    // Non-featured projects for "All Projects" section
    nonFeaturedProjects() {
      return this.all_projects.filter(p => !this.featured_ids.includes(p.id));
    },
    // Robotics & AI projects (non-featured only to avoid duplication)
    roboticsProjects() {
      return this.nonFeaturedProjects.filter(p => p.projectCategory === 'robotics');
    },
    // Product & Engineering projects (non-featured only)
    productProjects() {
      return this.nonFeaturedProjects.filter(p => p.projectCategory === 'product');
    },
    // Show secondary section if there's design or venture content
    showSecondary() {
      return this.design_info.length > 0 || this.venture_info.length > 0;
    }
  },
  methods: {
    closeModal() {
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    // Convert venture object to project-like structure for ProjectCard
    ventureToProject(venture) {
      return {
        id: venture.name,
        name: venture.name,
        preview: venture.description ? venture.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '',
        pictures: venture.pictures,
        technologies: venture.technologies,
        category: venture.category,
        projectCategory: 'venture',
        featured: false,
        date: venture.date,
        github: venture.github,
        visit: venture.visit,
        presentation: venture.presentation,
        video: venture.video,
        description: venture.description
      };
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

/* Section Headers */
.section-header {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-header i {
  color: #805ad5;
  font-size: 1.25rem;
}

.category-header {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(128, 90, 213, 0.15);
}

/* Featured Grid */
.featured-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Design Grid */
.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.design-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(128, 90, 213, 0.15);
}

.design-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(128, 90, 213, 0.15);
}

.design-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.design-info {
  padding: 1rem;
}

.design-info h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.design-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  color: #553c9a;
  border: 1px solid rgba(128, 90, 213, 0.2);
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
}

.tech-tag.tag-dark {
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(124, 58, 237, 0.1));
  color: #c4b5fd;
  border: 1px solid rgba(196, 181, 253, 0.3);
}

/* Toggle Button */
.toggle-secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #805ad5;
  background: transparent;
  color: #805ad5;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-secondary-btn:hover {
  background: #805ad5;
  color: white;
}

.toggle-secondary-btn.btn-dark {
  border-color: #b794f6;
  color: #b794f6;
}

.toggle-secondary-btn.btn-dark:hover {
  background: #805ad5;
  border-color: #805ad5;
  color: white;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

/* Background classes */
.bg-light {
  background-color: #fafafa;
}

.bg-dark3 {
  background-color: #1a1a2e;
}

/* Responsive */
@media (max-width: 768px) {
  .section-header {
    font-size: 1.25rem;
  }

  .design-grid {
    grid-template-columns: 1fr;
  }
}
</style>
