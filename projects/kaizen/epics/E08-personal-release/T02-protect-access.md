---
id: KZ-E08-T02
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T01]
---

# Validar exposição pública

## Objective
Comprovar no preview o modo público com workspace único e endurecer as proteções que não dependem de autenticação.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `src/lib/security/workspace.ts`
- `next.config.ts`
- Ambiente de preview publicado em KZ-E08-T01.

## Deliverables
- Exposição aceita validada em HTTPS e configuração endurecida para produção.

## Subtasks
- [ ] Confirmar que leitura e mutação públicas atuam somente no workspace fixo.
- [ ] Testar que `workspace_id` fornecido pelo cliente não altera ownership.
- [ ] Verificar cache privado, indexação, headers, logs e erros.
- [ ] Confirmar validação de origem, entrada e revisão nas mutações.
- [ ] Confirmar que credenciais, fontes `DO_NOT_PUBLISH` e dados de outros ambientes não são expostos.

## Validation
- Executar smoke de leitura e mutação pública contra a URL de preview e inspecionar o workspace persistido.

## Acceptance criteria
- [ ] O comportamento público corresponde ao risco aceito, sem alegar autenticação, e nenhum cliente consegue selecionar outro workspace.

## Result
Ainda não concluída.
