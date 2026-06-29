/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly PUBLIC_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Fontsource packages ship CSS via their `style` field but no type
// declarations for the package-root side-effect import. Declare them so
// `import '@fontsource/...'` type-checks (the import works at runtime).
declare module '@fontsource/anton';
declare module '@fontsource/bebas-neue';
declare module '@fontsource-variable/inter';