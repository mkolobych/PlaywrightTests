# Використовуйте офіційний образ Playwright
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

# Задайте робочий каталог
WORKDIR /tests

# Скопіюйте файли проекту в контейнер
COPY . /tests

# Встановіть залежності
RUN npm install

# Визначте команду для запуску тестів
CMD ["npm", "run", "all-test"]