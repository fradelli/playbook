---
id: KZ-E02-T04
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T03]
external: [Decisions approved]
---

# Estruturar plano alimentar

## Objective
Representar a versão aprovada do plano por contexto de dia, refeições, itens, alternativas e limites.

## Inputs
- Revisão concluída.
- Decisões aprovadas pelo usuário ou profissional responsável.

## Deliverables
- Plano versionado em `data/nutrition/plans/`.

## Subtasks
- [x] Definir versão, status e vigência.
- [x] Estruturar tipos de dia e refeições.
- [x] Registrar quantidades e equivalências apenas quando confirmadas.
- [x] Preservar alertas e unknowns.

## Validation
- Nenhum campo obrigatório depende de dado inventado.
- Alternativas não perdem sua relação com a refeição.

## Acceptance criteria
- [x] O plano é legível sem consultar a conversa original.
- [x] Status profissional é inequívoco.

## Result
Concluída em 2026-09-02. Criado `data/nutrition/plans/2026-09-personal-v1.json` com seis tipos de dia, cinco refeições, vinte opções, horários condicionais, módulos de carboidrato, preferências, `unknowns`, proveniência e aprovação pública explícita. As faixas energéticas foram preservadas como valores legados aprovados para uso pessoal, sem validação profissional; identidade, contexto médico, suplementos, protocolo cognitivo, caminhos privados e metas inferidas foram excluídos. JSON, referências, manifesto e exposição foram validados, liberando KZ-E02-T05.
