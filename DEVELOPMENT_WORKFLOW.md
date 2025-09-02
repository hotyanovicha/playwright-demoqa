# 🚀 Development Workflow Guide for Beginners

## 📋 Table of Contents
- [Daily Workflow Overview](#daily-workflow-overview)
- [Phase 1: Before Making Changes](#phase-1-before-making-changes)
- [Phase 2: Making Changes](#phase-2-making-changes)
- [Phase 3: Committing Changes](#phase-3-committing-changes)
- [Phase 4: Creating Pull Requests](#phase-4-creating-pull-requests)
- [Cursor-Specific Tips](#cursor-specific-tips)
- [Best Practices](#best-practices)
- [Common Commands Reference](#common-commands-reference)

---

## 🔄 Daily Workflow Overview

```bash
# 1. Start fresh
git pull origin main

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Code your changes
# ... make your changes ...

# 4. Validate changes
npx playwright test  # or your test command

# 5. Commit changes
git add .
git commit -m "feat: descriptive message"

# 6. Push and create PR
git push origin feature/your-feature-name
# Then create PR on GitHub
```

---

## Phase 1: Before Making Changes

### 1️⃣ Always Start Fresh
```bash
# Check current status
git status

# Make sure you're on main branch
git checkout main

# Pull latest changes from remote
git fetch origin
git pull origin main
```

### 2️⃣ Create a Feature Branch (Best Practice)
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/add-login-tests
git checkout -b fix/button-alignment
git checkout -b docs/update-readme
```

---

## Phase 2: Making Changes

### 3️⃣ Code Your Changes
- Make your code changes in Cursor
- Write/update tests
- Follow coding standards
- Use Cursor's IntelliSense and auto-completion

### 4️⃣ Validate Before Committing ✅
```bash
# Run tests
npx playwright test

# Check for TypeScript errors
npx tsc --noEmit

# Run linter (if configured)
npm run lint
```

**In Cursor:**
- Check the Problems panel (Ctrl+Shift+M)
- Look for red squiggly lines in code
- Ensure all files save properly

---

## Phase 3: Committing Changes

### 5️⃣ Using Cursor's Git Integration (Recommended)

**Visual Method:**
1. **Open Source Control Panel:**
   - Click Git icon in left sidebar
   - Or press `Ctrl+Shift+G` (Windows/Linux) or `Cmd+Shift+G` (Mac)

2. **Review Changes:**
   - See all modified files
   - Click files to view diffs
   - Review each change carefully

3. **Stage Changes:**
   - Click `+` next to files to stage
   - Or click `+` next to "Changes" for all

4. **Write Commit Message:**
   ```
   feat: add TextBox testing with data validation
   
   - Add TextBoxDataGenerator utility with faker
   - Enhance ElementsPage with validation methods
   - Add test cases including error scenarios
   - All tests passing (3/3)
   ```

5. **Commit:**
   - Click ✓ "Commit" button
   - Or press `Ctrl+Enter`

### 6️⃣ Using Terminal Method
```bash
# Stage all changes
git add .

# Or stage specific files
git add path/to/specific/file.ts

# Check what's staged
git status

# Commit with message
git commit -m "feat: your descriptive message

- Bullet point of what changed
- Another change
- Why these changes were made"
```

---

## Phase 4: Creating Pull Requests

### 7️⃣ Push Your Changes
```bash
# Push to remote repository
git push origin feature/your-feature-name

# If first time pushing this branch
git push -u origin feature/your-feature-name
```

### 8️⃣ Create Pull Request on GitHub

1. **Go to your GitHub repository**
2. **Click "Compare & pull request"** (appears after push)
3. **Fill out PR template:**

```markdown
## 🎯 Title: 
feat: enhance TextBox testing with data validation

## 📝 Description:
### What this PR does:
- Adds TextBoxDataGenerator utility with faker integration
- Enhances ElementsPage with form validation methods
- Adds comprehensive test cases including invalid email scenario

### Testing:
- ✅ All tests passing (3/3)
- ✅ No linting errors
- ✅ Validated form submission and error handling

### Type of change:
- [x] New feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation update

### Screenshots/Evidence:
[Add screenshots if UI changes]
```

### 9️⃣ PR Review Process
- **Request reviewers** (team members)
- **Respond to feedback** promptly
- **Make requested changes** if needed
- **Merge when approved**

---

## 🎯 Cursor-Specific Tips

### Essential Shortcuts
- `Ctrl+Shift+G` - Open Git panel
- `Ctrl+Shift+M` - Open Problems panel
- `Ctrl+`` ` ` - Open terminal
- `Ctrl+P` - Quick file search
- `Ctrl+Shift+P` - Command palette

### Git Integration Features
- **Visual diff viewer** - Click on modified files
- **Inline blame** - See who changed what
- **Branch switcher** - Bottom left status bar
- **Merge conflict resolver** - Built-in tools

### Productivity Tips
- Enable **auto-save** (File → Auto Save)
- Use **IntelliSense** for autocompletion
- Install relevant **extensions** for your stack
- Use **multi-cursor editing** (Alt+Click)

---

## ✅ Best Practices

### Commit Messages (Conventional Commits)
```bash
# Format: type: description
feat: add new feature
fix: resolve bug in login
docs: update API documentation
test: add unit tests for auth
refactor: improve code structure
chore: update dependencies
```

### Branch Naming
```bash
feature/add-user-authentication
fix/resolve-login-bug
docs/update-readme
test/add-integration-tests
refactor/improve-performance
```

### Before Every Commit Checklist
- [ ] All tests pass
- [ ] No linting errors
- [ ] Code follows project standards
- [ ] Commit message is descriptive
- [ ] Changes are focused and related

### PR Best Practices
- [ ] Clear, descriptive title
- [ ] Detailed description of changes
- [ ] Screenshots for UI changes
- [ ] Tests included/updated
- [ ] Documentation updated if needed
- [ ] Small, focused changes (not too big)

---

## 📚 Common Commands Reference

### Git Basics
```bash
# Check status
git status

# See commit history
git log --oneline -10

# See changes in a file
git diff filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo changes to a file
git checkout -- filename
```

### Branch Management
```bash
# List all branches
git branch -a

# Switch to branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

### Remote Operations
```bash
# Add remote
git remote add origin https://github.com/username/repo.git

# Fetch latest changes
git fetch origin

# Pull changes
git pull origin main

# Push changes
git push origin branch-name

# Set upstream branch
git push -u origin branch-name
```

### Emergency Commands
```bash
# Stash current changes
git stash

# Apply stashed changes
git stash pop

# See what's stashed
git stash list

# Discard all local changes
git reset --hard HEAD

# Go back to previous commit
git reset --hard HEAD~1
```

---

## 🆘 Troubleshooting

### Common Issues

**"Your branch is behind"**
```bash
git pull origin main
```

**Merge conflicts**
1. Open conflicted files in Cursor
2. Look for `<<<<<<< HEAD` markers
3. Choose which version to keep
4. Remove conflict markers
5. `git add .` and `git commit`

**Accidentally committed to wrong branch**
```bash
git reset --soft HEAD~1  # Undo commit, keep changes
git checkout correct-branch
git add .
git commit -m "your message"
```

**Need to update commit message**
```bash
git commit --amend -m "new message"
```

---

## 🎉 Success Checklist

After following this guide, you should be able to:
- [ ] Create feature branches
- [ ] Make commits with proper messages
- [ ] Push changes to remote
- [ ] Create pull requests
- [ ] Handle basic Git operations
- [ ] Use Cursor's Git integration effectively

---

*Happy coding! 🚀*

---

**Last updated:** $(date)
**Created for:** Playwright DemoQA Testing Project
