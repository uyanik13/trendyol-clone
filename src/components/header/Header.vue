<template>
    <header class="bg-white">
      <div id="header" class="bg-white h-15 w-full  border-b border-gray-200">
          <div id="topbar" class="container  mx-auto px-24 py-2 justify-end hidden sm:block md:block lg:flex">
              <div class="hidden sm:hidden md:hidden lg:block ">
                <ul class="flex list-none pb-1  ">
                    <li class="mx-3">
                        <div class="grid items-center hover:text-orange-500 ">
                          <a href="#" class="text-xs text-gray-500">Trendyol'da Satış Yap Yardım </a>
                      </div>
                    </li>
                    <li class="mx-3">
                        <div class="grid items-center hover:text-orange-500 ">
                          <a href="#" class="text-xs text-gray-500">Yardım & Destek </a>
                      </div>
                    </li>
                  </ul>
              </div>
          </div>
          <div class="container mx-auto sm:px-2 lg:px-24 h-16  mb-2 flex  items-center justify-around    border-b-default lg:border-none border-gray-300  ">
                
                   <!-- LOGO -->
                <div id="logo" class="flex w-24 lg:w-64  ">
                  <img class="w-32" src="https://img-trendyol.mncdn.com/Assets//trendyol-stayhome.svg">
                </div>

                <div id="search" style="z-index: 30;"  class="lg:w-5/12 sm:w-full  text-4 font-sans-pro ">

                      <!-- SEARCH INPUT -->
                    <div style="z-index: 20;"  class="relative text-gray-600 focus-within:text-orange-500 ">
                        <span class="absolute inset-y-0 right-0  mr-6 flex items-center p-2 ">
                          <font-awesome-icon  @click="click" :icon="['fas', 'search']" class="mt-2 pb-1 text-5 lg:text-6 absolute  text-orange-500"  />
                        </span>
                        <input  class="bg-theme1  text-sm rounded-full py-2 px-5 w-full border-1 border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-700"
                          placeholder="Aradığınız ürün, kategori veya markayı yazınız" 
                          maxlength="50" type="text"
                          @mouseover="showHistory=true"
                          autocomplete="off">
                    </div>

                      <!-- SEARCH HISTORY -->
                    <div id="search-history" 
                        @mouseleave="showHistory=false"
                        v-show="showHistory" 
                        style="z-index: 10;" 
                        class="bg-white fixed w-96 -mt-5 px-4 py-5 border-r-default border-b-default border-l-default border-gray-400">
                        
                        <div class="flex items-center justify-between">
                          <span class="text-sm font-bold  text-orange-500 mt-2 ">Geçmiş Aramalar</span>
                            <a @click="searchHistory = []" href="#">Temizle</a>
                        </div>

                        <div id="history" > 
                            <ul class="grid list-none">
                              <li class="mx-3" v-for="item in searchHistory" :key="item.id">
                                  <div class="grid items-center hover:text-orange-500 ">
                                    <a :href="item.slug" class="text-sm text-gray-700 my-2 border-b-1 hover:border-transparent border-gray-300 hover:bg-secondary p-2">{{item.title}} </a>
                                </div>
                              </li>
                              
                          </ul>
                        </div>

                    </div>

                </div>

                <!-- QUICK MENU -->
                <div id="quick-menu"  class="w-3/12 hidden sm:hidden md:hidden lg:block">
                  <ul class="flex list-none pb-1 ">
                      <li class="mx-3" v-for="item in quickMenu" :key="item.id">
                          <div class="grid items-center text-gray-800 hover:text-orange-500 ">
                            <font-awesome-icon :icon="['fas', item.icon]" class="mt-3 pb-1 ml-2 text-6"  />
                            <a  :href="item.slug" class="text-xs">{{item.title}}</a>
                            
                        </div>
                      </li>
                    </ul>
                </div>
               
                
          </div>
      </div>

       <!-- MAIN MENU -->
      <div id="menu" class="relative h-10 hidden justify-between items-center border-default border-gray-600  sm:block md:block lg:flex ">
          <ul class="flex list-none pb-1 container mx-auto px-24 ">
            <li class=" mx-3 " v-for="item in Menu" :key="item.id">
                <div class="grid items-center hover:text-orange-500"
                   @mouseover="showSubMenu(`submenu${item.id}`)" 
                   @mouseleave="closeSubMenu(`submenu${item.id}`)" 
                   >
                  <a href="#"
                   style="z-index: 20;" 
                   class="text-4 uppercase text-gray-900 font-bold hover:text-orange-600  border-b-2 border-white hover:border-orange-600 ">{{item.title}} </a>
                     <div 
                        :ref="`submenu${item.id}`"
                        @mouseleave="closeSubMenu(`submenu${item.id}`)" 
                        style="z-index: 10;" 
                        class="hidden bg-white fixed left-0 ml-96 mx-auto w-6/12 mt-5  px-4 py-5 border-r-default border-b-default border-l-default border-gray-200">
                             <ul class="flex list-none  items-center justify-items-start ">
                                <li class="mx-3" v-for="subMenuItem in item.submenu" :key="subMenuItem.id">
                                    <div class="grid items-center hover:text-orange-500 ">
                                      <a href="#" class="text-sm text-gray-900 font-bold hover:text-primary  hover:underline"> {{subMenuItem.title}} </a>
                                        <ul class="grid list-none ">
                                          <li class="mx-3" v-for="secondSubMenuItem in subMenuItem.secondSubmenu" :key="secondSubMenuItem.id">
                                              <div class="grid items-center hover:text-orange-500 ">
                                                <a href="#" class="text-sm text-gray-500 hover:text-primary  hover:underline"> {{secondSubMenuItem.title}} </a>
                                            </div>
                                          </li>
                                      </ul>
                                  </div>
                                </li>
                             </ul>
                     </div>
              </div>
            </li>
           
          </ul>
      </div>

      <div>
        <MobileBottomMenu/>
      </div>
      
    </header>
    
</template>
<script>
import MobileBottomMenu from './MobileBottomMenu.vue';

export default {
  name: "Header",
  components: {
   MobileBottomMenu
  },
data () {
    return {
      showHistory:false,
      quickMenu : [
            {
              id: 1,
              title: 'Giriş Yap',
              slug: 'giris-yap',
              icon: 'user',
            },
            {
              id: 2,
              title: 'Favorilerim',
              slug: 'my-network',
              icon: 'heart',
            },
            {
              id: 3,
              title: 'Sepetim',
              slug: 'sepetim',
              icon: 'shopping-cart',
            }, 
          ],
      Menu : [
            {
              id: 1,
              title: 'KADIN',
              slug: 'giris-yap',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            },
            {
              id: 2,
              title: 'ERKEK',
              slug: 'my-network',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Gömlek',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Eşofman',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'Pantolon',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            },
            {
              id: 3,
              title: 'ÇOCUK',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 4,
              title: 'EV & YAŞAM',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 5,
              title: 'SÜPER MARKET',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 6,
              title: 'KOZMETİK',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 7,
              title: 'AYAKKABI & ÇANTA',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 8,
              title: 'SAAT & AKSESUAR',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
            {
              id: 9,
              title: 'ELEKTRONİK',
              slug: 'sepetim',
              submenu:[
                    {
                        id: 1,
                        title: 'Giyim',
                        slug: 'giyim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Elbise',
                              slug: 'elbise',
                          },
                          {
                             id: 2,
                              title: 'Sweatshirt',
                              slug: 'Sweatshirt',
                          },
                          {
                             id: 3,
                              title: 'T-shirt',
                              slug: 'T-shirt',
                          },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Ayakkabı',
                        slug: 'ayakkabi',
                         secondSubmenu:[
                          {
                             id: 1,
                              title: 'Topuklu Ayakkabı',
                              slug: 'topuklu-ayakkabi',
                          },
                          {
                             id: 2,
                              title: 'Sneaker',
                              slug: 'sneaker',
                          },
                          {
                             id: 3,
                              title: 'Günlük Ayakkabı',
                              slug: 'gunluk-ayakkabi',
                          },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Kozmetik & Kişisel Bakım',
                        slug: 'kozmetik-kisisel-bakim',
                        secondSubmenu:[
                          {
                             id: 1,
                              title: 'Parfüm',
                              slug: 'parfum',
                          },
                          {
                             id: 2,
                              title: 'Göz Makyajı',
                              slug: 'goz-makyaji',
                          },
                          {
                             id: 3,
                              title: 'Cilt Bakım',
                              slug: 'cilt-bakim',
                          },
                        ]
                    },
              ]
            }, 
          ],
     searchHistory : [
            {
              id: 1,
              title: 'Calisma Masasi',
              slug: 'giris-yap',
            },
            {
              id: 2,
              title: 'Macbook Pro',
              slug: 'my-network',
            },
            {
              id: 3,
              title: 'Thunderbolt Type C',
              slug: 'sepetim',
            }, 
          ],
     }
  },
  computed: {
  

  },
  watch : {

     
  },
  methods : {
      click(){
        console.log('clicked')
      },
      showSubMenu (refID){
       this.$refs[refID].classList.remove('hidden')
      },
      closeSubMenu (refID){
       this.$refs[refID].classList.add('hidden')
      }

  },
 
  mounted () {
  

  },
  created () {
    

  }

}
</script>

