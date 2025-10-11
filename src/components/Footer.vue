<template>
  <div class="footer-gradient">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>© 2024 Copyright: Shraavasti Bhat | Template by hrishikeshpaul</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="openResume"
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

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
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
span {
  font-weight: 500;
}

.btn {
  border-color: #b794f6;
  color: #b794f6;
  background-color: transparent;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #b794f6;
  border-color: #b794f6;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(183, 148, 246, 0.3);
}

.btn:focus {
  background-color: #b794f6;
  border-color: #b794f6;
  color: white;
  box-shadow: 0 0 0 3px rgba(183, 148, 246, 0.2);
}

.footer-gradient {
  background: linear-gradient(135deg, #553c9a 0%, #805ad5 50%, #b794f6 100%);
}

.bg-dark .footer-gradient {
  background-color: #000000 !important;
}

.bg-dark .btn {
  border-color: #c4b5fd;
  color: #c4b5fd;
}

.bg-dark .btn:hover {
  background-color: #c4b5fd;
  border-color: #c4b5fd;
  color: #1a1a2e;
  box-shadow: 0 4px 12px rgba(196, 181, 253, 0.3);
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
