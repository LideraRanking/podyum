# Podyum

Projeto web composto por uma API REST desenvolvida com Spring Boot e um frontend desenvolvido com React, TypeScript e Tailwind CSS.

## Estrutura do projeto

```text
podyum/
├── backend/    # API REST Spring Boot
└── frontend/   # Aplicação React
```

## Pré-requisitos

- Java 21
- Node.js e npm
- Git

## Instalação e execução

### 1. Clonar o repositório

```bash
git clone https://github.com/LideraRanking/podyum.git
cd podyum
```

### 2. Configurar e executar o backend

Entre na pasta do backend:

```bash
cd backend
```

Execute a aplicação com o Maven Wrapper:

```bash
./mvnw spring-boot:run
```

No Linux, se necessário, dê permissão de execução ao wrapper:

```bash
chmod +x mvnw
```

A API será iniciada normalmente em `http://localhost:8080`.

> **Nota:** caso o projeto esteja configurado para usar um banco de dados, configure a conexão correspondente antes de iniciar a aplicação. A configuração depende das dependências e propriedades presentes no projeto.

### 3. Configurar e executar o frontend

Em outro terminal, na raiz do repositório, execute:

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível normalmente em `http://localhost:5173/`.

## Tecnologias

- **Backend:** Java 21 e Spring Boot
- **Frontend:** React, TypeScript e Vite
- **Estilização:** Tailwind CSS
- **Componentes de interface:** shadcn/ui

## Desenvolvimento

Execute o backend e o frontend em terminais separados. As configurações adicionais, como URL da API, variáveis de ambiente e conexão com banco de dados, devem ser documentadas aqui conforme forem adicionadas ao projeto.

No desenvolvimento do frontend, utilize os componentes do [ShadeCN](https://ui.shadcn.com/docs/components)