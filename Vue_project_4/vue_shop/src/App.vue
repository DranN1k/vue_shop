<script setup>
import { ref, reactive, computed } from 'vue';

const searchObj = reactive({
  search: '',
  checkedCloth: '',
})

const clothingList = ref([
  { name: 'All', label: 'Всё' },
  { name: 'TShirts', label: 'Майки' },
  { name: 'Тrousers', label: 'Штаны' },
  { name: 'Shoes', label: 'Обувь' },
]);
const itemsShop = ref([
  { category: 'Shoes', img: '../src/assets/img/shoes_2.jpg', name: 'Кеды' },
  { category: 'TShirts', img: '../src/assets/img/tshort_1.jpg', name: 'Майка белая' },
  { category: 'TShirts', img: '../src/assets/img/tshort_3.jpg', name: 'Майка коричневая' },
  { category: 'Тrousers', img: '../src/assets/img/trousers_1.jpg', name: 'спортивные штаны' },
  { category: 'Тrousers', img: '../src/assets/img/trousers_3.jpg', name: 'серые штаны' },
  { category: 'Shoes', img: '../src/assets/img/shoes_1.jpg', name: 'Серые кеды' },
  { category: 'TShirts', img: '../src/assets/img/tshort_2.jpg', name: 'черная майка' },
  { category: 'Тrousers', img: '../src/assets/img/trousers_2.jpg', name: 'Черные джинсы' },
  { category: 'Shoes', img: '../src/assets/img/shoes_3.jpg', name: 'Кросовки' },
]);

const searchCloth = computed(() => {
  let product = itemsShop.value;
  let val = searchObj.search;
  let sort = searchObj.checkedCloth;
  if (val) {
    product = product.filter((product) => {
      return product.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
    })
  }
  if (sort) {
    if (sort == 'All') {
      return product;
    }
    else product = product.filter((product) => {
      return product.category.indexOf(sort) !== -1
    })
  }
  return product;
})

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__logo">LOGO</div>
      <div class="header__search">
        <VInput v-model="searchObj.search" placeholder="Поиск товаров..." />
      </div>
    </div>
    <div class="main">

      <div class="main__options">
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <div v-for="  cloth   in   clothingList  " :key="cloth">
            <!-- <input type="checkbox" :value=cloth.name v-model="searchObj.checkedCloth">
            <label>{{ cloth.name }}</label> -->
            <input type="radio" class="btn-check" :id=cloth.name autocomplete="off" :value=cloth.name
              v-model="searchObj.checkedCloth">
            <label class="btn btn-outline-primary clothingList" :for=cloth.name>{{ cloth.label }}</label>
          </div>
        </div>
      </div>
      <div class="main__products">
        <ul class="product__list">
          <li v-for="  item   in   searchCloth  " :key="item" class="product__item item">
            <div class="item__img"><img :src=item.img alt=""></div>
            <div class="item__info">
              <div class="item__name">{{ item.name }}</div>
              <VButton class="item__btn">Заказать</VButton>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped></style>
