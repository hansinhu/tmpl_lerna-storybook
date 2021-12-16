declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare type Platlang = 'en' | 'zh'

declare interface Window {
  TPM?: unknown
  csrf?: string
  Raven?: unknown
}

declare module '../*.scss' {
  const content: { readonly [className: string]: string }
  export default content
}
