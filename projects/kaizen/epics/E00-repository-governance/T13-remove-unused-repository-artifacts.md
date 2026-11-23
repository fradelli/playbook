---
id: KZ-E00-T13
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T12]
---

# Remover artefatos e arquivos sem uso do repositório

## Objective
Deixar na raiz e nas pastas de apoio somente arquivos com consumidor comprovado, com a origem de cada remoção registrada.

## Contexto

Achados da auditoria de 2026-11-23 sobre `developer` (`364c71f`):

- `.azul-engai/remote-config/managed.json` é configuração de ferramenta externa (`"files": []`), versionada por acidente na PR #86.
- `.tmp-swc/` é pasta vazia não versionada e não coberta pelo `.gitignore` (que cobre `/.tmp/` e `/.tmp-*.log`).
- `.nvmrc` e `.node-version` têm o mesmo conteúdo (`24.20.0`).
- `vendor/` versiona cinco pacotes `@fradelli/ui`; somente `fradelli-ui-mira-table-progress.tgz` é referenciado por `package.json`. Os demais (`mira-agenda-final`, `mira-color-swatch`, `mira-dark-tooltips`, `mira-executor-verified`) não têm uso.
- `scripts/test-i18n-http.mjs` e `scripts/validate-data.d.mts` não são chamados por `package.json` nem pelo CI; `scripts/verify-doc-preservation.mjs` (`docs:preservation`) serviu à KZ-E00-T09 e não roda no CI.
- `public/icons/favicon-16.png`, `favicon-32.png` e `favicon-48.png` são usados apenas por `roadmap/view/index.html`.

## Inputs
- `.gitignore` — padrões de artefatos locais.
- `package.json` — seção `scripts` e dependência `@fradelli/ui`.
- `.github/workflows/ci.yml` — comandos executados.
- `roadmap/ACTIVE.md` — seção "Retomada e trabalhos paralelos", sobre o pacote local do design system.
- `docs/evidence/i18n/I18N-UI-IMPLEMENTATION.md` — uso histórico de `test-i18n-http.mjs`.
- `docs/DOCUMENTATION-STANDARD.md` — menção a `docs:preservation`.

## Deliverables
- Remoção de `.azul-engai/` do Git e padrão correspondente no `.gitignore`.
- `.gitignore` cobrindo `/.tmp-*/`.
- Um único arquivo de versão do Node, com os consumidores (CI, Vercel, documentação) conferidos.
- Remoção dos quatro `.tgz` sem uso em `vendor/`.
- Decisão por script sem uso: remover, integrar ao CI ou mover o registro para o histórico.
- `scripts/` reorganizado por finalidade (por exemplo `ci/`, `db/`, `roadmap/`), com `package.json`, CI e testes atualizados.

## Subtasks
- [ ] Conferir com `git grep` cada item antes de remover.
- [ ] Remover `.azul-engai/`, `.tmp-swc/` e o arquivo de versão duplicado.
- [ ] Remover os `.tgz` órfãos.
- [ ] Decidir e aplicar o destino dos scripts sem uso.
- [ ] Reorganizar `scripts/` e atualizar referências.
- [ ] Registrar os ícones usados só pela visualização do roadmap.

## Validation
- `pnpm install --frozen-lockfile` funciona sem os pacotes removidos.
- `pnpm run ci` passa, exceto gates dependentes de banco quando não houver PostgreSQL local, registrados como não executados.
- `git grep` não retorna referência a arquivo removido fora do histórico.

## Acceptance criteria
- [ ] Nenhum arquivo versionado sem consumidor permanece em `vendor/`, `scripts/` ou na raiz.
- [ ] O `.gitignore` cobre todos os artefatos locais conhecidos.
- [ ] Cada remoção tem motivo registrado na PR.

## Result
Não iniciada.
