<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, inject } from 'vue';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';


const windowWidth = inject('windowWidth'); // Инжектируем из App.vue
const counter = ref(1);
const username = ref('');
const email = ref('');
const phoneNumber = ref('');
const datePick = ref('');
const hasChildrenUnder16 = ref(false); // чекбокс
const additionalNotes = ref(''); // текстовое поле
const isLoading = ref(false);
const dialogVisible = ref(false);
const dialogTitle = ref('');
const dialogSubtitle = ref('');
const titleStyle = ref('');
const errors = ref({
  username: '',
  email: '',
  phoneNumber: '',
  datePick: '',
});
const svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; stroke: #FF2442; fill: rgba(0, 0, 0, 0)"/>
`

const botToken = '7669866826:AAFs07nqbLIp2DUptJZUfJej1JyRhDMhvAc';
const chatId = '442447999';

const resetForm = () => {
 username.value = '';
  counter.value = 1;
  email.value = '';
  phoneNumber.value = '';
  datePick.value = '';
  hasChildrenUnder16.value = false;
  additionalNotes.value = '';
  iti.value.setCountry('');
}

// Функции для увеличения и уменьшения счётчика
const counterPlus = () => { counter.value++; };
const counterMinus = () => { counter.value--; };

// Функция для отключения воскресений в календаре
const disabledDate = (date) => date.getDay() === 0;

// Функция для добавления "+" при фокусе на поле, если его ещё нет
const addPlusSign = () => {
 if (!phoneNumber.value.startsWith('+')) {
    phoneNumber.value = '+' + phoneNumber.value;
  }
};

// Функция для проверки и удаления лишнего `+`, если пользователь его добавил
const enforcePlusSign = () => {
  // Убираем любой `+`, кроме первого символа
  phoneNumber.value = phoneNumber.value.replace(/^(\+?)(.*)$/, (_, plus, rest) => `+${rest.replace(/\+/g, '')}`);
};

// Убирает "+" и возвращает placeholder, если поле пустое при потере фокуса
const removePlusIfEmpty = () => {
  if (phoneNumber.value === '+') {
    phoneNumber.value = '';
    iti.value.setCountry('');
  }
};

// Функция для проверки значений
const validateForm = (event) => {

  errors.value.username = '';
  errors.value.email = '';
  errors.value.phoneNumber = '';
  errors.value.datePick = '';

  // Валидация имени
  if (!username.value) {
    errors.value.username = 'Пожалуйста, заполните это поле!';
  } else {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    if (!nameRegex.test(username.value)) {
      errors.value.username = 'Пожалуйста, используйте только буквы!';
    }
  }

  // Валидация email
  if (!email.value) {
    errors.value.email = 'Пожалуйста, заполните это поле!';
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      errors.value.email = 'Пожалуйста, введите корректный email!';
    }
  }

  // Валидация номера телефона
  if (!phoneNumber.value) {
    errors.value.phoneNumber = 'Пожалуйста, введите номер в международном формате!';
  } else if (!iti.value.isValidNumber()) {
    // Проверка на валидность номера
    errors.value.phoneNumber = 'Введите корректный номер телефона!';
  } else {
    const cleanedNumber = phoneNumber.value.replace(/[\s-]/g, '');
    if (cleanedNumber.startsWith('+840')) {
      errors.value.phoneNumber = 'Введите корректный номер телефона!';
    }
  }



// Проверка выбора даты
  if (!datePick.value) {
    errors.value.datePick = 'Пожалуйста, выберите дату!';
  } else {
    // Преобразование строки даты в формат YYYY-MM-DD
    const [day, month, year] = datePick.value.split('.'); // Разделяем строку по точкам
    const formattedDate = `${year}-${month}-${day}`; // Форматируем в YYYY-MM-DD
    const selectedDate = new Date(formattedDate); // Создаем объект даты

    // Обнуляем время у selectedDate, чтобы избежать различий во времени
    selectedDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Устанавливаем время на полночь

    // Проверка на корректность даты
    if (isNaN(selectedDate.getTime())) {
      errors.value.datePick = 'Пожалуйста, выберите корректную дату!';
    } else if (selectedDate.getTime() === today.getTime()) {
      errors.value.datePick = 'На сегодня забронировать тур нельзя!';
    } else if (selectedDate < today) {
      errors.value.datePick = 'Пожалуйста, выберите корректную дату!';
    } else {
      // Если дата корректная, можно обнулить ошибку
      errors.value.datePick = '';
    }
  }
  if (!errors.value.username && !errors.value.email && !errors.value.phoneNumber && !errors.value.datePick) {
    submitForm();
    resetForm();
  }
};

// Функция для отправки сообщения в Telegram
const submitForm = () => {
  const message = `
    Новая заявка!
    Имя: ${username.value}
    Email: ${email.value}
    Телефон: ${phoneNumber.value.replace(/[\s-]/g, '')}
    Предполагаемая Дата: ${datePick.value}
    Количество человек: ${counter.value}
    Дети до 16: ${hasChildrenUnder16.value ? 'Заявлены' : 'Не Заявлены'}
    Дополнительные пожелания: ${additionalNotes.value || 'Не заполнено'}
  `;

  isLoading.value = true;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dialogVisible.value = true;
          dialogTitle.value = 'Заявка принята';
          dialogSubtitle.value = 'Мы свяжемся с вами в ближайшее время, чтобы уточнить детали и подтвердить бронь';
          titleStyle.value = {
            color: 'var(--color-light)'
          }
        } else {
          dialogVisible.value = true;
          // Обработка ошибки, если сообщение не отправлено
          dialogTitle.value = 'Проблема с соединением';
          dialogSubtitle.value = 'Пожалуйста, повторите попытку';
          titleStyle.value = {
            color: 'var(--color-red)'
          }
        }
      })
      .catch((error) => {
        dialogVisible.value = true;
        console.error('Возникла ошибка:', error);
        dialogTitle.value = 'Проблема с соединением';
        dialogSubtitle.value = 'Пожалуйста, повторите попытку';
        titleStyle.value = {
          color: 'var(--color-red)'
        }
      })
      .finally(() => {
        isLoading.value = false;
      });
};


let tooltip = ref(null);
let timer;
const timeout = 700;
const iti = ref({})

const showTooltip = (e) => {

  clearTimeout(timer); // Очищаем существующий таймер

  const currentInput = e.target; // текущий инпут

  const refValue = currentInput.getAttribute('data-ref'); // получаем значение data-ref


  const tooltipElement = document.querySelector(`[data-tooltip="${refValue}"]`); // Находим элемент с data-tooltip, равным полученному data-ref

  // Устанавливаем tooltip.value в найденный элемент, если он существует
  tooltip.value = tooltipElement;


  // Устанавливаем позицию подсказки сразу
  if (tooltip.value) {
    tooltip.value.style.left = `${e.pageX + 10}px`;
    tooltip.value.style.top = `${e.pageY + 10}px`;
    tooltip.value.style.visibility = 'visible'; // Подсказка видима в DOM
    tooltip.value.style.color = 'transparent'; // Делаем цвет текста прозрачным
    tooltip.value.style.backgroundColor = 'transparent'; // Делаем фон прозрачным
  }

  // Запускаем таймер, чтобы сделать подсказку видимой через 700мс без движения
  timer = setTimeout(() => {
    if (tooltip.value) {
      tooltip.value.style.color = ''; // Сбрасываем цвет текста на стандартный
      tooltip.value.style.backgroundColor = ''; // Сбрасываем фон на стандартный
    }
  }, timeout);
};

const hideTooltip = () => {
  clearTimeout(timer); // Очищаем таймер при скрытии подсказки
  if (tooltip.value) {
    tooltip.value.style.visibility = 'hidden'; // Скрываем подсказку
    tooltip.value.style.color = ''; // Сбрасываем цвет текста
    tooltip.value.style.backgroundColor = ''; // Сбрасываем цвет фона
  }
};

const moveTooltip = (e) => {
  if (tooltip.value) {
    // Обновляем позицию подсказки
    tooltip.value.style.left = `${e.pageX + 10}px`;
    tooltip.value.style.top = `${e.pageY + 10}px`;

    // Очищаем существующий таймер, так как мышь движется
    clearTimeout(timer);

    // Сбрасываем подсказку на прозрачный цвет
    tooltip.value.style.color = 'transparent';
    tooltip.value.style.backgroundColor = 'transparent';

    // Запускаем таймер снова для изменения видимости через 700мс
    timer = setTimeout(() => {
      if (tooltip.value) {
        tooltip.value.style.color = ''; // Сбрасываем цвет текста
        tooltip.value.style.backgroundColor = ''; // Сбрасываем цвет фона
      }
    }, timeout);
  }
};

// Обработчики жизненного цикла для добавления/удаления слушателей событий
onMounted(async () => {
  await nextTick(); // Убедимся, что элементы существуют в DOM

  const input = document.querySelector("#phoneNumber");

  iti.value = intlTelInput(input, {
    loadUtilsOnInit: `https://cdn.jsdelivr.net/npm/intl-tel-input@${intlTelInput.version}/build/js/utils.js`,
  });


  const inputs = document.querySelectorAll('input[data-ref^="inputTracking"]')
  inputs.forEach(input => {
    input.addEventListener('mouseenter', showTooltip);
    input.addEventListener('mouseleave', hideTooltip);
    input.addEventListener('mousemove', moveTooltip);
  })
});

onUnmounted(() => {
  const inputs = document.querySelectorAll('input[data-ref^="inputTracking"]')
  inputs.forEach(input => {
    input.addEventListener('mouseenter', showTooltip);
    input.addEventListener('mouseleave', hideTooltip);
    input.addEventListener('mousemove', moveTooltip);
  })

});
</script>

<template>
  <section class="form-section container-fullscreen">
    <div class="section-content container">
      <div  data-tooltip="inputTrackingPhone" class="tooltip">Пожалуйста, введите номер в международном формате</div>
      <div  data-tooltip="inputTrackingName" class="tooltip">Пожалуйста, используйте только буквы</div>
      <div class="text-container">
        <div class="section-title-container">
          <p class="section-title"><span class="last-world">Присоединяйтесь</span> к нам</p>
          <div class="subtitle">
            <p>Приключение которое останется в вашей памяти на долгие годы!</p>
          </div>
        </div>
        <form
            novalidate
            @submit.prevent="validateForm"
            class="form-container"
            v-loading="isLoading"
            element-loading-text="Loading..."
            :element-loading-spinner="svg"
            element-loading-svg-view-box="-10, -10, 50, 50"
            element-loading-background="rgba(20, 26, 25, 0.8)"
        >
          <el-dialog
              v-model="dialogVisible"
          >
            <span id="spanTitleClass" :style="titleStyle" class="dialog-title">{{ dialogTitle }}</span>
            <span class="dialog-subtitle">{{ dialogSubtitle }}</span>
          </el-dialog>
          <div class="inputs-short-container">
            <div class="input-short">
              <label for="username" class="visually-hidden">Имя</label>
              <input
                  class="form-input input"
                  :class="{'hasError': errors.username}"
                  v-model="username"
                  id="username"
                  type="text"
                  placeholder="Имя"
                  maxlength="20"
                  data-ref="inputTrackingName"
                  required
              />
              <div class="error-container">
                <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
              </div>
            </div>
            <div class="input-short">
              <label for="phoneNumber" class="visually-hidden">Телефон</label>
              <input
                  class="form-input input hasErrorPhoneNumber"
                  :class="{'hasError': errors.phoneNumber}"
                  id="phoneNumber"
                  v-model="phoneNumber"
                  type="tel"
                  placeholder="Телефон"
                  @focus="addPlusSign"
                  @input="enforcePlusSign"
                  @blur="removePlusIfEmpty"
                  data-ref="inputTrackingPhone"
                  required
              />
              <div class="error-container">
                <span v-if="errors.phoneNumber" class="error-message">{{ errors.phoneNumber }}</span>
              </div>
            </div>
          </div>
          <div class="form-element email-container">
            <label for="email" class="visually-hidden">Электронная почта</label>
            <input
                v-model="email"
                class="form-input input form-element"
                :class="{'hasError': errors.email}"
                id="email"
                type="email"
                placeholder="Электронная почта"
                required
            />
            <div class="error-container">
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
          </div>
          <div class="form-element date-and-counter">
            <div class="datepicker-container">
              <el-date-picker
                  v-model="datePick"
                  type="date"
                  placeholder="Выберите дату"
                  :first-day-of-week="1"
                  :class="{'hasError': errors.datePick}"
                  format="DD.MM.YYYY"
                  value-format="DD.MM.YYYY"
                  :disabled-date="disabledDate"
              />
            </div>
            <div v-show="windowWidth <= 600" class="form-element datepicker-error-container error-container forMobile">
              <span v-if="errors.datePick" class="error-message">{{ errors.datePick }}</span>
            </div>
            <div class="counter-container">
              <p class="counter-text">Количество человек</p>
              <div class="counter-body">
                <button type="button" class="minus counter-item" @click="counterMinus" :disabled="counter === 1">-</button>
                <div class="numbers counter-item">{{ counter }}</div>
                <button type="button" class="plus counter-item" @click="counterPlus">+</button>
              </div>
            </div>
          </div>
          <div class="form-element datepicker-error-container error-container">
              <span v-if="errors.datePick" class="error-message">{{ errors.datePick }}</span>
          </div>
          <div class="form-element checkbox-container">
            <label for="hasKids" class="visually-hidden">Дети до 16 лет</label>
            <input type="checkbox" v-model="hasChildrenUnder16" id="hasKids" class="custom-checkbox" value="hasKids"/><p class="checkbox-text">Возьму с собой детей возрастом до <span class="checkbox-number">16</span> лет</p>
          </div>
          <div class="form-element textarea-container">
              <textarea
                  name="Additional-information"
                  v-model="additionalNotes"
                  placeholder="Можете оставить здесь свой Instagram, Telegram или пожелания"
                  class="custom-textarea"
                  maxlength="250"
              ></textarea>
          </div>
          <div class="form-element copyright-container">
            <p class="copyright-text">
              *Нажимая на кнопку, вы соглашаетесь на обработку персональных данных в соответствии <br/>
              с <a href="/docs/privace.pdf" target="_blank"
                   class="white-link">Политикой конфиденцальности</a>
            </p>
          </div>
          <div class="form-element button-container">
            <button
                class="button submit-button"
                type="submit"
            >
              Забронить тур
            </button>
          </div>
        </form>
      </div>
      <div class="image-container">
        <div v-show="windowWidth <= 1700" class="section-title-container forMobile">
          <p class="section-title"><span class="last-world">Присоединяйтесь</span> к нам</p>
        </div>
        <div class="image-content"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

::v-deep .iti__dropdown-content {
  background-color: var(--color-background-accent);
}
::v-deep .iti__search-input {
  background-color: var(--color-background-base);
  color: var(--color-light);
  font-family: var(--raleway-regular);
  font-weight: 400;
}
::v-deep .iti__country.iti__highlight {
  background-color: var(--color-red);
}
::v-deep .iti__country-list {
  color: var(--color-light);
  font-family: var(--raleway-regular);
  font-weight: 400;
}

::v-deep .iti__dial-code {
  color: var(--color-light);
}

::v-deep iti__flag {
  color: var(--color-light);
}

.text-container {
  width: 745px;
  display: flex;
  flex-direction: column;
}

.form-container {
  max-width: 544px;
  height: auto;
  margin-top: 40px;
  color: var(--color-medium);
}

.image-content {
  width: 836px;
  height: 702px;
  border-radius: var(--element-radius);
  background: url('@/assets/images/Form-image.png') center/contain no-repeat;
}

.section-title-container {
  cursor: default;
}

.section-content {
  display: flex;
  justify-content: space-between;
}

.subtitle {
  font-family: var(--raleway-regular);
  font-size: 18px;
  color: var(--color-light);
  margin-top: 12px;
}

.inputs-short-container {
  display: flex;
  width: 100%;
}

.input-short {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputs-short-container .input-short:nth-child(1) {
  margin-right: 14px;
}

.input-short {
  width: calc(100% / 2);
}

.datepicker-container {
  width: 230px;
}

.form-element {
  width: 100%;
  display: flex;
  align-items: center;
}

.counter-container {
  display: flex;
  height: var(--element-height);
  align-items: center;
  padding-left: 14px;
}

.datepicker-container,
.counter-container {
  width: calc(100% / 2);
}
.counter-body {
  width: 185px;
  display: flex;
  font-family: var(--erbaum-book);
  font-size: 18px;
  color: var(--color-light);
  font-weight: 300;
}

.counter-text {
  font-family: var(--raleway-regular);
  font-size: 16px;
}

.counter-body button {
  border: none;
  color: var(--color-light);
}

.counter-body button:hover {
  cursor: pointer;
  color: var(--color-red);
}

.counter-body button:disabled {
  color: var(--color-medium);
  cursor: not-allowed;
}

.minus {
  border-top-left-radius: var(--input-radius);
  border-bottom-left-radius: var(--input-radius);
}

.plus {
  border-top-right-radius: var(--input-radius);
  border-bottom-right-radius: var(--input-radius);
}

.numbers {
  border-inline: 1px solid var(--color-background-base);
  cursor: default;
}

.counter-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100%/3);
  height: var(--element-height);
  background-color: var(--color-background-accent);
}

::v-deep .el-input {
  --el-input-height: var(--element-height);
  --el-input-border-radius: 20px;
  --el-input-placeholder-color: var(--color-medium);
  --el-input-icon-color: var(--color-medium);
  --el-input-bg-color: var(--color-background-accent);
  --el-input-border: none;
  --el-input-text-color: var(--color-light);
}

::v-deep .el-input__wrapper {
  box-shadow: none;
  padding-inline: 16px;
  padding-block: 0;
}

::v-deep .el-input__wrapper:hover,
::v-deep .el-input__wrapper:focus-within {
  border: 1px solid var(--color-light);
}

::v-deep .el-input__inner {
  font-family: var(--roboto-light);
  font-size: 16px;
  font-weight: 300;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.custom-checkbox {
  width: 26px; /* Размер квадратика чекбокса */
  aspect-ratio: 1;
  background-color: var(--color-background-accent); /* Внутренний цвет квадрата */
  border: 1px solid var(--color-medium); /* Рамка квадрата */
  border-radius: 6px; /* Скругление углов */
  appearance: none; /* Убираем стандартный вид чекбокса */
  cursor: pointer; /* Курсор при наведении */
  margin-right: 8px; /* Отступ между чекбоксом и текстом */
  position: relative; /* Для позиционирования галочки */
}

.checkbox-text {
  font-family: var(--raleway-regular);
  font-weight: 400;
  font-size: 16px;
}

.checkbox-number {
  font-family: var(--roboto-light);
  font-weight: 300;
  font-size: 16px;
}

/* Стиль при отмеченном состоянии */
.custom-checkbox:checked {
  background-color: var(--color-background-accent); /* Цвет квадратика при отмеченном состоянии */
}

/* Добавляем стандартную галочку при отмеченном состоянии */
.custom-checkbox:checked::after {
  content: '✔'; /* Стандартная галочка */
  position: absolute; /* Для центрирования галочки */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center; /* Центрируем галочку */
  line-height: 26px; /* Вертикальное центрирование галочки внутри чекбокса */
  color: var(--color-red); /* Цвет галочки */
}

.textarea-container {
  margin-bottom: 20px;
}

.custom-textarea {
  width: 100%; /* Занимает всю ширину контейнера */
  min-height: 112px; /* Минимальная высота */
  background-color: var(--color-background-accent); /* Цвет фона */
  border-radius: var(--input-radius);
  font-family: var(--roboto-regular);
  font-size: 16px;
  padding: 20px 16px;
  resize: vertical;
  overflow-y: auto;
  color: var(--color-light);
  border: none;
}

.custom-textarea:hover {
  border: 1px solid var(--color-light);
}

/* Стили для плейсхолдера */
.custom-textarea::placeholder {
  color: var(--color-medium); /* Цвет плейсхолдера, если необходимо */
  font-family: var(--roboto-light); /* Шрифт плейсхолдера */
  font-size: 16px; /* Размер шрифта для плейсхолдера */
  font-weight: 300;
}

.copyright-text {
  font-family: var(--raleway-regular);
  font-size: 12px;
  color: var(--color-medium);
  cursor: default;
}

.white-link {
  color: var(--color-light);
  cursor: pointer;
}

.white-link:hover {
  color: var(--color-red);
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.error-container {
  width: 100%;
  height: 20px;
  display: flex;
}

.error-message {
  height: 20px;
  font-family: var(--raleway-regular);
  font-size: 12px;
  font-weight: 400;
  color: #FF5269;
}

.hasError {
  border: 1px solid var(--color-red); /* Рамка вокруг инпута при ошибке */
}

.email-container {
  display: flex;
  flex-direction: column;
}

.datepicker-error-container {
  width: 50%;
}

::v-deep .el-input.hasError .el-input__wrapper {
  border: 1px solid var(--color-red);
}

::v-deep .el-input.hasError .el-input__wrapper:focus-within {
  border: 1px solid var(--color-light);
}

::v-deep .el-input.hasError .el-input__wrapper:hover {
  border: 1px solid var(--color-light);
}

.submit-button {
  position: relative;
}

.submit-button::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 170%;
  background: url("@/assets/icons/stickers/form-sticker.svg") center/contain no-repeat;
  width: 252px;
  height: 133px;
}

::v-deep .el-dialog {
  background-color: var(--color-background-accent);
  text-align: center;
  width: 46.35vw;
  min-width: 450px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

::v-deep .el-dialog__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dialog-title {
  font-family: var(--erbaum-medium);
  font-weight: 500;
  font-size: 42px;
}

.dialog-subtitle {
  font-family: var(--raleway-regular);
  font-weight: 400;
  font-size: 18px;
  color: var(--color-light);
  margin-top: 20px;
}

.tooltip {
  position: absolute;
  background-color: var(--color-red); /* Цвет фона подсказки */
  height: 20px;
  color: var(--color-light); /* Цвет текста подсказки */
  border-radius: var(--input-radius); /* Закругленные углы */
  z-index: 1000;
  visibility: hidden;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--raleway-regular);
  font-weight: 400;
  padding: 0 10px;
}

@media (max-width: 1700px) {
  .section-content {
    flex-direction: column;
    align-items: center;
    width: auto;
  }
  .text-container {
    order: 1;
  }
  .text-container {
    display: flex;
    align-items: center;
  }
  .section-title-container:not(.forMobile) {
    display: none;
  }
  .section-title-container.forMobile {
    margin-bottom: 20px;
  }
  .form-container {
    max-width: 100%;
    height: 702px;
    margin-top: 20px;
  }
  ::v-deep .iti {
    width: 100%;
  }
  .datepicker-container {
    width: auto;
    margin-bottom: 2px;
  }
  .counter-text {
    margin-right: 14px;
    width: 95px;
  }
  .submit-button::after {
    top: 120%;
    left: 90%;
  }
  .text-container {
    width: 836px;
    align-items: normal;
  }
  .image-content {
    max-width: 100%;
  }
  .datepicker-error-container {
    width: 265px;
  }
}

@media (max-width: 900px) and (min-width: 768px) {
  .text-container {
    width: calc(708px + (836 - 708) * ((100vw - 768px) / (900 - 768)));
  }
  .image-content {
    width: calc(708px + (836 - 708) * ((100vw - 768px) / (900 - 768)));
    height: calc(391px + (702 - 391) * ((100vw - 768px) / (900 - 768)));
    background: url('@/assets/images/Form-image.png') top/cover no-repeat;
  }
  .submit-button::after {
    top: 120%;
    left: 80%;
  }
  .counter-body button:active {
    color: var(--color-red);
  }
}

@media (max-width: 768px) and (min-width: 320px) {
  .image-content {
    width: calc(300px + (708 - 300) * ((100vw - 320px) / (768 - 320)));
    height: calc(166px + (391 - 166) * ((100vw - 320px) / (768 - 320)));
    background: url('@/assets/images/Form-image.png') top/cover no-repeat;
    border-radius: calc(30px + (60 - 30) * ((100vw - 320px) / (768 - 320)));
  }

  .text-container {
    width: calc(300px + (708 - 300) * ((100vw - 320px) / (768 - 320)));
  }

  .custom-textarea::placeholder {
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (768 - 320)));
  }

  ::v-deep el-input-inner::placeholder {
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (768 - 320)));
  }

  .counter-body {
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (768 - 320)));
  }

  .checkbox-text,
  .checkbox-number,
  .counter-text {
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (768 - 320)));
  }

  .error-message {
    font-size: calc(10px + (12 - 10) * ((100vw - 320px) / (768 - 320)));
  }

  .error-container {
    height: calc(15px + (20 - 15) * ((100vw - 320px) / (768 - 320)));
  }

  .textarea-container,
  .checkbox-container {
    margin-bottom: calc(8px + (20 - 8) * ((100vw - 320px) / (768 - 320)));
  }

  .submit-button::after {
    width: calc(147px + (252 - 147) * ((100vw - 320px) / (600 - 320)));
    height: calc(78px + (113 - 78) * ((100vw - 320px) / (600 - 320)));
    top: 240%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .counter-body button:active {
    color: var(--color-red);
  }
  .counter-body button:focus:not(:active) {
    color: var(--color-light);
  }
}

@media screen and (max-width: 768px) {
  .tooltip {
    display: none;
  }
}

@media (max-width: 600px) {
  .datepicker-error-container.forMobile {
    order: 1;
  }
.inputs-short-container {
  flex-direction: column;
}
  .input-short {
    width: 100%;
  }
  .datepicker-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  ::v-deep .el-date-editor.el-input, .el-date-editor.el-input__wrapper {
    --el-date-editor-width: 100%;
  }
  .date-and-counter {
    flex-direction: column;
    align-items: normal;
  }
  .counter-body {
    width: 50%;
  }
  .counter-container {
    padding: 0;
    width: 100%;
    justify-content: space-between;
  }
  .submit-button::after {
    top: 220%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-container {
    height: var(--element-height);
    margin-top: 15px;
  }
  .submit-button {
    width: 100%;
  }
  .counter-text {
    width: auto;
  }
  .datepicker-error-container:not(.forMobile) {
    display: none;
  }
  .datepicker-error-container.forMobile {
    order: 0;
    width: 100%;
  }
}
</style>
