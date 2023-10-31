# IAnyLink - Convert App Links to Universal Web Links

Many modern apps support app links, allowing users to open specific content directly. However, these links often have a problem: they are not supported by other apps, making it impossible to click and open them quickly. Cross-linking between applications is not as trivial as it may seem.

The IAnyLink project is designed to solve this problem. It can convert app links into regular web links (pretending an universal link)

|  | App Link | Web Link |
|---|---|---|
| Joplin | joplin://x-callback-url/openNote?id=note_id | https://benlau.github.io/l/u/am9wbGluOi8veC1jYWxsYmFjay11cmwvb3Blbk5vdGU_aWQ9bm90ZV9pZA== |
| Obsidian | obsidian://open?vault=your_vault&file=YOUR_NOTE | https://benlau.github.io/l/u/b2JzaWRpYW46Ly9vcGVuP3ZhdWx0PXlvdXJfdmF1bHQmZmlsZT1ZT1VSX05PVEU= |
| VSCode | vscode://file/your-local-file-path | https://benlau.github.io/l/u/dnNjb2RlOi8vZmlsZS95b3VyLWxvY2FsLWZpbGUtcGF0aA== |
| Mailto Link | mailto:test@example.com?subject=Testing out mailto! | https://benlau.github.io/l/u/bWFpbHRvOnRlc3RAZXhhbXBsZS5jb20_c3ViamVjdD1UZXN0aW5nIG91dCBtYWlsdG8h |

*The service link: https://benlau.github.io/l*

# Example Usecases

1) Open a VSCode project in local drive from Joplin / Obsidian / Notion

2) Add a mailto anchor to Google Docs to send an email to someone with subject `mailto:test@example.com?subject=Testing out mailto!`
