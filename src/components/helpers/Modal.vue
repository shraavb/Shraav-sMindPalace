<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          :class="{
            'bg-light': !nightMode,
            'bg-dark': nightMode,
            'text-light': nightMode,
          }"
        >
          <div class="title1 px-4 pt-3">
            <div class="d-flex align-items-center">
              <span
                ><a
                  href="#"
                  @click.prevent="open(portfolio.visit)"
                  :class="{ 'text-light': nightMode }"
                  v-html="cleanName(portfolio.name)"></a
                ></span
              >
              <span v-if="portfolio.name.includes('in-progress')" class="badge badge-warning ml-2">in-progress</span>
              <a
                class="pull-right ml-auto"
                style="font-size: 18px;"
                @click="$emit('close')"
                ><i class="fas fa-times"></i
              ></a>
            </div>
            <hr
              class="my-1"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div
              class="mb-2 date"
              :class="{ 'text-light': nightMode, pbgray: nightMode }"
            >
              <span v-if="portfolio.date && portfolio.date.trim() !== ''">{{ portfolio.date }} • {{ portfolio.category }}</span>
              <span v-else>{{ portfolio.category }}</span>
            </div>
            <div class="pb-1 bheight">
              <span
                class="badge mr-2 mb-2"
                v-for="tech in portfolio.technologies"
                :key="tech"
                :class="{ 'bg-dark4': nightMode }"
                >{{ tech }}</span
              >
            </div>

            <div style="text-align: left;">
              <span v-html="portfolio.description"></span>
            </div>
            <hr />
            <div v-if="portfolio.video && portfolio.video.trim() !== ''" class="mt-4">
              <h5 class="mb-3" :class="{ 'text-light': nightMode }">Demo Video</h5>
              <video 
                v-if="isLocalVideo(portfolio.video)"
                :src="getVideoUrl(portfolio.video)" 
                controls 
                style="width: 100%; max-height: 500px; border-radius: 7px;"
                class="mb-3"
              >
                Your browser does not support the video tag.
              </video>
              <div v-else class="text-center mb-3">
                <a 
                  :href="portfolio.video" 
                  target="_blank" 
                  class="btn"
                  :class="{ 'text-light': nightMode }"
                >
                  Watch Demo Video (External Link)
                </a>
              </div>
            </div>
            <div class="mt-4">
              <hr />
              <Gallery :images="portfolio.pictures" />
            </div>
          </div>

          <div class="text-center pb-3">
            <hr
              class="mt-1 mb-3"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
            <button 
              v-if="portfolio.visit && portfolio.visit.trim() !== ''" 
              class="btn w-25 mr-3" 
              @click="open(portfolio.visit)"
            >
              visit project
            </button>
            <button
              v-if="portfolio.github && portfolio.github.trim() !== ''"
              class="btn w-25 mr-3"
              @click="open(portfolio.github)"
            >
              repo
            </button>
            <button
              v-if="portfolio.huggingface && (Array.isArray(portfolio.huggingface) ? portfolio.huggingface.length > 0 : portfolio.huggingface.trim() !== '')"
              class="btn w-25 mr-3"
              @click="openHuggingFace(portfolio.huggingface)"
            >
              🤗 model
            </button>
            <button
              v-if="portfolio.pictures && portfolio.pictures[0] && portfolio.pictures[0].pdf" 
              class="btn w-25 mr-3" 
              @click="openPdf(portfolio.pictures[0].pdf)"
            >
              Link to Paper
            </button>
            <button 
              v-if="portfolio.presentation && portfolio.presentation.trim() !== ''" 
              class="btn w-25 mr-3" 
              @click="openPdf(portfolio.presentation)"
            >
              {{ portfolio.category === 'Pitch Competition' ? 'Link to Pitch' : 'Link to Presentation' }}
            </button>
            <button 
              v-if="portfolio.figma && portfolio.figma.trim() !== ''" 
              class="btn w-25 mr-3" 
              @click="open(portfolio.figma)"
            >
              Figma
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Gallery from "./Gallery";

export default {
  name: "Modal",
  components: {
    Carousel,
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    cleanName(name) {
      return name.replace(/ <span class='badge badge-warning ml-2'>in-progress<\/span>/, '');
    },
    open(url) {
      window.open(url, "_blank");
    },
    openHuggingFace(huggingface) {
      if (Array.isArray(huggingface)) {
        huggingface.forEach(url => window.open(url, "_blank"));
      } else {
        window.open(huggingface, "_blank");
      }
    },
    openPdf(pdfPath) {
      const pdfUrl = process.env.NODE_ENV === 'production' 
        ? `/Shraav-sMindPalace/${pdfPath}` 
        : `/${pdfPath}`;
      window.open(pdfUrl, "_blank");
    },
    isLocalVideo(videoPath) {
      // Check if it's a local file (not a URL starting with http/https)
      return videoPath && !videoPath.startsWith('http://') && !videoPath.startsWith('https://');
    },
    getVideoUrl(videoPath) {
      // Return the correct path based on environment
      if (process.env.NODE_ENV === 'production') {
        return `/Shraav-sMindPalace/${videoPath}`;
      }
      return `/${videoPath}`;
    },
  },
};
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
  transition: all 0.2s;
  cursor: pointer;
}

a:hover {
  transition: all 0.2s;
  color: gray;
}

.date {
  font-size: 14px;
  font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: #f0fdfa;
  color: #134e4a;
  border: 1px solid #99f6e4;
  transition: background-color 0.2s ease;
  font-weight: 400;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
}

.badge:hover {
  background-color: #ccfbf1;
}

.btn {
  border-color: #0f766e;
  color: #0f766e;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0f766e;
  border-color: #0f766e;
  color: white;
}

.btn:focus {
  background-color: #0f766e;
  border-color: #0f766e;
  color: white;
  box-shadow: none;
}

.bg-dark4 {
  background-color: #161b22 !important;
}

.bg-dark .badge {
  background-color: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
}

.bg-dark .badge:hover {
  background-color: #334155;
}

.badge-warning {
  background-color: #f8fafc !important;
  color: #64748b !important;
  border: 1px solid #cbd5e1 !important;
  font-weight: 400 !important;
  font-size: 10px !important;
  padding: 4px 10px !important;
  border-radius: 4px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.bg-dark .badge-warning {
  background-color: #1e293b !important;
  color: #64748b !important;
  border: 1px solid #334155 !important;
}
</style>
