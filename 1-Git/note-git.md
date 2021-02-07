##### Git introduction
- `git init`:  initialize a new Git project - sets up all the tools Git needs to begin tracking changes made to the project.
- `git status`: notice the file in red under untracked files. Untracked means that Git sees the file but has not started tracking changes yet.
- `git add filename`: after `git status`, in the output, notice that Git indicates the changes to be committed with “new file: scene-1.txt” in green text. Here Git tells us the file was added to the staging area.
- `git diff filename`: check the differences between the working directory and the staging area 
    Changes to the file are marked with a + and are indicated in green
- `git commit -m "message"`: commit permanently stores changes from the staging area inside the repository.
- `git log`:  view commits stored chronologically in the repository.

##### Backtrack in Git
- head commit: In many cases, the most recently made commit is the HEAD commit.
    To see: `git show HEAD`
- `git checkout HEAD filename`: restore the file in your working directory to look exactly as it did when you last made a commit.
- `git reset HEAD filename`: unstage the file from the staging area if any accidental change occurs. 
- `git reset commit_SHA`: using the first 7 characters of the SHA of a previous commit

##### Github
- More on Github: https://www.youtube.com/playlist?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-
- Github learning lab: https://lab.github.com/
- Github Guides: https://guides.github.com/

##### Markdown
- Markdown cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- Markdown in VSCode: https://code.visualstudio.com/docs/languages/markdown
- How to write a good README: https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project