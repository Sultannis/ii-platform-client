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
    display: flex;
    justify-content: space-between;
    
    background: #fff;
    border-radius: 10px;    
}

.action__save {
    width: 45%;
    height: 40px;

    border: none;
    border-radius: 10px;

    background: var(--primary-color);
    color: #ffffff;

    font-size: 18px;
    cursor: pointer;
}

.action__cancel {
    width: 45%;
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

@media screen and (max-width: 768px) {
    .action__form {
        flex-direction: column;
    }

    .action__title {
        padding: 0;
        text-align: center;
        margin-bottom: 5px;
    }
    .action__cancel {
        width: 100%;
    }

    .action__save {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>