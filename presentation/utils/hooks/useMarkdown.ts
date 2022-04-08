import showdown from 'showdown'

export const useMarkdown = (): { markdownToHtml: (markdown: string) => string } => {

    const markdownToHtml = (markdown: string) => {
        const converter = new showdown.Converter({
            tables: true,                           // enable tables
            strikethrough: true,                    // enable strikethrough
            ghCodeBlocks: true,                     // enable code blocks
            tasklists: true,                        // enable task list
            simpleLineBreaks: true,                 // enable real breaks lines
            ghCompatibleHeaderId: true,             // add - instead space in ids
            openLinksInNewWindow: true
        });

        return converter.makeHtml(markdown)
    }

    return { markdownToHtml }
}
