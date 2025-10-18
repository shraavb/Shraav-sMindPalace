<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div style="height: 180px;">
        <img
          class="card-img-top"
          :src="portfolio.pictures[0].img"
          alt="Card image cap"
          @click="openPdf"
          style="cursor: pointer;"
        />
      </div>
      <div class="card-body pborder-top">
        <!-- Extract in-progress tag and place above title -->
        <div v-if="portfolio.name.includes('in-progress')" class="mb-2">
          <span class="badge badge-warning">in-progress</span>
        </div>
        <h5 class="title2" v-html="portfolio.name.replace(' <span class=\'badge badge-warning ml-2\'>in-progress</span>', '')"></h5>
        <div>
          <div class="pb-1 bheight">
            <span
              class="badge mr-2 mb-2 "
              v-for="tech in portfolio.technologies"
              :key="tech"
              :class="{ 'bg-dark4': nightMode }"
              >{{ tech }}</span
            >
          </div>
          <p
            class="title3 m-0 pb-3 pheight pt-1"
            v-html="
              portfolio.description.length > 100
                ? portfolio.description.substring(0, 105) + '...'
                : portfolio.description
            "
          >
          </p>
        </div>
        <div class="text-center mt-3">
          <button
            href=""
            class="btn-sm btn btn-outline-secondary no-outline"
            @click.prevent="showModal"
          >
            read more
          </button>
          <button
            href="#"
            class="btn-sm btn btn-outline-secondary no-outline ml-2"
            v-if="portfolio.visit"
            @click.prevent="open(portfolio.visit)"
          >
            visit project
          </button>
          <button
            href="#"
            class="btn-sm btn btn-outline-secondary no-outline ml-2"
            v-if="portfolio.github"
            @click.prevent="open(portfolio.github)"
          >
            repo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    openPdf() {
      if (this.portfolio.pictures[0].pdf) {
        window.open(this.portfolio.pictures[0].pdf, "_blank");
      }
    },
    showModal() {
      this.$emit("show", this.portfolio);
    },
  },
};
</script>

<style scoped>
img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.img-div img {
  /* object-fit: cover;
    overflow: hidden; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* object-position: 50% 120%;
    max-width: 300px !important; */
}

.bheight {
  height: 65px;
  overflow: auto;
}

.pheight {
  height: 110px;
  max-height: 130px;
  overflow: auto;
  text-align: left;
}

div.img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pborder-top {
  border-top: 1px solid rgb(193, 193, 193);
}

.pcard {
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(128, 90, 213, 0.1);
  box-shadow: 0 4px 20px rgba(128, 90, 213, 0.08);
  transition: all 0.3s ease;
  height: 483px;
}

.pcard:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(128, 90, 213, 0.15);
  border-color: rgba(128, 90, 213, 0.2);
}

.pcard-dark {
  border-radius: 12px;
  border: 1px solid rgba(196, 181, 253, 0.3);
  background: linear-gradient(145deg, #0f0f23, #0a0a1a) !important;
  transition: all 0.3s ease;
  height: 483px;
}

.pcard-dark:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(196, 181, 253, 0.25);
  border-color: rgba(196, 181, 253, 0.4);
}

.pcard-body {
  border-top: 1px solid rgb(220, 220, 220);
  z-index: -1;
  background-color: rgb(253, 254, 255);
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
  font-size: 16px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  color: #553c9a;
  border: 1px solid rgba(128, 90, 213, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 13px;
}

.badge:hover {
  background: linear-gradient(135deg, #e9d5ff, #ddd6fe);
  transform: scale(1.05);
}

.badge-warning {
  background: linear-gradient(135deg, #fef3c7, #fde68a) !important;
  color: #92400e !important;
  border: 1px solid rgba(245, 158, 11, 0.3) !important;
  font-weight: 600 !important;
  font-size: 12px !important;
}

.btn {
  border-color: #805ad5;
  color: #805ad5;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #805ad5;
  border-color: #805ad5;
  color: white;
  transform: translateY(-1px);
}

.btn:focus {
  background-color: #805ad5;
  border-color: #805ad5;
  color: white;
  box-shadow: 0 0 0 3px rgba(128, 90, 213, 0.2);
}

.bg-dark3 {
  background-color: rgb(82, 82, 82);
}

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
