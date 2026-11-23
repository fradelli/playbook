---
id: KZ-E05-T06
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T05]
---

# Implementar acesso pessoal

## Estado

Cancelada em 2026-09-15 por decisão explícita do proprietário. O P0 será usado
temporariamente em URL pública, sem autenticação, com o risco de leitura e
alteração por terceiros aceito. A autenticação volta a ser obrigatória antes de
múltiplos usuários ou dados sensíveis.

## Objective
Criar sessão, autorização e pareamento antes de qualquer leitura ou mutação operacional de treino e alimentação.

## Inputs
- `docs/operations/E05.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/lib/security/workspace.ts`
- `prisma/schema.prisma`

## Deliverables
- Sessão autenticada server-only.
- Pareamento por chave de alta entropia.
- Autorização e resolução de workspace reutilizáveis.
- Validação de origem e limite de tentativas.
- Testes de sucesso, ausência, expiração, rotação e fraude.

## Subtasks
- [ ] Implementar cookie seguro e sessão assinada.
- [ ] Derivar ator e workspace exclusivamente no servidor.
- [ ] Implementar pareamento sem registrar chave ou hash.
- [ ] Validar origem em mutações e limitar tentativas.
- [ ] Impedir importação das fronteiras server-only pelo cliente.

## Validation
- Testar sessão ausente, inválida, expirada e rotacionada.
- Testar origem inválida e `workspace_id` fornecido pelo cliente.
- Confirmar ausência de segredo, cookie ou payload em logs.

## Acceptance criteria
- [ ] KZ-E06 e KZ-E07 recebem uma API de autorização testada e não precisam criar segurança ad hoc.
- [ ] Conteúdo público permanece acessível sem expor dado operacional.

## Result
Cancelada. Nenhuma sessão, chave de pareamento, cookie ou tela de ativação foi
implementada. O resolvedor fixo server-only existente permanece como fronteira
substituível por sessão e membership no futuro.
