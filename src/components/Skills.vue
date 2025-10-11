<template>
  <div :class="{ 'bg-gradient-skills': !nightMode, 'bg-dark': nightMode }" class="py-4 p-st" style="padding-bottom: 60px;">
    <div class="container">
      <div class="text-center">
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >skills.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="skills-list">
        <div
          class="skill-item"
          v-for="skill in skills"
          :key="skill.title"
        >
          <div class="skill-left">
            <i :class="skill.icon"></i>
            <span class="skill-category">{{ skill.title }}</span>
          </div>
          <div class="skill-right">
            <span class="skill-tech">{{ skill.info.join(", ") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.skills-list {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: linear-gradient(135deg, rgba(128, 90, 213, 0.08), rgba(183, 148, 246, 0.05));
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 12px;
  border-left: 4px solid #805ad5;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-left {
  display: flex;
  align-items: center;
  flex: 0 0 200px;
}

.skill-right {
  flex: 1;
  text-align: right;
}

.skill-category {
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
  text-transform: capitalize;
}

.skill-tech {
  font-size: 16px;
  font-weight: 400;
  color: #666;
}

.fa, .fas {
  color: #805ad5;
  font-size: 24px;
  width: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-item:hover .fa,
.skill-item:hover .fas {
  transform: scale(1.2);
  color: #b794f6;
}

/* Dark mode styles */
.bg-dark .skill-item {
  border-bottom-color: #4a5568;
}

.bg-dark .skill-item:hover {
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.1), rgba(124, 58, 237, 0.05));
  border-left-color: #c4b5fd;
}

.bg-dark .skill-category {
  color: #e2e8f0;
}

.bg-dark .skill-tech {
  color: #cbd5e0;
}

.bg-dark .fa, .bg-dark .fas {
  color: #c4b5fd;
}

.bg-gradient-skills {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e0 100%);
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .skill-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
  }
  
  .skill-left {
    flex: none;
    margin-bottom: 10px;
  }
  
  .skill-right {
    text-align: left;
    width: 100%;
  }
  
  .skill-category {
    margin-left: 10px;
  }
}
</style>
