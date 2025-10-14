# Website Instituto EVA

## 📋 Visão Geral

Landing page institucional desenvolvida com **Next.js 14+**, utilizando **App Router**, **TypeScript** e **Tailwind CSS**. Estruturada para alta performance, SEO otimizado e design responsivo.

---

## 🏗️ Arquitetura do Projeto

Este projeto segue uma arquitetura simplificada focada em **apresentação e performance**, ideal para landing pages e sites institucionais.

### Princípios Fundamentais

1. **Separação de Responsabilidades** - Componentes focados e reutilizáveis
2. **Performance First** - Otimizações de Core Web Vitals
3. **SEO Otimizado** - Metadata, estrutura semântica e acessibilidade
4. **Design Responsivo** - Mobile-first approach

---

## 📂 Estrutura de Pastas

```
src/
├── app/                      # Rotas e páginas (Next.js App Router)
├── components/               # Componentes React Reutilizáveis
├── lib/                      # Utilitários e Helpers
├── config/                   # Configurações e Constantes
├── types/                    # Tipos TypeScript
└── styles/                   # Estilos Globais
```

---

## 📁 Detalhamento das Pastas

### `/app` - Páginas e Rotas

Estrutura de rotas usando Next.js App Router (Server Components por padrão).

```
app/
├── layout.tsx                # Layout raiz da aplicação
├── page.tsx                  # Página inicial (/)
├── sobre/
│   └── page.tsx              # Página /sobre
├── servicos/
│   └── page.tsx              # Página /servicos
├── contato/
│   └── page.tsx              # Página /contato
├── not-found.tsx             # Página 404 customizada
├── sitemap.ts                # Geração de sitemap
└── robots.ts                 # Configuração robots.txt
```

**Responsabilidades:**
- Definir rotas e páginas
- Configurar metadata para SEO
- Renderizar seções da página
- Server Components por padrão (melhor performance)

**Exemplo:**

```typescript
// app/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';

export const metadata = {
  title: 'Instituto EVA - Título SEO',
  description: 'Descrição otimizada para SEO',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
```

---

### `/components` - Componentes Reutilizáveis

Organização hierárquica de componentes React.

```
components/
├── ui/                       # Componentes base do Design System
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   └── index.ts              # Barrel export
├── layout/                   # Componentes estruturais
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── section-wrapper.tsx
└── sections/                 # Seções específicas da landing page
    ├── hero-section.tsx
    ├── about-section.tsx
    ├── services-section.tsx
    ├── testimonials-section.tsx
    ├── team-section.tsx
    ├── contact-section.tsx
    └── cta-section.tsx
```

**Responsabilidades:**

#### `ui/`
Componentes genéricos e reutilizáveis (Design System)
- Botões, inputs, cards, badges
- Componentes sem lógica de negócio
- Totalmente reutilizáveis em qualquer contexto

```typescript
// components/ui/button.tsx
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={cn(/* classes do variant e size */, className)}
      {...props}
    >
      {children}
    </button>
  );
}
```

#### `layout/`
Componentes de estrutura de página
- Navbar, Footer, Header
- Wrappers de seção
- Componentes presentes em todas as páginas

```typescript
// components/layout/navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo e Menu */}
      </div>
    </nav>
  );
}
```

#### `sections/`
Seções específicas da landing page
- Hero, Sobre, Serviços, Depoimentos
- Componentes específicos do domínio
- Composição de componentes `ui/`

```typescript
// components/sections/hero-section.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Bem-vindo ao Instituto EVA
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Descrição impactante
        </p>
        <Button size="lg" variant="gradient" className="mt-8">
          Saiba Mais
        </Button>
      </div>
    </section>
  );
}
```

**Boas Práticas:**
- Componentes pequenos e focados (Single Responsibility)
- Props tipadas com TypeScript
- Usar Server Components quando possível
- Client Components apenas quando necessário (`"use client"`)

---

### `/lib` - Utilitários e Helpers

Funções auxiliares puras e reutilizáveis.

```
lib/
├── utils/                    # Utilitários gerais
│   ├── cn.ts                 # Class name utility (clsx)
│   ├── debounce.ts
│   └── scroll.ts
├── validators/               # Validações (Zod)
│   └── contact-form.ts
├── formatters/               # Formatadores
│   ├── date.ts
│   └── phone.ts
└── constants.ts              # Constantes da aplicação
```

**Responsabilidades:**
- Funções puras sem side effects
- Utilitários reutilizáveis
- Validações de formulários
- Formatação de dados

**Exemplos:**

```typescript
// lib/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// lib/validators/contact-form.ts
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// lib/formatters/phone.ts
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}
```

---

### `/config` - Configurações

Configurações centralizadas e constantes da aplicação.

```
config/
├── site.ts                   # Metadados do site
├── navigation.ts             # Links de navegação
└── social.ts                 # Links de redes sociais
```

**Exemplos:**

```typescript
// config/site.ts
export const siteConfig = {
  name: 'Instituto EVA',
  description: 'Descrição do instituto para SEO',
  url: 'https://institutoeva.com.br',
  ogImage: '/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/institutoeva',
    facebook: 'https://facebook.com/institutoeva',
    whatsapp: 'https://wa.me/5511999999999',
  },
  contact: {
    email: 'contato@institutoeva.com.br',
    phone: '(11) 99999-9999',
    address: 'Rua Exemplo, 123 - São Paulo, SP',
  },
};

// config/navigation.ts
export const navigationLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/contato', label: 'Contato' },
];

// config/social.ts
export const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/institutoeva',
    icon: 'Instagram' // Lucide icon name
  },
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/institutoeva',
    icon: 'Facebook'
  },
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/5511999999999',
    icon: 'MessageCircle'
  },
];
```

---

### `/types` - Tipos TypeScript

Tipos e interfaces compartilhados.

```
types/
├── index.ts                  # Tipos principais
└── components.ts             # Tipos de props de componentes
```

**Exemplos:**

```typescript
// types/index.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}
```

---

### `/styles` - Estilos Globais

Estilos globais, variáveis e configuração do Tailwind.

```
styles/
├── globals.css               # Reset CSS + Tailwind + Variáveis
└── fonts.ts                  # Configuração de fontes (next/font)
```

**Exemplo:**

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --secondary: 210 40% 96.1%;
    /* ... mais variáveis */
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 py-16 md:py-24;
  }
}
```

```typescript
// styles/fonts.ts
import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});
```

---

## 📝 Convenções de Nomenclatura

### Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | kebab-case | `hero-section.tsx` |
| Páginas | kebab-case | `page.tsx` |
| Utilitários | kebab-case | `format-date.ts` |
| Tipos | kebab-case | `index.ts` |
| Configuração | kebab-case | `site.ts` |

### Código

```typescript
// Componentes: PascalCase
export function HeroSection() {}
export function Button() {}

// Variáveis: camelCase
const userName = 'John Doe';
const isVisible = true;

// Funções: camelCase
function formatCurrency() {}
async function sendEmail() {}

// Interfaces: PascalCase
interface Service {}
interface TeamMember {}

// Types: PascalCase
type ButtonVariant = 'primary' | 'secondary';

// Constantes: camelCase ou UPPER_SNAKE_CASE
const siteConfig = { ... };
const MAX_ITEMS = 10;
```

---

## 🎨 Sistema de Design

### Cores

Definidas em `tailwind.config.ts` e variáveis CSS:

- **Primary**: Cor principal da marca
- **Secondary**: Cor secundária
- **Accent**: Cor de destaque
- **Background**: Fundos (light/dark)
- **Text**: Texto (primary/secondary/muted)

### Tipografia

- **Heading**: Fonte para títulos (Playfair Display)
- **Body**: Fonte para corpo de texto (Inter)

### Espaçamentos

Seguir escala do Tailwind: 4, 8, 12, 16, 24, 32, 48, 64px

### Breakpoints

- **sm**: 640px (mobile)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large)

---

## 🚀 Performance e SEO

### Otimizações Obrigatórias

#### Imagens
```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Descrição SEO"
  width={1200}
  height={600}
  priority // Para imagens above the fold
  placeholder="blur"
  blurDataURL="data:..."
/>
```

#### Metadata
```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instituto EVA - Título Principal',
  description: 'Descrição otimizada para SEO com palavras-chave',
  keywords: ['palavra1', 'palavra2', 'palavra3'],
  authors: [{ name: 'Instituto EVA' }],
  openGraph: {
    title: 'Instituto EVA',
    description: 'Descrição para redes sociais',
    url: 'https://institutoeva.com.br',
    siteName: 'Instituto EVA',
    images: [{ url: '/og-image.jpg' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto EVA',
    description: 'Descrição para Twitter',
    images: ['/og-image.jpg'],
  },
};
```

#### Fonts
```typescript
// app/layout.tsx
import { inter, playfair } from '@/styles/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### Métricas Alvo

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Bundle Size**: < 150KB (página inicial)

### Checklist SEO

- ✅ Metadata completo em todas as páginas
- ✅ Títulos H1-H6 hierárquicos
- ✅ Alt text em todas as imagens
- ✅ Sitemap.xml gerado
- ✅ Robots.txt configurado
- ✅ Schema.org markup (quando aplicável)
- ✅ Open Graph tags
- ✅ URLs semânticas
- ✅ Mobile-friendly (responsive)

---

## 🔄 Estrutura de Página Típica

```typescript
// app/page.tsx
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instituto EVA - Transformando Vidas',
  description: 'Descrição otimizada com palavras-chave relevantes',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
```

---

## 🛠️ Tecnologias

| Categoria | Tecnologia | Versão |
|-----------|-----------|--------|
| Framework | Next.js | 14+ |
| Linguagem | TypeScript | 5+ |
| Estilização | Tailwind CSS | 3.4+ |
| Componentes | Shadcn/UI | 0.8+ |
| Ícones | Lucide React | 0.400+ |
| Validação | Zod | 3.22+ |
| Utilitários | clsx | 2.0+ |
| Animações | Framer Motion | 11.0+ (opcional) |

---

## 📦 Dependências Essenciais

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 🚀 Scripts Principais

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css,md}\""
  }
}
```

---

## 📂 Exemplo de Estrutura Completa

```
website-institutoeva/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero.jpg
│   │   └── team/
│   ├── favicon.ico
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sobre/
│   │   │   └── page.tsx
│   │   ├── servicos/
│   │   │   └── page.tsx
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── section-wrapper.tsx
│   │   └── sections/
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── services-section.tsx
│   │       ├── testimonials-section.tsx
│   │       └── contact-section.tsx
│   ├── lib/
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   └── scroll.ts
│   │   ├── validators/
│   │   │   └── contact-form.ts
│   │   └── formatters/
│   │       └── phone.ts
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── social.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       ├── globals.css
│       └── fonts.ts
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Fluxo de Desenvolvimento

### Adicionando Nova Seção

1. **Criar componente da seção** em `components/sections/`
2. **Criar componentes UI necessários** em `components/ui/`
3. **Adicionar tipos** em `types/index.ts` (se necessário)
4. **Adicionar constantes** em `config/` (se necessário)
5. **Importar e usar na página** em `app/page.tsx`
6. **Otimizar imagens** usando `next/image`
7. **Validar SEO** e acessibilidade

### Exemplo: Adicionando Seção de FAQ

```typescript
// 1. types/index.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// 2. config/faq.ts
import type { FAQ } from '@/types';

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'Pergunta 1?',
    answer: 'Resposta 1',
  },
  // ...
];

// 3. components/sections/faq-section.tsx
import { faqData } from '@/config/faq';

export function FAQSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. app/page.tsx
import { FAQSection } from '@/components/sections/faq-section';

export default function HomePage() {
  return (
    <>
      {/* outras seções */}
      <FAQSection />
    </>
  );
}
```

---

## 🎨 Padrões de Design

### Seções

Todas as seções devem seguir o padrão:

```typescript
export function ExampleSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Conteúdo */}
      </div>
    </section>
  );
}
```

### Títulos de Seção

```typescript
<div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Título da Seção
  </h2>
  <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
    Subtítulo ou descrição
  </p>
</div>
```

### Cards

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div 
      key={item.id}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Conteúdo do card */}
    </div>
  ))}
</div>
```

---

## 📱 Responsividade

### Mobile-First Approach


```typescript
<div className="
  w-full          // mobile
  md:w-1/2        // tablet
  lg:w-1/3        // desktop
  xl:w-1/4        // large desktop
">
```

### Breakpoints Comuns

```css
/* Mobile: padrão */
.container { padding: 1rem; }

/* Tablet: md (768px+) */
@screen md {
  .container { padding: 2rem; }
}

/* Desktop: lg (1024px+) */
@screen lg {
  .container { padding: 4rem; }
}
```

---

