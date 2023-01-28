<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { useFetchPersonContactList } from "@/common/composables/fetchContactList";
import { onBeforeMount } from "vue";
import { selectedPersonId } from "@/common/composables/personModalState";
import { useFetchPerson } from "@/common/composables/fetchPerson";


const { person } = useFetchPerson();
const { contactList, fetchPersonContactList } = useFetchPersonContactList();
onBeforeMount(() => {
  fetchPersonContactList(selectedPersonId.value);
});

</script>

<template>
  <div class="common">
    <div class="common__item">
      <div class="common__title">Профессия</div>
      <div class="common__occupation">{{ person.occupation }}</div>
    </div>
    <div class="common__item">
      <div class="common__title">Теги</div>
      <div class="common__tags">
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
      </div>
    </div>
    <div class="common__item">
      <div class="common__title">Контакты</div>
      <div class="common__contact">
        <i class="bx bxl-telegram common__icon" /> {{ contactList.telegramNickname }} 
      </div>
      <div class="common__contact">
        <i class="bx bxl-linkedin-square common__icon" />
        {{ contactList.linkedinLink }}
      </div>
      <div class="common__contact">
        <i class='bx bxl-github common__icon' /> {{ contactList.githubLink }}
      </div>
      <div class="common__contact">
        <i class='bx bxs-envelope common__icon' /> {{ contactList.email }}
      </div>
      <div class="common__contact">
        <i class='bx bxs-phone-call common__icon'/> {{contactList.phoneNumber}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.common {
  height: 100%;
  padding: 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.common__item {
  margin-bottom: 10px;
}

.common__occupation {
  color: var(--primary-color);
  font-size: 18px;
}

.common__tags {
  font-weight: 400;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
}

.common__title {
  margin-bottom: 3px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color-grey);
  font-size: 11px;
}

.common__contact {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}

.common__icon {
  margin-right: 8px;
  font-size: 20px;
  color: var(--primary-color);
}
</style>
