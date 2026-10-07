<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the shared public navigation and disclaimer footer in `SiteShell` so every route presents consistent site chrome.
- The foreclosure dashboard stays a self-contained static page at `public/foreclosure-watch.html`, embedded in `/foreclosures` via a full-width iframe. Never rewrite it as React or restyle it — it is generated externally and refreshed twice a day.
