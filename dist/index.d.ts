/**
 * calcfyi-embed — TypeScript declarations
 */
export {};
declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      'calcfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'faq' | 'formula-card' | 'formula-badge';
      slug?: string;
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      styleVariant?: 'modern' | 'clean';
      size?: 'default' | 'compact' | 'large';
      placeholder?: string;
    };
  }
}
