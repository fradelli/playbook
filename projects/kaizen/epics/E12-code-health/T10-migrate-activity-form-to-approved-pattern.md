---
id: KZ-E12-T10
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T04, KZ-E12-T08]
---

# Migrar o formulário de atividade para o padrão aprovado

## Objective
Reescrever o formulário de inclusão e edição de atividade no padrão de formulários aprovado na KZ-E12-T08, validando com o mesmo schema da Server Action.

## Contexto

`training-activity-form.tsx` tem 391 linhas, seis `useState`, validação manual no `onSubmit` e um `useMemo` que monta o snapshot publicado para o editor e o rascunho. Se a KZ-E12-T08 rejeitar React Hook Form, esta tarefa aplica a alternativa aprovada ou é cancelada com a decisão registrada.

## Inputs
- Decisão aprovada pela KZ-E12-T08 em `docs/decisions/`.
- Schemas compartilhados entregues pela KZ-E12-T04.
- `src/features/training/ui/components/training-day-page/components/training-activity-form/` — formulário, hook de agenda, utils e testes.
- `src/features/training/ui/components/training-day-page/components/training-activity-editor/` — consumidor do snapshot.
- `docs/product/telas/guia-de-estilo.md` — estados de campo e erro.

## Deliverables
- Formulário com estado e validação pelo padrão aprovado e o schema compartilhado.
- Integração com `useActionState` e Server Action preservada, sem confirmação otimista.
- Rascunho local e snapshot do editor alimentados pelo estado do formulário.

## Subtasks
- [ ] Instalar a dependência aprovada, se houver, com versão exata.
- [ ] Migrar campos, validação e mensagens de erro.
- [ ] Manter rascunho, bloqueio de envio duplo e recarga em conflito.
- [ ] Atualizar testes.

## Validation
- `pnpm test`, `pnpm typecheck` e `pnpm i18n:check` passam.
- Conferência manual: criar, editar, conflito e restauração de rascunho.

## Acceptance criteria
- [ ] O formulário não mantém um `useState` por campo.
- [ ] Cliente e servidor validam com o mesmo schema.
- [ ] Os testes de comportamento existentes continuam passando.

## Result
Não iniciada.
