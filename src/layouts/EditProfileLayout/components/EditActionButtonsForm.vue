<template>
    <div class="action"></div>
        <div class="action__title">Действия</div>
        <div class="action__form">
            <button class="action__save">Сохранить изменения</button>
            <button class="action__cancel">Отменить изменения</button>
        </div>
</template>

<style scoped>

.action__title{
    margin-bottom: 15px;
    padding-left: 40px;
    
    font-weight: 600;
    font-size: 20px;
    color: var(--text-color);
}

.action__form {
    padding: 20px 40px;
    width: 100%;

    background: #fff;
    border-radius: 10px;    
}

.action__save {
    width: 260px;
    height: 40px;
    margin-right: 100px;

    border: none;
    border-radius: 10px;

    background: var(--primary-color);
    color: #ffffff;

    font-size: 18px;
    cursor: pointer;
}

.action__cancel {
    width: 260px;
    height: 40px;

    border-color: var(--primary-color);
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    
    background: #ffffff;
    color: var(--primary-color);

    font-size: 18px;
    cursor: pointer;
}
</style>