# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This repository is configured for GitHub Pages using GitHub Actions.

1. Push the repository to GitHub.
2. Open **Settings -> Pages** and set the source to **GitHub Actions**.
3. Push to `main` and let [.github/workflows/deploy.yml](.github/workflows/deploy.yml) publish the `dist/` folder.
4. Your site will be available at `https://<owner>.github.io/<repo>/` for a project site, or `https://<owner>.github.io/` if the repository itself is `<owner>.github.io`.

For a local Pages-style build, run:

```sh
bun install --frozen-lockfile
GITHUB_ACTIONS=true GITHUB_REPOSITORY=<owner>/<repo> bun run build:pages
```

The build also writes `dist/404.html` so client-side routes can still boot on GitHub Pages.

## How do I configure the custom domain?

This repository is set up to use `www.crypt.se` as the canonical GitHub Pages domain. The checked-in [public/CNAME](public/CNAME) file makes GitHub Pages publish the site on that hostname.

Configure GitHub Pages like this:

1. Open **Settings -> Pages** in the GitHub repository.
2. Set the custom domain to `www.crypt.se`.
3. Wait for GitHub to verify DNS, then enable **Enforce HTTPS**.

Configure DNS like this:

1. Create a `CNAME` record for `www` that points to `johan.github.io`.
2. Create `A` records for the apex domain `crypt.se` that point to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
3. If your DNS provider supports IPv6, also create `AAAA` records for `crypt.se` that point to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`.

Once both hosts resolve to GitHub Pages and `www.crypt.se` is the configured custom domain, GitHub Pages will redirect `https://crypt.se` to `https://www.crypt.se`.
