# 📃Описание
Проект для изучения процесса
создания приложения на микросервисной архитектуре
с использованием GraphQL и Vue.\
Сервис для проектирования БД.
## 🔥Основные моменты
* 🔶Spring
* 🔶Vue
* 🔶GraphQL
    * 🔶Validation
    * 🔶Custom Types
        * 🔶Local Date Time
* 🔶Microservices
* 🔶JWT-Authentication
# 📗Требования
- [x] Аутентификация с помощью JWT-токенов (по email и паролю)
- [x] Запуск через docker compose
- [x] Сервисы должны иметь общую точку входа
- [x] В качестве протокола взаимодействия должен использоваться GraphQL
# 🎨Структура
```mermaid
graph TD
    client(Vue JS)
    apiGateway([Api Gateway])
    authenticationService{{Authentication Service}}
    notificationService{{Notification Service}}
    projectService{{Project Service}}
    tariffService{{Tariff Service}}
    generationService{{Generation Service}}
    couponService{{Voucher Service}}
    configService{{Config Service}}
    paymentService{{Payment Service}}
    mailService{{Mail Service}}
    
    redis[(Redis)]
    postgres[(PostgreSQL)]
    mongodb[(MongoDB)]

    client <--> apiGateway
    
    apiGateway <--> authenticationService
    apiGateway <--> notificationService
    apiGateway <--> projectService
    apiGateway <--> tariffService
    apiGateway <--> generationService
    apiGateway <--> couponService
    apiGateway <--> paymentService
    apiGateway <--> mailService
    
    authenticationService <--> redis
    authenticationService <--> postgres
    
    notificationService <--> postgres
    
    projectService <--> postgres
    projectService <--> mongodb
    
    tariffService <--> postgres
    
    couponService <--> postgres
    
    configService <--> authenticationService
    configService <--> notificationService
    configService <--> projectService
    configService <--> paymentService
    configService <--> couponService
    configService <--> mailService

    subgraph **CLIENT**
    client
    end

    subgraph **SERVER**

    apiGateway

    subgraph **DATABASE**
    redis
    postgres
    mongodb
    end

    subgraph **SERVISES**
    authenticationService
    notificationService
    projectService
    notificationService
    tariffService
    generationService
    couponService
    configService
    paymentService
    mailService
    end

    end
```
# 🔧Стек технологий

<details>
<summary>
<big>БД</big>
</summary>

* Redis
* PostgreSQL
* MongoDB

</details>

<details>
<summary>
<big>Config Service</big>
</summary>

### Spring Зависимости

* Cloud Config Server
* Web

</details>

<details>
<summary>
<big>Eureka Service</big>
</summary>

### Spring Зависимости

* Eureka Server

</details>

# 📚Документация
# 📈Тесты
# 🚩Запуск и развертывание
Для запуска на компьютере должен быть установлен и запущен Docker.

|  **Процесс**   | **Порт** | **.............** |
|:--------------:|:--------:|:-----------------:|
| **..........** | **Хост** |   **Контейнер**   |
| ============== | ======== | ================= |
|      Vue       |    80    |        80         |
| Config Service |   None   |       8888        |
| Eureka Service |   None   |       8761        |

Первый запуск (команды выполняются в директории с `compose.yaml`)
```bat
docker compose up --build
```
Все последующие запуски
```bat
docker compose up
```
