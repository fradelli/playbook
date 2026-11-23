# Standards

Shared rules for every Fradelli project. Product business rules stay in each product repository.

This folder is being built by [PB-E02](../projects/playbook/epics/E02-shared-standards/README.md). Planned layout, to be confirmed by [PB-E02-T01](../projects/playbook/epics/E02-shared-standards/T01-inventory-kaizen-rules.md):

```txt
standards/
  general/      code semantics, documentation, pull requests, Git
  frontend/     React component organization, design system usage, style guide
  backend/      NestJS, Prisma, API contracts
  profiles/
    next-fullstack.md   Next.js with Server Actions and no separate backend (Kaizen)
    next-plus-api.md    Next.js with a separate NestJS API and a generated client (Suna)
```

Each project declares the profile it follows. General rules apply to every project.
