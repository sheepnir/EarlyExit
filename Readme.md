## Environemtn setup instructions 

#### Create a new python virtual environment

```bash
python3 -m venv venv
```

This creates a new virtual environment in the venv/ directory.

Activate the virtual environment:

```bash
source venv/bin/activate
```

To deactivate use:

```bash
deactivate
```

 #### Create a new Git and Github Repo

Open Terminal and navigate to your project directory:

```bash
cd ~/Developer/EarlyExit
```

Initiate a Git repository

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new GitHub repository using GH

```bash
gh repo create EarlyExit --public --source=. --remote=origin --push
```

- --public: Makes the repo public (change to --private if needed)
- --source=.: Uses current directory
- --remote=origin: Sets the remote name
- --push: Pushes the initial commit to GitHub

## **Full Fork & PR Workflow**

Make sure you’re on the latest master and synced with upstream

```
git checkout master
git fetch upstream
git merge upstream/master
git push origin master
```

Create a new feature branch from master and rebase master

```
git checkout -b feature/<your-feature-name>
git rebase master
```

Make code changes and commit them

```
git add .
git commit -m "Add: <short description of change>"
```

When done and tested, push the feature branch to your fork:

```
git push origin feature/<your-feature-name>
```

Submit a PR

```
gh pr create --base master --head feature/<your-feature-name> --title "Add: <short summary>" --body "<detailed description here>"
```

