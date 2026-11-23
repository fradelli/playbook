---
id: KZ-E09-T06
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Internacionalizar produto e conteúdo canônico

## Objective
Migrar as quatro jornadas do produto para o catálogo i18n aprovado, usando inglês
como idioma-fonte e preservando proveniência e histórico dos dados canônicos.

## Inputs
- `roadmap/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/exercises.json`
- `data/training-execution-metadata.json`
- `data/active.json`
- `data/nutrition/active.json`
- `src/app/layout.tsx`

## Deliverables
- Catálogo inglês completo e pelo menos um locale adicional aprovado.
- Interface, acessibilidade, erros e metadados sem strings de produto dispersas.
- Rotas inglesas com compatibilidade explícita para URLs anteriores.
- Conteúdo canônico traduzido por nova versão quando a proveniência exigir.
- Testes de fallback, formatação, carregamento e ausência de chave.

## Subtasks
- [ ] Internacionalizar shell, treino, alimentação, sono e atividades gerais.
- [ ] Traduzir datas, números, unidades, mensagens e nomes acessíveis.
- [ ] Preservar IDs estáveis e criar versões novas em vez de alterar histórico importado.
- [ ] Manter conteúdo não traduzido explícito, sem fallback silencioso incorreto.
- [ ] Atualizar testes por comportamento e locale.

## Validation
- Executar integridade dos dados, importação idempotente, testes de UI e build por locale.

## Acceptance criteria
- [ ] Um usuário em inglês usa todas as jornadas sem encontrar texto de produto em português.
- [ ] O locale adicional aprovado funciona com fallback determinístico.
- [ ] Histórico, IDs e versões anteriores permanecem íntegros.

## Fora de escopo

- Tradução automática em runtime ou conteúdo clínico/nutricional não revisado.

## Result
Ainda não concluída.
