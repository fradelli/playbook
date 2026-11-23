---
id: KZ-E01-T03
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T02]
---

# Migrar histórico de treino

## Objective
Preservar versões anteriores, revisões e histórico sem transformar artefatos imutáveis, mantendo originais não publicáveis no snapshot privado.

## Inputs
- Linhas `e01-t03-*` do manifesto, incluindo planos não apontados por `data/active.json`.

## Deliverables
- Histórico público correspondente no Kaizen.
- Referência auditável aos originais mantidos somente no legado.
- SHA-256 de cada origem e destino no manifesto.

## Subtasks
- [x] Preservar originais byte a byte no legado e copiar somente os autorizados como `PUBLIC`.
- [x] Preservar versões anteriores sem alterar retroativamente seu status embutido.
- [x] Migrar revisões mantendo a referência à origem.
- [x] Migrar resumos históricos com proveniência.
- [x] Confirmar que nenhum mês foi omitido.

## Validation
- Hash de cada cópia literal é idêntico.
- Cada revisão aponta para o artefato de origem no manifesto; o arquivo existe no destino somente quando sua exposição é `PUBLIC`.
- O ponteiro do plano ativo não é alterado.

## Acceptance criteria
- [x] Histórico e plano vigente são distinguíveis.
- [x] O legado continua preservado.

## Result
O plano v1 foi copiado literalmente com seu `status` histórico, enquanto `data/active.json` permaneceu apontando para a v2. A revisão referencia o original privado pelo `artifact_id`; a análise preserva decisões e contexto agregado sem agenda exata ou questão de saúde. O treino do coach permanece byte a byte no snapshot privado e foi encerrado como `SKIPPED/DO_NOT_PUBLISH`.
