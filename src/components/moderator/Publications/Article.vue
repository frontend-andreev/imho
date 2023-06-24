<template>
  <div class="article">
    <div class="article__content main-content main-color">
      <div class="article__image">
        <img src="@/assets/images/articleImage.jpg" alt="articleBG" />
      </div>
      <div class="article__column">
        <p class="article__subtitle">Источник: фото с сайта</p>
        <p class="article__subtitle">
          Фото флага турции на набережной Стамбула
        </p>
      </div>
      <div class="article__column">
        <p class="article__text">
          Приковывающие внимание события происходят не только на Украине. 23 мая
          президент Турции Реджеп Тайип Эрдоган объявил о начале очередной
          военной операции в Сирии. Её целью называется завершение создания
          30-километровой зоны безопасности вдоль южной турецкой границы,
          служащей «для подавления террористических угроз, исходящих из этого
          региона».
        </p>
      </div>
      <div class="article__column">
        <p class="article__text article__text_before">
          Речь идёт о курдских и арабских отрядах, действующих в Сирии, которых
          Турция считает угрозой для своей территориальной целостности и
          безопасности. При этом Эрдоган заявляет, что он привержен сохранению
          территориальной целостности Сирии и военная операция позволит вернуть
          сирийских беженцев в свои дома.
        </p>
      </div>
      <div class="article__column">
        <img src="@/assets/images/articleImage2.jpg" alt="image" />
      </div>
      <div class="article__column">
        <p class="article__text article__text_before">
          Американцы эти действия Турции не поддержали и выводят оттуда свои
          войска. При этом у них были договоренности с курдскими повстанцами о
          том, что они там будут оставаться и, таким образом, гарантировать
          отсутствие активности турецких военных против них.
        </p>
      </div>
      <div class="article__column">
        <p class="article__text article__text_before">
          К сожалению, ближайшие аналогии с Сирией напрашивают совсем рядом с
          нами – на Украине. Эта страна также стала масштабным полем боя, к чему
          непосредственно приложил руку именно Запад, всегда зарабатывающий на
          людской беде, войнах и конфликтах.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.article {
  overflow-y: auto;
  &__subtitle {
    font-size: 10px;
  }
  &__column {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__content {
    padding: 16px;
    border-radius: 24px;
    height: 100%;
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__text {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__column img {
      width: 100%;
    }
    &__text {
      font-size: 12px;
    }
  }
}
</style>