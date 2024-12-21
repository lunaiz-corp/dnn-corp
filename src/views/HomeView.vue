<script setup>

</script>

<template>
  <main class="container max-w-screen-xl mx-auto max-h-screen p-2 d-grid text-[#fdfdfd]">
    <div class="w-full justify-items-start">
      <div class="flex relative">
        <h1 class="flex-initial font-paperlogy text-[7rem] md:text-[14rem] font-bold">디지털</h1>
        <div class="mt-[15rem] bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-[39rem] h-6 bottom-0"></div>
        <div class="mt-[15rem] bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-6 h-6 bottom-0 ms-6"></div>
      </div>
    </div>
    <div class="w-full justify-items-center">
      <div class="flex">
        <div class="mt-[15rem] bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-[21rem] h-6 bottom-0"></div>
        <h1 class="flex-initial font-paperlogy text-[7rem] md:text-[14rem] font-bold">뉴스의</h1>
        <div class="mt-[15rem] bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-[21rem] h-6 bottom-0"></div>
      </div>
    </div>
    <div class="w-full justify-items-end">
      <div class="flex">
        <div>
          <div class="hidden w-full md:block md:w-auto md:ml-20 mb-5 mt-[12rem]" id="navbar-coll">
            <ul
              class="flex flex-col font-bold text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button id="navlink-1" data-dropdown-toggle="navdrop-1"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-200 rounded hover:text-[#40C9B7] md:hover:bg-transparent md:border-0 md:hover:text-[#40C9B7] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">소개
                </button>
                <!-- Dropdown menu -->
                <div id="navdrop-1"
                  class="z-10 hidden font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <RouterLink to="/about/company"
                        class="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">기업
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/about/ci"
                        class="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">CI
                      </RouterLink>
                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <button id="navlink-3" data-dropdown-toggle="navdrop-3"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-200 rounded hover:text-[#40C9B7] md:hover:bg-transparent md:border-0 md:hover:text-[#40C9B7] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">미디어
                </button>
                <!-- Dropdown menu -->
                <div id="navdrop-3"
                  class="z-10 hidden font-normal  bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <RouterLink to="/media/notice"
                        class="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">공지사항
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/media/pr"
                        class="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">보도자료
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <RouterLink to="/announce"
                  class="block py-2 px-3 text-gray-200 rounded hover:text-[#40C9B7] md:hover:bg-transparent md:border-0 md:hover:text-[#40C9B7] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  공고</RouterLink>
              </li>
            </ul>
          </div>
          <div class="flex">
            <div class="bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-6 h-6 bottom-0 me-6"></div>
            <div class="bg-gradient-to-r from-[#40C9B9] to-[#62D6FF] w-[51rem] h-6 bottom-0"></div>
          </div>
          
          <p class="text-gray-400 font-paperlogy text-sm font-bold mt-2 ml-12">© 2024 DNN, all rights reserved. designed by lunaiz</p>
        </div>
        <h1 class="flex-initial font-paperlogy text-[7rem] md:text-[14rem] font-bold">혁신</h1>
      </div>
    </div>
  </main>
</template>
