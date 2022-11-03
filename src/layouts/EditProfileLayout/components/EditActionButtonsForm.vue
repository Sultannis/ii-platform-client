<template>
    <div class="edit-form-action">Действия</div>
    <div class="edit-form">
        <button class="save-changes">Сохранить изменения</button>
        <button class="cancel-changes">Отменить изменения</button>
    </div>
</template>

<style>

.edit-form-action {
    margin-bottom: 20px;
    margin-left: 40px;

    font-size: 20px;
    font-weight: 600;
}

.edit-form {
    width: 100%;
    background: #ffffff;
    padding: 40px 200px 40px 50px;

    border: none;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    position: relative;
}

.save-changes {
    width: 300px;
    height: 50px;
    margin-right: 100px;

    border: none;
    border-radius: 10px;

    background: var(--primary-color);
    color: #ffffff;
    cursor: pointer;

    font-size: 20px;
    font-weight: 600;
}

.cancel-changes {
    width: 300px;
    height: 50px;

    border-color: var(--primary-color);
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    
    background: #ffffff;
    color: var(--primary-color);
    cursor: pointer;

    font-size: 20px;
    font-weight: 600;
}
</style>