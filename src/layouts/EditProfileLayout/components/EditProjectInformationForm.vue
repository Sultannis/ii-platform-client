<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { reactive } from "vue";
import { Form } from "ant-design-vue";

const useForm = Form.useForm;

const rules = reactive({
  title: [
    { required: true, message: "Заголовок должен быть заполнен", trigger: "blur"}
  ],
  description: [
    { required: true, message: "Описание должно быть заполнено", trigger: "blur"},
  ],
});

const form = reactive({
  title: "",
  description: "",
  link: "",
});

const { validate, validateInfos } = useForm(form, rules);

const handleFormSubmission = () => {
  validate();
};
</script>

<template>
    <div class="project">
        <div class="project__title">Проекты</div>
        <div class="project__form">
          <a-form
          :model="form"
          layout="vertical"
          validate-trigger="onBlur"
          >
          <a-form-item v-bind="validateInfos.title" name="title" label="Заголовок*">
            <a-input v-model:value="form.title" />
          </a-form-item>
          <a-form-item v-bind="validateInfos.description" name="description" label="Описание*">
            <a-textarea v-model:value="form.description" rows="4"></a-textarea>
          </a-form-item>
          <a-form-item v-bind="validateInfos.link" name="link" label="Ссылка">
            <a-input v-model:value="form.link" label="Ссылка" />
          </a-form-item>
          <div class="project__field project__field_align-start">
              <div class="project__label">Теги</div>
              <div class="project__tags">
                  <CommonTag>иновации</CommonTag>
                  <CommonTag>роботы</CommonTag>
                  <CommonTag>работы</CommonTag>
                  <CommonTag>обучения</CommonTag>
                  <CommonTag>иновации</CommonTag>
                  <CommonTag>иновации</CommonTag>
                  <CommonTag>иновации</CommonTag>
                  <CommonTag>иновации</CommonTag>
              </div>
          </div>
          <button class="project__delete">
            <i class='bx bx-trash'></i>
          </button>
          </a-form>
        </div>
        <div class="add-button">
          <button class="project__add">
            <i class='bx bx-plus'></i>
            Добавить проект
          </button>
        </div>
        
    </div>
</template>

<style scoped>

.project__title{
    margin-bottom: 15px;
    padding-left: 40px;
    
    font-weight: 600;
    font-size: 20px;
    color: var(--text-color);
}

.project__form {
    margin-bottom: 20px;
    padding: 20px 40px;
    width: 100%;
    position: relative;

    background: #ffffff;
    border-radius: 10px;    
}

.project__field {
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
}

.project__field_align-start {
  align-items: flex-start;
}

.project__label {
  display: block;
  min-width: 200px;
  margin-bottom: 8px;
}

.project__tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.ant-input {
  border: 1px solid var(--text-color-grey);
  border-radius: 10px;
}

.project__add {
    width: 260px;
    height: 40px;
    margin-left: 40px;
    margin-bottom: 40px;
    
    border: none;
    border-radius: 10px;

    background: #ffffff;
    color: var(--primary-color);

    font-size: 18px;
    cursor: pointer;
    transition-duration: 0.2s;
}

.project__add:hover {
  background: #4338CA21;
}

.bx {
  font-size: 18px;
}

.project__delete {
  width: 30px;
  height: 30px;
  
  position: absolute;
  bottom: 10px;
  right: 10px;

  border: none;
  background: #ffffff;
  color: var(--text-color);
  cursor: pointer;
}


@media screen and (max-width: 768px) {

  .project {
    padding: none;
    vertical-align: middle;
  }

  .project__form {
    padding: 20px 20px;
    margin-bottom: 15px;
  }

  .project__title {
    margin-bottom: 5px;
    padding: 0;
    text-align: center;
  }

  .project__field {
    align-items: flex-start;
    flex-direction: column;
}
  .project__label {
    margin-bottom: 10px;
}

  .project__add {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  .add-button {
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    align-items: center;
  }

}
</style>
          
          