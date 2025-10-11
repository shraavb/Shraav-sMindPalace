<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-white': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                :class="{ 'text-light': nightMode }"
                >about</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                :class="{ 'text-light': nightMode }"
                >skills</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                :class="{ 'text-light': nightMode }"
                >portfolio</a
              >
            </li>
            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                ><i
                  :class="{
                    'fas fa-moon': nightMode,
                    'far fa-moon': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  color: #4a5568 !important;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #805ad5 !important;
  transform: translateY(-1px);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(128, 90, 213, 0.2);
  position: fixed !important;
  box-shadow: 0 2px 10px rgba(128, 90, 213, 0.1);
}

.navbar-blur {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
}

.bg-dark2 .nav-link {
  color: #e2e8f0 !important;
}

.bg-dark2 .nav-link:hover {
  color: #c4b5fd !important;
}

.bg-dark2 {
  background: linear-gradient(135deg, #0f0f23 0%, #0a0a1a 50%, #050508 100%) !important;
  border-bottom-color: rgba(196, 181, 253, 0.2) !important;
  box-shadow: 0 2px 10px rgba(196, 181, 253, 0.1) !important;
}
</style>
