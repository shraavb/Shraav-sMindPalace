<template>
  <div
    :class="{ 'bg-gradient-light': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center d-flex align-items-center justify-content-center">
          <img :src="picture" class="avatar-image" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >hey there...</span
          >
          <div>
            <p v-html="description"></p>
            <p class="contact-info" :class="{ pgray: !nightMode, 'text-light': nightMode }">
              get in touch at <a href="mailto:shraavasti.b@gmail.com" :class="{ pgray: !nightMode, 'text-light': nightMode }">shraavasti.b@gmail.com</a>
            </p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="openResume"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
      }
    },
    openResume() {
      this.$emit('showResume');
    },
  },
};
</script>

<style scoped>
.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  margin-top: 0;
  transform: none;
}

.avatar-image {
  max-width: 300px;
  height: auto;
  margin: 0 auto;
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #3182ce;
  color: #3182ce;
  background-color: transparent;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #3182ce;
  border-color: #3182ce;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
}

.btn:focus {
  background-color: #3182ce;
  border-color: #3182ce;
  color: white;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: left;
  font-weight: 400;
}

.contact-info {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
}

.contact-info a {
  color: #3182ce;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-info a:hover {
  text-decoration: underline;
  color: #2c5282;
}

.bg-gradient-light {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%);
}

/* LEAVES */
</style>
