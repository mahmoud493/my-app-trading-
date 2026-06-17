# Project Architecture

## Frontend Architecture

- app/
- components/
- features/
  - auth/
  - dashboard/
  - accounts/
  - analytics/
  - subscriptions/
  - profile/
- hooks/
- services/
- store/
- lib/
- types/
- utils/

## Backend Architecture

- backend/
  - apps/
    - api-gateway/
    - auth-service/
    - user-service/
    - account-service/
    - analytics-service/
    - mt5-service/
    - notification-service/
    - billing-service/
  - libs/
    - common/
    - database/
    - dto/
    - auth/

## Technology Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS (optional)

### Backend
- NestJS Microservices
- TypeScript
- GraphQL / REST API gateway

### Database
- PostgreSQL
- TimescaleDB
- Redis

### Messaging
- RabbitMQ

### Realtime
- Socket.IO

### Containers
- Docker

### Monitoring
- Prometheus
- Grafana

### CI/CD
- GitHub Actions
- Docker Registry
