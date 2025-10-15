# 🛒 E-commerce Fullstack - Next.js 15

Um e-commerce completo e moderno construído com Next.js 15, integrando pagamentos via Stripe e gerenciamento de estado eficiente com Zustand.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)

## 🚀 [Ver Demonstração ao Vivo](https://ecommerce-nextjs-fullstack-nine.vercel.app/)

## 📋 Sobre o Projeto

Este projeto é um e-commerce fullstack que demonstra a implementação de funcionalidades essenciais para uma aplicação de vendas online real, incluindo catálogo de produtos, carrinho de compras e processamento de pagamentos seguro.

### ✨ Funcionalidades

- 🛍️ **Catálogo de Produtos**: Listagem completa com detalhes
- 🛒 **Carrinho de Compras**: Adicionar, remover e atualizar quantidades
- 💳 **Pagamento Integrado**: Processamento seguro via Stripe
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- ⚡ **Performance Otimizada**: Server Components e Client Components estrategicamente utilizados
- ✅ **Validações**: Formulários e checkout com validação robusta

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis

### Estado e Dados
- **[Zustand](https://github.com/pmndrs/zustand)** - Gerenciamento de estado simplificado
- **[Stripe](https://stripe.com/)** - Processamento de pagamentos

### Deploy
- **[Vercel](https://vercel.com/)** - Hospedagem e CI/CD

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Stripe (para chaves de API)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/ecommerce-nextjs-fullstack.git
cd ecommerce-nextjs-fullstack
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_publica_stripe
STRIPE_SECRET_KEY=sua_chave_secreta_stripe
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── (routes)/          # Páginas da aplicação
│   ├── api/               # API Routes (Stripe webhooks)
│   └── layout.tsx         # Layout principal
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   └── ...                # Componentes customizados
├── lib/
│   └── store.ts           # Store Zustand
├── public/                # Arquivos estáticos
└── styles/                # Estilos globais
```

## 💡 Destaques Técnicos

### Zustand para State Management

O projeto utiliza Zustand para gerenciar o estado do carrinho de compras, proporcionando:

- **Zero Prop Drilling**: Estado acessível em qualquer componente
- **Performance**: Re-renders otimizados
- **Simplicidade**: API minimalista e intuitiva
- **Persistência**: Carrinho mantido entre reloads

```typescript
// Exemplo de uso
const { items, addItem, removeItem } = useCartStore();
```

### Server vs Client Components

Estratégia clara de separação entre Server e Client Components para maximizar performance:

- **Server Components**: Listagem de produtos, páginas estáticas
- **Client Components**: Carrinho, interações, formulários

### Integração com Stripe

Implementação completa do fluxo de pagamento:

1. Criação de sessão de checkout
2. Redirecionamento seguro para Stripe
3. Webhook para confirmação de pagamento
4. Atualização de status do pedido

## 🚀 Deploy

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório na Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 📚 Aprendizados

Este projeto foi uma oportunidade valiosa para:

- Aprofundar conhecimentos em Next.js 15 e App Router
- Dominar a diferenciação entre Server e Client Components
- Explorar alternativas de state management (Zustand vs Redux vs Context API)
- Implementar fluxo completo de pagamento com Stripe
- Aplicar boas práticas de UX em e-commerce

## 🙏 Créditos

Projeto desenvolvido com base no tutorial do [PedroTech](https://www.youtube.com/@PedroTechnologies).
