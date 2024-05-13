<script setup>
</script>

<template>
    <div class="content">
        <div class="resume">
            <div class="resume-header">
                <div class="title">
                    <h1>Рябикин Кирилл Сергеевич</h1>
                </div>
                <div class="avatar">
                    <img class="image" src="../assets/avatar.jpg" alt="avatar" />
                </div>
            </div>
            <div class="resume-main">
                <div class="common-info">
                    <div class="expirience">
                        <h2>Опыт работы:</h2>
                        <p>Проходил производственную практику в компании <span>"Heads&Hands"</span>.</p>
                        <p>На данной практике изучался фреймворк <span>Vue.js</span>, создавая веб-приложение - список
                            дел.</p>
                        <p>В нём имеется возможность создания дела, его редактирование и удаление. Также реализован
                            поиск по существующим делам.</p>
                        <p>Приложение имеет страницу аутентификации, страницу объектов, и страницу изменения положения и
                            видимости объектов.</p>
                        <p>В ходе разработки также были затронуты <span>Vue Router</span>, библиотека <span>Pinia</span> и <span>Drag&Drop</span> функционал.
                        </p>
                        <p><a href="https://github.com/Kilvii/PracticeHaH/blob/main/TodoList">Здесь</a> можно посмотреть
                            результат работы</p>
                    </div>
                    <div class="education">
                        <h2>Образование:</h2>
                        <p>На данный момент являюсь студентом 4-го курса.</p>
                        <p>Учебное заведение: МГУ Им. Н.П. Огарёва, Мордовский государственный
                            университет, г. Саранск.</p>
                        <p>Факультет: Математики и информационных технологий.</p>
                        <p>Специальность: Прикладная математика и информатика.</p>
                        <p>Форма обучения: Очная</p>
                    </div>
                    <div class="rest-time">
                        <h2>Занятия в свободное время:</h2>
                        <p>Здоровый образ жизни, настольные и видео игры, чтение различной литературы,
                            театральная деятельность.</p>
                    </div>
                    <div class="qualities">
                        <h2>Личные качества:</h2>
                        <p>Выполняю поставленные задачи и цели, стремлюсь выполнять начатое дело до
                            конца, желаю учиться и развиваться.</p>
                        <p>Ответственный, пунктуальный, могу найти
                            общий язык коллективе.</p>
                    </div>
                </div>
                <div class="personal-info">
                    <div class="contact">
                        <h2>Контакты:</h2>
                        <p>kirill2002ares@gmail.com</p>
                        <p>+79608438577</p>
                        <p>Телеграм: @Kilvii</p>
                    </div>
                    <div class="personal">
                        <h2>Обо мне:</h2>
                        <p>Дата рождения: 04 апреля 2002 (22 года)</p>
                        <p>Пол: Мужской</p>
                        <p>Семейное положение: Не женат (Детей нет)</p>
                        <p>Гражданство: Российская Федерация</p>
                        <p>Место проживания: г. Саранск</p>
                    </div>
                    <div class="skills">
                        <h2>Технологии:</h2>
                        <p>Java, Kotlin, Python</p>
                        <p>HTML, CSS, JS</p>
                        <p>SQLite, MongoDB, Neo4j</p>
                    </div>
                    <div class="other">
                        <h2>Иностранные языки:</h2>
                        <p>Английский язык - средний уровень.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-width: 320px;
    min-height: 200px;

}

.resume {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgb(131, 131, 75);
    border-radius: 16px;
}

.resume-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.common-info>*:not(:last-child) {
    margin-bottom: 16px;
}

.personal-info>*:not(:last-child) {
    margin-bottom: 16px;
}

.image {
    height: 120px;
    width: 120px;
    border-radius: 100px;
}

.resume-main {
    display: flex;
    flex-direction: row;
}

.common-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 560px;
    margin-right: 16px;
}

.personal-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 250px;
}

.contact,
.personal,
.skills,
.other {
    width: 100%;
}

p {
    font-size: 16px;
}

span {
    font-weight: bold;
}
</style>