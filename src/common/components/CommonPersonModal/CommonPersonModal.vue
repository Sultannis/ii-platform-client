<script setup lang="ts">
import CommonModal from "@/common/components/CommonModal/CommonModal.vue";
import CommonProfileImageUpload from "@/common/components/CommonProfileImageUpload/CommonProfileImageUpload.vue";
import CommonMenuNavigation from "@/common/components/CommonMenuNavigation/CommonMenuNavigation.vue";
import PersonCommonPage from "@/common/components/PersonCommonPage/PersonCommonPage.vue";
import PersonProjectsPage from "@/common/components/PersonProjectsPage/PersonProjectsPage.vue";
import PersonEducationPage from "../PersonEducationPage/PersonEducationPage.vue";
import { PROFILE_MENU_LINKS } from "@/common/constants/profileMenuLinks";
import {
  personModalVisible,
  closePersonModal,
  selectedPersonId,
} from "@/common/composables/personModalState";
import { onUpdated, ref } from "vue";
import { useFetchPerson } from "@/common/composables/fetchPerson";


onUpdated(() => {
  if(personModalVisible.value) {
    fetchPerson(selectedPersonId.value).catch(closePersonModal);
  }
});


const seleсtedLinkTitle = ref("");

const setSelectedLinkTitle = (title: string) => {
  seleсtedLinkTitle.value = title;
};

const { person, personFetchLoading, fetchPerson } = useFetchPerson();


</script>


<template>
  <CommonModal
    v-if="personModalVisible"
    width="900"
    @close-click="closePersonModal"
  >
    <div class="person">
      <template v-if="!personFetchLoading">
        <div class="person__left">
          <div class="person__left-top">
            <CommonProfileImageUpload />
            <div class="person__name"> {{ person.firstName }} {{ person.lastName }} </div>
            <div class="person__username"> {{ person.nickName }} </div>
            <div class="person__bio">
              <i class="bx bx-info-circle person__bio-icon" /> {{ person.bio }}
            </div>
          </div>
          <button v-if="false" class="person__button person__button_delete">
            <i class="bx bx-user-minus person__icon" />
            Удалить из контактов
          </button>
          <button v-else class="person__button person__button_add">
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
            <PersonCommonPage v-if="seleсtedLinkTitle == 'Общая'" />
            <PersonProjectsPage v-if="seleсtedLinkTitle == 'Проекты'" />
            <PersonEducationPage v-if="seleсtedLinkTitle == 'Educational Institutions'"/>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="person__left-skeleton">
          <a-skeleton-avatar active avatar :size="260" />
          <a-skeleton active :paragraph="{ rows: 4 }" />
          <a-skeleton active :paragraph="{ rows: 2 }" />
        </div>
        <div class="person__right">
          <div class="person__nav-skeleton">
            <a-skeleton active :paragraph="{ rows: 1 }" :title="false"/>
          </div>
          <div class="person__content-skeleton">
            <a-skeleton active :paragraphs="{ rows: 4 }" />
            <a-skeleton active :paragraphs="{ rows: 4 }" />
          </div>
        </div>
      </template>
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

.person__name {
  font-size: 20px;
  color: var(--text-color);
}

.person__bio {
  display: flex;
}

.person__bio-icon {
  position: relative;
  top: 5px;
  margin-right: 5px;
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

.person__left-skeleton {
  padding: 20px;
  height: 100%;
  width: 300px;
  background: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.person__content-skeleton {
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

.person__nav-skeleton {
  margin-bottom: 10px;
  min-height: 55px;
  padding: 20px 20px 0 20px;
  background: #fff;
  border-radius: 10px;
}
</style>
