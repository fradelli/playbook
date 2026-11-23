---
id: KZ-E10-T03
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T02]
---

# Corrigir navegação e padronizar ações dos diálogos

## Objective
Não registrado na versão original desta tarefa; conteúdo equivalente na seção «Escopo».

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.module.css`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-content/training-activity-editor-content.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Não registrado na versão original desta tarefa; conteúdo equivalente na seção «Aceite».

## Escopo

Navegação acima do vidro do cabeçalho. Ações destrutivas à esquerda em vermelho,
ação principal à direita; foco inicial seguro na confirmação de exclusão.
Preservar validação, cache, envio e regras de negócio.

## Aceite

- [x] Ordem, cor e foco verificados em desktop e celular.
- [x] Testes afetados, tipos e lint aprovados.

## Result
Implementado localmente: exclusão/descarte à esquerda em vermelho, confirmação à direita e foco seguro em Manter atividade. Rodapé compartilhado usa duas colunas para preservar as posições em 320px. Navegador validado em 320/390/1440px sem executar exclusões. 45 testes, lint, estrutura, tipos e build aprovados. Alterações ainda não commitadas.
