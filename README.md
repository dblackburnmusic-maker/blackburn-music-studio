# Blackburn Music Studio website — launch guide

## Current status

The prototype has been turned into a standalone static website suitable for GitHub Pages. It preserves the supplied lesson, recording, biography, portfolio, studio, tuition, and enrollment content. The missing stylesheet and script have been created. The unavailable logo has been replaced with a text wordmark.

The website is published on GitHub Pages in `dblackburnmusic-maker/blackburn-music-studio`. The custom domain is `blackburnmusicstudio.com`. Namecheap DNS has been configured for the root and www domains; HTTPS activation is being verified. Recording inquiries use dblackburnmusic@gmail.com for now; this can be updated later. Spotify and My Music Staff are external services; confirm both playlists and the enrollment form work before publishing.

## What to provide

1. GitHub owner: `dblackburnmusic-maker`. Recommended repository name: `blackburn-music-studio`. Provide an existing repository URL if one exists.
2. Domain registrar: Namecheap. Confirm the domain uses Namecheap DNS or identify the external DNS provider.
3. Current public inquiry address: `dblackburnmusic@gmail.com`. Provide the replacement when ready.
4. The original logo, preferably PNG with transparency or SVG. If available, send the original `styles.css`, `script.js`, and `assets` folder too so the original prototype design can be matched.
5. Confirmation that the $160 monthly tuition, calendar description, makeup policy, biography, playlists, and enrollment link are approved for public use.

Do not send passwords, recovery codes, or access tokens in chat. Sign in through GitHub and your domain provider yourself. If you want me to complete account settings with you, we can use a signed-in browser session.

## 1. Create the GitHub repository

1. Sign in at https://github.com.
2. Click the **+** menu at the top right and choose **New repository**.
3. Choose your account under **Owner**.
4. Name the repository `blackburn-music-studio`.
5. Choose **Public** if using GitHub Free. Private repositories require an eligible paid plan for Pages. All files in a public repository are visible, so include only website files.
6. Select **Add a README file**, then click **Create repository**.

## 2. Upload the website

1. Open the repository's **Code** tab.
2. Choose **Add file → Upload files**.
3. From this project folder, upload `index.html`, `styles.css`, `script.js`, `CNAME`, `robots.txt`, `sitemap.xml`, and `.nojekyll` to the repository root. Also upload the complete `assets` folder, preserving its name and contents. Upload this guide as `README.md` if desired.
4. On a Mac, press **Command + Shift + .** in Finder to show `.nojekyll`. It is an intentionally empty file. If you cannot upload it, use **Add file → Create new file**, name it `.nojekyll`, and commit it.
5. Enter a commit message such as “Add Blackburn Music Studio website.”
6. Commit directly to the `main` branch.

The Code tab should show `index.html` immediately, not inside another folder. No build command or package installation is required. Extract the ZIP before uploading; uploading the ZIP file itself will not publish the website. The four studio photos are converted to optimized JPEGs in `assets`; do not upload the original HEIC files or the nested “Site copy” folder.

## 3. Enable GitHub Pages

1. Open the repository's **Settings** tab.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the **main** branch and **/(root)** folder. Click **Save**.
5. Check the repository's **Actions** tab for the Pages deployment result.
6. Return to **Settings → Pages** for the published address and deployment status.

The supplied `CNAME` file specifies `blackburnmusicstudio.com`. Before DNS is configured, the custom address may not load. To test first at `https://dblackburnmusic-maker.github.io/blackburn-music-studio/`, temporarily remove the custom domain and CNAME file; restore the custom domain before changing DNS.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 4. Verify domain ownership

1. Open your GitHub account **Settings → Pages**. For an organization, open the organization settings instead.
2. Under **Verified domains**, choose **Add a domain**, and enter `blackburnmusicstudio.com`.
3. GitHub will show a unique TXT record name and value.
4. Sign in to your DNS provider, open DNS management, and add the TXT record exactly as GitHub specifies. Some providers append the domain automatically; check their field instructions.
5. Return to GitHub and click **Verify** when the record is available.
6. Keep the verification TXT record after verification.

GitHub's instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## 5. Connect blackburnmusicstudio.com

First set **Settings → Pages → Custom domain** to `blackburnmusicstudio.com` and click **Save**, if it is not already set.

In Namecheap, choose **Domain List → Manage** beside `blackburnmusicstudio.com`, then **Advanced DNS → Host Records → Add New Record**. Set TTL to **Automatic** and save each record with the checkmark. If Host Records are unavailable, inspect **Domain → Nameservers** to identify where DNS is hosted; do not change nameservers without preserving existing records. Create these records. Replace `dblackburnmusic-maker` with the repository owner's GitHub username or organization name. The www target does not include the repository name, a protocol, or a slash.

| Type | Host/name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | dblackburnmusic-maker.github.io |

Use the provider's default TTL. `@` means the root domain; some providers use an empty name or the full domain instead.

Review existing root A, AAAA, ALIAS, ANAME, and URL Redirect records and existing www records. Replace conflicting website records when ready to switch. Preserve MX and email-related TXT records so domain email continues to work. If an old website is live, make the DNS switch only after the GitHub deployment and content are ready. Avoid wildcard records. Optional IPv6 records can be added using GitHub's documentation; stale IPv6 records pointing elsewhere should not remain.

DNS updates can take up to 24 hours. GitHub automatically redirects www to the root domain when both are correctly configured and the root is the selected custom domain.

GitHub's instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 6. Enable HTTPS and check the launch

1. Return to **Settings → Pages** and wait for the DNS check to succeed.
2. Wait for the HTTPS certificate to become available; this may take up to an hour after configuration.
3. Enable **Enforce HTTPS**.
4. Open `https://blackburnmusicstudio.com` and `https://www.blackburnmusicstudio.com`.
5. Check the mobile menu, section links, both Spotify players, and enrollment form on a phone and computer.
6. Open the direct enrollment fallback link too. If the embed is blocked by My Music Staff, the direct link still provides access.
7. After adding the recording contact method, send a test inquiry and confirm receipt. GitHub Pages serves static files and cannot process an email form itself; an email link, hosted form, or separate form service is needed.

GitHub's HTTPS instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Future updates

Edit `index.html` for wording, rates, and links; `styles.css` for the design; and `script.js` for menu behavior. Upload or commit changes to `main` and GitHub Pages will redeploy. Leave `CNAME` in place. Keep private student information and credentials out of this repository.

Namecheap guide: https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

## Finished website design

The site now includes a warm ivory, deep green, and copper theme; an original typographic monogram; responsive lesson cards; a photo viewer; expandable FAQs; and direct enrollment with an optional inline My Music Staff form. Fonts are loaded from Google Fonts with local serif and sans-serif fallbacks. FAQs use the supplied business details. The original logo and an approved portrait of Daniel can replace the current branding and biography treatment later. No form submissions are handled by this static site.

## Domain setup — October 30, 2026

Both `blackburnmusicstudio.com` and `blackburndrums.com` now use the four GitHub Pages A records, and each www CNAME points to `dblackburnmusic-maker.github.io`. Zoho MX, SPF, DKIM, and verification records for the studio domain were preserved. The old domain uses a separate GitHub Pages repository, `dblackburnmusic-maker/blackburndrums-redirect`, which redirects in the browser to `https://blackburnmusicstudio.com/`. It includes canonical metadata, immediate meta refresh, JavaScript location.replace, and a manual fallback link. It is not an HTTP 301 redirect. GitHub manages HTTPS certificates for each repository.
