# CXconversão - Radar Comportamental

Sistema de análise comportamental para conversão em calls 1:1 baseado na metodologia DISC.

## ✨ Funcionalidades

- **Radar Comportamental**: 12 indicadores para identificação de perfis DISC
- **Análise em Tempo Real**: Identificação automática dos perfis dominantes
- **Objeções Calibradas**: 2 objeções principais com respostas personalizadas por perfil
- **Características dos Perfis**: Detalhes completos sobre cada perfil DISC
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile

## 🎯 Perfis DISC Suportados

- **🟥 Dominante (D)**: Focado em resultados e ROI
- **🟨 Influente (I)**: Conecta com emoção e energia
- **🟩 Estável (S)**: Acolhimento e processo passo a passo
- **🟦 Conforme (C)**: Lógica, dados e validação técnica

## 💬 Objeções Tratadas

Para cada perfil DISC, o sistema trata especificamente:

1. **"Eu não tenho dinheiro"** - Resposta calibrada por perfil
2. **"Não sei se eu vou conseguir"** - Resposta adaptada ao comportamento

## 🚀 Tecnologias

- React 18
- Vite
- CSS moderno
- Netlify (deploy)

## 📋 Instalação e Uso Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cxconversao.git
cd cxconversao
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em desenvolvimento:
```bash
npm run dev
```

4. Faça o build para produção:
```bash
npm run build
```

## 🌐 Deploy no Netlify

### Método 1: GitHub + Netlify (Automático)

1. Faça push do código para o GitHub
2. Conecte o repositório no Netlify
3. As configurações do `netlify.toml` são aplicadas automaticamente
4. Deploy automático a cada push

### Método 2: Deploy Manual

1. Execute o build: `npm run build`
2. Faça upload da pasta `dist` no Netlify
3. Configure redirects para SPA se necessário

## 📁 Estrutura do Projeto

```
cxconversao/
├── src/
│   ├── ConvertaVoxApp.jsx    # Componente principal
│   ├── main.jsx              # Entry point
│   └── styles.css            # Estilos globais
├── index.html                # Template HTML
├── package.json              # Dependências
├── vite.config.js           # Configuração do Vite
├── netlify.toml             # Configuração do Netlify
└── README.md                # Este arquivo
```

## 🎨 Como Usar

1. **Marcar Indicadores**: Selecione os sinais comportamentais observados durante a call
2. **Ver Análise**: O sistema identifica automaticamente os perfis DISC dominantes
3. **Consultar Características**: Veja as características detalhadas de cada perfil
4. **Aplicar Objeções**: Use as respostas calibradas para as 2 objeções principais
5. **Converter**: Aplique as técnicas adaptadas ao perfil identificado

## 🔧 Personalização

Para personalizar o sistema:

1. **Adicionar Indicadores**: Edite o array `markers` em `ConvertaVoxApp.jsx`
2. **Modificar Perfis**: Ajuste o objeto `suggestions` com novas características
3. **Alterar Cores**: Modifique as variáveis CSS em `styles.css`
4. **Adicionar Objeções**: Expanda o array `objections` para cada perfil

## 📊 Metodologia

### DISC
- **D** (Dominante): Direto, focado em resultados
- **I** (Influente): Social, otimista, comunicativo  
- **S** (Estável): Paciente, leal, colaborativo
- **C** (Conforme): Analítico, preciso, sistemático

## 🎯 Funcionalidades Implementadas

### ✅ Sistema Atual:
- **12 indicadores comportamentais** divididos em 3 categorias
- **4 perfis DISC completos** com características detalhadas
- **8 objeções calibradas** (2 por perfil) com perguntas e respostas
- **Interface responsiva** e intuitiva
- **Análise em tempo real** dos perfis dominantes

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

---

**CXconversão** - Sistema de Análise Comportamental para Conversão em Calls 1:1

🎯 **Pronto para GitHub + Netlify!**
