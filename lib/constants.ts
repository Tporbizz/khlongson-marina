/**
 * Backwards-compat facade.
 *
 * All editable content has moved to /content. This file just
 * re-exports so existing `import { MARINA, ... } from "@/lib/constants"`
 * keeps working. To edit copy/prices, go to /content.
 */

export * from "@/content";
