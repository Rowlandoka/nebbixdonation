<template>
  <main
    class="min-h-screen bg-gray text-gray-700 dark:bg-blue-darkest dark:text-gray-lightest"
  >
    <!-- <div class="flex justify-end mx-auto p-6">
      <button
        @click="toggleTheme"
        class="border-2 mx-auto p-2 rounded dark:text-gray-lightest text-cyan-200"
      >
        Switch
      </button>
    </div> -->
    <div
      class="mx-auto py-2 px-2 md:p-4 md:w-1/2 flex items-center justify-end w-full mb-0"
    >
      <label for="toggleTheme" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            type="checkbox"
            id="toggleTheme"
            class="sr-only"
            @click="toggleTheme"
          />
          <div class="block bg-gray-light w-14 h-8 rounded-full"></div>
          <div
            class="dot absolute left-1 top-1 bg-gray w-6 h-6 rounded-full transition"
          ></div>
        </div>
        <!-- <div class="ml-3 text-gray-darkest font-normal">
          Toggle Me!
        </div> -->
      </label>
    </div>
    <!-- Dashboar -->
    <div class="mx-auto md:p-6 md:w-1/2 bg-gray-lightest dark:bg-blue-darkest">
      <div class="flex flex-wrap justify-between ">
        <h1
          class="text-sm md:text-2xl font-normal uppercase text-gray-dark hover:text-gray-900 dark:text-gray-lightest transition duration-500 p-3"
        >
          logo
        </h1>
        <p
          class="text-sm md:text-lg text-gray-dark dark:text-gray-lightest font-normal mt-2 p-3"
        >
          Time Left 08:20
        </p>
      </div>
      <div class="rounded px-8 pt-6 mb-8 min-h-screen">
        <form>
          <div class="mb-8">
            <div class="mt-1 relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              >
                <img
                  src="./assets/bitcoin-btc-logo.svg"
                  class="w-6 h-6 pr-2"
                  alt=""
                />
                <span
                  class="text-sm text-gray-dark pl-1 dark:text-gray-lightest"
                  >Bitcoin(BTC)</span
                >
              </div>
              <input
                id="pay"
                type="text"
                class="block pr-10  appearance-none bg-gray-darkest dark:bg-blue-dark dark:text-gray-lightest rounded w-full py-2 px-4 text-gray-light mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 transition duration-500 ease-in-out"
                placeholder="Pay with"
              />
            </div>
            <div class="mb-8">
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                >
                  <span class="text-sm text-gray-dark dark:text-gray-lightest"
                    >0.0004567BTC</span
                  >
                </div>
                <input
                  type="text"
                  placeholder="fastfood.com"
                  class="block pr-10  appearance-none bg-gray-darkest dark:bg-blue-dark dark:text-gray-lightest rounded w-full py-2 px-4 text-gray-light mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 transition duration-500 ease-in-out"
                />
              </div>
              <div class="float-right py-4">
                <span
                  class="text-sm md:text-lg text-gray-light dark:text-gray-lightest"
                >
                  1 BTC = $32,234.34 (USD)
                </span>
              </div>
            </div>
          </div>
        </form>
        <!-- Tabs -->
        <div class="w-full">
          <ul class="w-full flex mb-0 list-none pt-3 pb-4 flex-row space-x-2">
            <li class="w-1/2 last:mr-0 flex-auto text-center">
              <a
                class="text-sm md:text-lg font-normal px-5 py-2 cursor-pointer shadow-md rounded block leading-normal"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-gray-dark bg-blue-light dark:bg-blue-dark dark:text-gray-lightest':
                    openTab !== 1,
                  'text-gray-lightest bg-blue-darkest dark:bg-blue-darkest':
                    openTab === 1,
                }"
              >
                Scan
              </a>
            </li>
            <li class="w-1/2 last:mr-0 flex-auto text-center">
              <a
                class="text-sm md:text-lg font-normal px-5 py-2 cursor-pointer rounded block leading-normal"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-gray-dark bg-blue-light dark:bg-blue-dark dark:text-gray-lightest':
                    openTab !== 2,
                  'text-gray-lightest bg-blue-darkest': openTab === 2,
                }"
              >
                Copy
              </a>
            </li>
          </ul>
          <!-- box -->
          <div
            class="relative flex flex-col min-w-0  break-words bg-gray-700 w-full mb-6 rounded"
          >
            <div class="px-4-py-5 flex-auto">
              <div class="tab-content tab-space">
                <div
                  v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <!-- Scan Session -->
                  <img
                    class="mx-auto p-2"
                    src="./assets/qr_code_bitcoin.png"
                    alt=""
                  />

                  <button
                    class="bg-blue text-gray-lightest text-lg hover:bg-blue-darkest dark:hover:bg-blue rounded cursor-pointer p-4 w-full focus:outline-none"
                  >
                    Open in Wallet
                  </button>
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                  }"
                >
                  <!-- Copy Section -->
                  <div
                    class="mb-4 flex flex-col justify-center mx-auto  rounded dark:bg-blue-dark"
                  >
                    <div
                      class="text-sm md:text-lg text-center py-4 text-gray-dark dark:text-gray-lightest"
                    >
                      Amount <br />
                      <span
                        class="text-sm md:text-lg text-gray-dark dark:text-gray-lightest"
                        >0.0004567BTC</span
                      >
                    </div>

                    <div class="mb-4 mx-auto dark:bg-blue-dark">
                      <div class="px-4">
                        <label
                          for="address"
                          class="text-sm block font-normal mb-2 text-gray-dark dark:text-blue-lightest"
                        >
                          Address
                        </label>
                      </div>
                      <div
                        class="flex border border-pink-light px-2 py-2 bg-pink-200 w-full md:w-96 dark:bg-blue-darkest dark:border-none dark:border-blue-darkest sm:w-full"
                      >
                        <div
                          class="border-r border-pink-light px-2 py-1 bg-pink-200 dark:border-none dark:border-blue-darkest"
                        >
                          <img
                            src="./assets/bitcoin-btc-logo.svg"
                            class="w-6 h-6 mt-1 mr-2"
                            alt=""
                          />
                        </div>
                        <input
                          type="text"
                          value="deryfghrkeofdnfhgdfhvbhfufheujje"
                          readonly
                          class="text-sm text-center focus:outline-none text-gray-dark px-1 py-0 dark:bg-blue-darkest dark:text-gray-lightest w-full md:w-full"
                        />
                        <button
                          class="text-sm float-right text-blue-darkest dark:text-gray-lightest"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="mb-4 mx-auto">
                      <div class="px-4">
                        <label
                          for="payment-link"
                          class="block text-sm font-normal mb-2 text-gray-dark dark:text-gray-lightest"
                        >
                          Payment Link
                        </label>
                      </div>
                      <div
                        class="flex border border-pink-light px-2 py-2 bg-pink-200 w-full md:w-96 dark:bg-blue-darkest dark:border-none dark:border-blue-darkest sm:w-full"
                      >
                        <div
                          class="border-r border-pink-light px-2 py-1 bg-pink-200 dark:border-none dark:border-blue-darkest"
                        >
                          <img
                            src="./assets/bitcoin-btc-logo.svg"
                            class="w-6 h-6 mt-1 mr-2"
                            alt=""
                          />
                        </div>
                        <input
                          type="text"
                          value="deryfghrkeofdnfhgdfhvbhfufheujje"
                          readonly
                          class="text-sm text-center focus:outline-none text-gray-dark px-1 py-0 dark:bg-blue-darkest dark:text-gray-lightest w-full md:w-full"
                        />
                        <button
                          class="text-sm float-right text-blue-darkest dark:text-gray-lightest"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- End copy section -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          class="text-sm md:text-lg p-4 text-center text-gray-dark dark:text-gray-lightest"
        >
          Recommended fee : 345.67Bytes
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      openTab: 1,
    };
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>
