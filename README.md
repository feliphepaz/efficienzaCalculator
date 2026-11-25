# Efficienza Calculator

Uma calculadora web criada para estimar os custos de uma equipe de consórcio e apresentar o resultado de forma clara em PDF.

**Aplicação:** [efficienza-calculator.vercel.app](https://efficienza-calculator.vercel.app)

## Sobre o projeto

O Efficienza Calculator guia o usuário por cinco etapas para dimensionar os custos operacionais de uma equipe de vendas:

1. **Valores** — período de pagamento, comissões, impostos e inadimplência.
2. **Equipe** — supervisores, vendedores, salários, comissões e parâmetros de vendas.
3. **Verba** — custos com mídia, contabilidade, telefone e outros gastos.
4. **Dados** — identificação e informações de contato do usuário.
5. **Resultado** — resumo dos cálculos e opções para gerar um relatório em PDF.

Os dados são processados no navegador e atualizados em tempo real por meio do hook `useData`.

## Funcionalidades

- Cálculo de comissões por período;
- Cálculo de salários, encargos e benefícios;
- Configuração de valores de vale-transporte e vale-refeição;
- Estimativa de custos administrativos e operacionais;
- Navegação guiada por etapas;
- Tutorial inicial para novos usuários;
- Exportação do resultado em PDF;
- Interface responsiva;
- Notificações para campos não preenchidos ou inválidos.

## Tecnologias

- [Next.js](https://nextjs.org/) 13;
- [React](https://react.dev/) 18;
- [TypeScript](https://www.typescriptlang.org/);
- [Styled Components](https://styled-components.com/);
- [Axios](https://axios-http.com/);
- [PDF-LIB](https://pdf-lib.js.org/);
- [React Toastify](https://fkhadra.github.io/react-toastify/).

## Pré-requisitos

- Node.js 18 ou superior;
- npm, Yarn ou pnpm.

## Instalação e execução

Clone o repositório:

```bash
git clone https://github.com/feliphepaz/efficienzaCalculator.git
cd efficienzaCalculator
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção e realiza a exportação estática |
| `npm run start` | Inicia a aplicação em modo de produção |
| `npm run lint` | Executa o lint do projeto |

## Estrutura do projeto

```text
src/
├── components/   # Componentes reutilizáveis
├── hooks/        # Estado e regras de cálculo
├── layouts/      # Seções e etapas da interface
├── pages/        # Páginas e rotas do Next.js
├── styles/       # Estilos globais
└── types/        # Tipos TypeScript
public/           # Imagens, ícones e demais arquivos estáticos
```

## Build de produção

```bash
npm run build
```

Os arquivos da aplicação exportada são gerados pelo Next.js conforme a configuração definida em `next.config.js`.

## Implantação

O projeto está preparado para implantação na Vercel. Para outros provedores, execute `npm run build` e siga as instruções de hospedagem para aplicações Next.js.

## Licença

Este projeto não possui uma licença definida até o momento.
