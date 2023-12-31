# Git & GitHub Team Workflow
the team leader should do it only once:

- create organization and 2 repos ( frontend / backend )
- add the teams as owners or only contributors
- create the structure of the project make sure to add all needed files
- the team will clone the repos
- each one will be working in his/her feature on his/her branch this is a must and ***at the end of each day*** we will do the merge party
## When you start a new feature...
* Start from an up-to-date main branch
    * ***git checkout main***
    * ***git pull origin main***
    * Create a new feature branch with ***git checkout -b \<branchname>***
* Do work on your feature branch and add, commit, and push
    * ***git add \<file>***
    * ***git commit -m \<useful message>***
    * ***git push origin \<feature_branch_name>***
* On GitHub...
    * Create a Pull Request (PR) for that branch on GitHub
    * Have someone else review the code in the PR and merge it
## Time for a Merge Party!

**WHEN A PULL REQUEST FROM SOMEONE ELSE'S \<FEATURE BRANCH> IS MERGED TO MAIN, EVERYONE MUST DO THESE STEPS**

* commit changes to your feature branch

    * ***git add \<file>***
    * ***git commit -m \<useful message>***
* update your local main branch

    * ***git checkout main***
    * ***git pull origin main***
* update your feature branch with changes in `main

    * ***git checkout \<feature_branch_name>***
    * ***git merge main***
* handle merge conflicts if there are any

    * Check all of your project files for the markers that indicate merge conflicts (in other words, the >>>>>>>>> and HEAD stuff that has mysteriously appeared in your code)
    * Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
    * ***git add \<affected-files>***
    * ***git commit -m "merged main"***