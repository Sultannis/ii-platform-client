<script setup lang="ts">
import CommonTag from '@/common/components/CommonTag/CommonTag.vue';
import { useFetchPersonContactList } from '@/common/composables/fetchContactList';
import { onBeforeMount, computed } from 'vue';
import { selectedPersonId } from '@/common/composables/personModalState';
import { useFetchPerson } from '@/common/composables/fetchPerson';

const { person } = useFetchPerson();
const { contactList, fetchPersonContactList, contactListLoading } =
  useFetchPersonContactList();
onBeforeMount(() => {
  fetchPersonContactList(selectedPersonId.value);
});

const emptyCharacteristics = computed(() => {
  return person.value.characteristics.length === 0;
});
</script>

<template>
  <div class="common">
    <div class="common__item">
      <div class="common__title">Profession</div>
      <div
        class="common__occupation"
        v-if="person.occupation"
      >
        {{ person.occupation }}
      </div>
      <div
        class="common__occupation"
        v-else
      >
        No profession
      </div>
    </div>
    <div class="common__item">
      <div class="common__title">Tags</div>
      <div class="common__tags">
        <CommonTag
          v-if="!emptyCharacteristics"
          v-for="tag in person.characteristics"
          :tag="tag"
        />
        <div
          v-else
          class="common__empty"
        >
          None
        </div>
      </div>
    </div>
    <div class="common__item">
      <div class="common__title">Contacts</div>
      <div
        class="common__contacts"
        v-if="!contactListLoading"
      >
        <div
          class="common__contacts-item"
          v-if="contactList.telegramNickname"
        >
          <i class="bx bxl-telegram common__icon" />
          {{ contactList.telegramNickname }}
        </div>
        <div
          class="common__contacts-item"
          v-if="contactList.linkedinLink"
        >
          <i class="bx bxl-linkedin-square common__icon" />
          <a
            :href="contactList.linkedinLink"
            target="_blank"
            class="common__link"
            >{{ contactList.linkedinLink }}</a
          >
        </div>
        <div
          class="common__contacts-item"
          v-if="contactList.githubLink"
        >
          <i class="bx bxl-github common__icon" />
          <a
            :href="contactList.githubLink"
            target="_blank"
            class="common__link"
            >{{ contactList.githubLink }}</a
          >
        </div>
        <div
          class="common__contacts-item"
          v-if="contactList.email"
        >
          <i class="bx bxs-envelope common__icon" /> {{ contactList.email }}
        </div>
        <div
          class="common__contacts-item"
          v-if="contactList.phoneNumber"
        >
          <i class="bx bxs-phone-call common__icon" />
          {{ contactList.phoneNumber }}
        </div>
      </div>
      <div
        class="common__contacts-skeleton"
        v-else
      >
        <a-skeleton
          active
          :paragraph="{ rows: 4 }"
          :title="false"
        />
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

.common__empty {
  color: var(--primary-color);
  margin-top: -8px;
  font-size: 18px;
  font-weight: 600;
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

.common__contacts {
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
}

.common__contacts-item {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}
.common__icon {
  margin-right: 8px;
  font-size: 20px;
  color: var(--primary-color);
}

.common__link {
  color: black;
}

.common__link:hover {
  color: var(--primary-color);
}

.common__contacts-skeleton {
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
}
</style>
