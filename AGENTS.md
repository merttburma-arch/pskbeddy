# Project guidance

## Purpose

- Turkish personal website for Psikolog Bedrika Kurt, emphasizing her professional identity.
- Ground professional facts in `docs/mesleki-arastirma.md`. Use the title `Psikolog`; unverified clinical credentials, contact details, availability, and outcome claims must not be invented.
- The current visual decisions are in `design-system/bedrika-kurt/pages/anasayfa.md`, overriding the generated master.

## Stack

- React 19 with Create React App (`react-scripts` 5), JavaScript, and plain CSS.
- Inspect `package.json` before choosing framework-specific guidance. Preserve the existing stack unless the user requests a change.

## UI/UX workflow

- Use the `ui-ux-pro-max` skill for interface design, styling, accessibility, responsive layout, and UI reviews in this project.
- Read `$CODEX_HOME/skills/ui-ux-pro-max/SKILL.md` first; when `CODEX_HOME` is unset, use `~/.codex/skills/ui-ux-pro-max/SKILL.md`.
- Invoke the skill's `scripts/search.py` by its full path with Python 3. The skill is installed locally; do not add it as an application dependency.
- For focused changes, search the relevant domain and use `--stack react` for React implementation guidance. Check that each result fits the actual task and installed React version.
- Before designing a new product or page, establish its purpose and audience. Do not infer the product from the `psk` directory name or invent business claims.
- For a new visual direction, generate and review a design system with `--design-system`. Persist verified decisions with `--persist --output-dir` pointing to this repository root.
- Read an existing `design-system/<project-slug>/MASTER.md` and any applicable page overrides before editing UI. Do not overwrite an existing design system without authorization.
- Use semantic HTML, visible keyboard focus, accessible control labels, sufficient contrast, responsive layouts, and reduced-motion support. Reuse existing theme tokens when available.
- Treat skill output as recommendations; user requirements and repository instructions take precedence.

## Verification

- Run `npm run build` for application changes.
- Run `CI=true npm test -- --watchAll=false --runInBand` when application behavior or existing tests are affected.
- For visual changes, check narrow and wide viewports and keyboard interaction when a browser is available. Report any checks that could not be completed.
