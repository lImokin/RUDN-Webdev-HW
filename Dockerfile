# ===== 1. СТАДИЯ СБОРКИ =====
FROM node:20-alpine AS build

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем Vite + TS проект
RUN npm run build

# ===== 2. СТАДИЯ ПРОДАКШЕН =====
FROM nginx:alpine

# Удаляем дефолтную конфигурацию nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем свою (опционально, но правильно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем билд из стадии build
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
