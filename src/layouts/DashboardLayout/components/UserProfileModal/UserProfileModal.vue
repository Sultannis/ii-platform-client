<script setup lang="ts">
import CommonModal from '@/common/components/CommonModal/CommonModal.vue'
import CommonProfileImageUpload from '@/common/components/CommonProfileImageUpload/CommonProfileImageUpload.vue'
import CommonMenuNavigation from '@/common/components/CommonMenuNavigation/CommonMenuNavigation.vue'
import PersonCommonPage from '@/common/components/PersonCommonPage/PersonCommonPage.vue'
import PersonWorksPage from '@/common/components/PersonWorksPage/PersonWorksPage.vue'
import { PROFILE_MENU_LINKS } from '@/common/constants/profileMenuLinks'
import {
  personModalVisible,
  closePersonModal,
} from '@/common/composables/personModalState'
import { ref } from 'vue'

const seletedLinkTitle = ref('')

const setSelectedLinkTitle = (title: string) => {
  seletedLinkTitle.value = title
}
</script>

<template>
  <CommonModal
    v-if="personModalVisible"
    width="900"
    @close-click="closePersonModal"
  >
    <div class="person">
      <div class="person__left">
        <div
          v-if="false"
          class="person__left-loader"
        >
          <a-skeleton-avatar
            active
            avatar
            :size="260"
          />
          <a-skeleton
            active
            :paragraph="{ rows: 4 }"
          />
          <a-skeleton
            active
            :paragraph="{ rows: 2 }"
          />
        </div>

        <div
          v-else
          class="person__left-top"
        >
          <CommonProfileImageUpload />
          <div class="person__name">Sultan Mustafin</div>
          <div class="person__username">@ its.sultan</div>
          <div class="person__bio">
            <i class="bx bx-info-circle perison__bio-icon" /> get rich or die
            trying
          </div>
          <div class="person__description">
            Основатель рекорд-лейбла Epinefrin suplex. Одними из участиников
            которого являются Lil baby, J. Cole, Lil boat.
          </div>
        </div>
        <button
          v-if="false"
          class="person__button person__button_delete"
        >
          <i class="bx bx-user-minus person__icon" />
          Удалить из контактов
        </button>
        <button
          v-else
          class="person__button person__button_add"
        >
          <i class="bx bx-user-plus person__icon" />
          Добавить в контакты
        </button>
      </div>
      <div class="person__right">
        <CommonMenuNavigation
          :links="PROFILE_MENU_LINKS"
          @click="setSelectedLinkTitle"
        />
        <div class="person__content">
          <div
            v-if="false"
            class="person__content-loader"
          >
            <a-skeleton
              active
              :paragraphs="{ rows: 4 }"
            />
            <a-skeleton
              active
              :paragraphs="{ rows: 4 }"
            />
          </div>

          <PersonCommonPage v-if="seletedLinkTitle == 'Common'" />
          <PersonWorksPage v-if="seletedLinkTitle == 'Work'" />
        </div>
      </div>
    </div>
  </CommonModal>
</template>

<style scoped>
.person {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
}

.person__left {
  padding: 20px;
  height: 100%;
  width: 300px;
  background: #fff;

  font-weight: 600;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.person__right {
  height: 100%;
  width: 100%;
  margin-left: 10px;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.person__content {
  height: 100%;
}

.person__content-loader {
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

.person__name {
  font-size: 20px;
  color: var(--text-color);
}

.person__bio {
  display: flex;
  align-items: center;
}

.perison__bio-icon {
  margin-right: 5px;
}

.person__description {
  margin-top: 5px;
  font-size: 12px;
}

.person__username {
  color: var(--primary-color);
}

.person__button {
  cursor: pointer;
  padding: 10px 20px;
  color: var(--text-color);

  border-radius: 5px;

  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 600;
}

.person__button_add {
  background-color: var(--background-highlighted-color);
  transition: all 0.2s linear;
}

.person__button_add:hover {
  color: var(--primary-color);
  transition: all 0.2s linear;
}

.person__icon {
  font-size: 25px;
  margin-right: 15px;
}
</style>
