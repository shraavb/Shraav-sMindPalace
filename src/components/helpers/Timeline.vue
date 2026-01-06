<template>
  <div>
    <div class="mx-3 mt-3 mb-5">
      <div class="row">
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <p
            class="title1"
            data-aos="fade"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
          >
            {{ data.title }}
          </p>
          <ul
            class="timeline m-0 pt-1"
            v-for="(e, idx) in data.data"
            :key="e.name"
            :style="{ 'transition-delay': idx / 4.2 + 's' }"
            data-aos="fade-up"
            data-offset="10"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="500"
          >
            <li class="m-0 pb-2">
              <div>
                <div class="px-2 title2">
                  {{ e.name }}
                  <span v-if="e.place" class="location-text">
                    <i class="fas fa-map-marker-alt"></i> {{ e.place }}
                  </span>
                </div>
                <div class="px-2 title3">
                  {{ e.degree || e.position }}
                  {{ e.gpa ? "(" + e.gpa + ")" : "" }}
                </div>
                <div class="px-2 date">{{ e.date }}</div>
                <div class="px-2 pb-2 pt-2 description-content" style="text-align: left;" v-html="formatDescription(e.description)">
                </div>
                <span
                  class="mx-2 badge p-2 mb-2"
                  v-for="s in e.skills"
                  :key="s"
                  :class="{ 'bg-dark2': nightMode }"
                  >{{ s }}</span
                >
                <p class="m-2"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    formatDescription(description) {
      if (!description) return '';
      // Split by periods and create bullet points, preserving HTML links
      const sentences = description.split(/(?<=[.!?])\s+(?=[A-Z])/);
      if (sentences.length > 1) {
        return '<ul class="desc-bullets">' +
          sentences.map(s => `<li>${s.trim()}</li>`).join('') +
          '</ul>';
      }
      return description;
    }
  }
};
</script>

<style scoped>
.title1 {
  font-size: 24px;
  font-weight: 500;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.location-text {
  font-size: 0.85rem;
  font-weight: 400;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.location-text i {
  font-size: 0.75rem;
  color: #805ad5;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.description-content :deep(.desc-bullets) {
  padding-left: 1.25rem;
  margin: 0;
}

.description-content :deep(.desc-bullets li) {
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.badge {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  color: #553c9a;
  border: 1px solid rgba(128, 90, 213, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.badge:hover {
  background: linear-gradient(135deg, #e9d5ff, #ddd6fe);
  transform: scale(1.05);
}

.date {
  font-size: 14px;
  font-weight: 300;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: linear-gradient(180deg, #805ad5, #b794f6);
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 3px;
  height: 93%;
  margin-top: 20px;
  z-index: 400;
  border-radius: 2px;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: linear-gradient(135deg, #805ad5, #b794f6);
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ffffff;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
  box-shadow: 0 2px 8px rgba(128, 90, 213, 0.3);
}

.bg-dark2 {
  background-color: #0f0f23 !important;
}

.bg-dark .badge {
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(124, 58, 237, 0.1));
  color: #c4b5fd;
  border: 1px solid rgba(196, 181, 253, 0.3);
}

.bg-dark .badge:hover {
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.3), rgba(124, 58, 237, 0.2));
  transform: scale(1.05);
}

/* Dark mode location text */
.bg-dark2 .location-text,
.text-light .location-text {
  color: #9ca3af;
}

.bg-dark2 .location-text i,
.text-light .location-text i {
  color: #b794f6;
}
</style>
