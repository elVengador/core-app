import { Converter } from 'showdown'

export const useMarkdown = (): { markdownToHtml: (markdown: string) => string } => {

    const markdownToHtml = (markdown: string) => {
        const converter = new Converter()
        return converter.makeHtml(markdown)
    }

    return { markdownToHtml }
}
