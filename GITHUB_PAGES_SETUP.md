# GitHub Pages Setup Instructions

This project is configured to automatically run Playwright tests and publish HTML reports to GitHub Pages with **separate links for each test run**.

## Setup Steps

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push your code to the main branch:**
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow for Playwright tests"
   git push origin main
   ```

3. **The workflow will:**
   - Run automatically on every push to main branch
   - Run only Chrome browser tests (as configured)
   - Generate HTML reports for each run
   - Keep only the **5 most recent runs** (automatically deletes older runs)
   - Deploy reports to GitHub Pages with separate URLs

## Accessing Test Reports

### Main Dashboard
After the workflow completes successfully, visit the main dashboard at:
`https://[your-username].github.io/[repository-name]/`

This dashboard shows:
- 📋 List of all available test runs (up to 5 most recent)
- 🏷️ Run numbers and timestamps
- 🎯 Direct links to each individual report
- ✨ Latest run is highlighted with a badge

### Individual Run Reports
Each test run has its own unique URL:
- `https://[your-username].github.io/[repository-name]/run-[NUMBER]-[TIMESTAMP]/`
- Example: `https://[your-username].github.io/[repository-name]/run-123-20241201-143052/`

## Manual Test Execution

You can also run tests locally using these npm scripts:

```bash
# Run all tests in Chrome only
npm run test:chrome

# Run tests with UI mode
npm run test:ui

# Show the HTML report locally
npm run report
```

## Workflow Features

- ✅ Runs tests only in Chrome browser
- ✅ Generates HTML reports with screenshots and traces
- ✅ **Separate URL for each test run**
- ✅ **Keeps only 5 most recent runs** (auto-cleanup)
- ✅ Beautiful dashboard with run history
- ✅ Automatically deploys to GitHub Pages
- ✅ Runs on push to main branch and pull requests
- ✅ Can be triggered manually via GitHub Actions UI

## Report Management

### Automatic Cleanup
- Only the **5 most recent** test runs are kept
- Older runs are automatically deleted to save space
- Each run is uniquely identified by run number and timestamp

### Run Directory Structure
```
📁 GitHub Pages Root
├── 📄 index.html (Dashboard with links to all runs)
├── 📁 run-123-20241201-143052/ (Latest run)
│   └── 📄 index.html (Playwright HTML report)
├── 📁 run-122-20241201-120030/
├── 📁 run-121-20241130-180045/
├── 📁 run-120-20241130-160022/
└── 📁 run-119-20241130-140015/
```

### Benefits of This Approach
- 🔗 **Permanent links**: Each run has its own URL that won't change
- 📊 **Historical comparison**: Compare results across different runs
- 🧹 **Space efficient**: Automatic cleanup prevents unlimited storage growth
- 🎨 **User-friendly**: Clean dashboard interface to navigate between runs
