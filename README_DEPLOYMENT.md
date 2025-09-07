# GitHub Pages Deployment Setup

## Steps to Enable GitHub Actions Deployment:

1. Go to your repository: https://github.com/shraavb/Shraav-sMindPalace
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions" instead of "Deploy from a branch"
5. Save the changes

## What This Does:

- The GitHub Actions workflow will automatically build your Vue.js project
- It uses the correct Node.js version and build settings
- It deploys the built files to GitHub Pages
- Your Bridge project should now appear on the live site

## After Enabling:

- The workflow will run automatically on the next push
- You can monitor the deployment in the "Actions" tab
- Your site will be available at: https://shraavb.github.io/Shraav-sMindPalace/

## Troubleshooting:

If the site still doesn't show the Bridge project:
1. Check the Actions tab for any build errors
2. Make sure GitHub Pages is set to use "GitHub Actions" as the source
3. Wait a few minutes for the deployment to complete


