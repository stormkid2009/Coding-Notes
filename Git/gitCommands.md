# Terminal Commands to use Git
```bash
$ git --version

```
 ***to check the version of git we have installed in our system***.

```bash
$ mkdir <name of new folder>
```
***just create new directory or folder***.

```bash
$ touch <name of new file>
```
***To create new file we need***.

```bash
$ rm <filename>
```
***To delete existing file***.
    
```bash
$ cd <directory>
```
***To change our directory***.

```bash
$ git init
```
***initiliaze a new git repository***.

```bash
$ git add <file name>
```
* filename
* Or <.html> files with extension
* Or < . > to add all kind of files.
  
***Here we add file or files to the stage area
    means we can keep track them***.

```bash
$ git commit -m "write description for the commit"
```
***Here we make snapshot of our changes ready to push them to remote or merge them with local repo***.

```bash
$ git log
```
***To get information about commits ,time ,author ....etc***

```bash
$ git checkout <hash of commit> <filename>
```
***To undo commited changes and back to the previous version***.

```bash
$ touch .gitignore
```
***To create our gitignore file***.

simply files added to gitignore are not included
    while making commits.

```bash
$ clear
```
**Or ctrl+l to Clear the terminal**.
    

```bash
$ git config --global user.name
```
***this will show our global username for git.***

```bash
$ git config --global user.name "write name here "
```
***To assign a user name***.

```bash
$ git config --global --edit
```
***This will get our configuration list in editor so we can make changes manually***

```bash
$ ssh-keygen -t rsa -b 4096 -C "valid e mail"
```
**ssh = secure shell**

**keygen = key generate**

**-t rsa  = type of algoritm we will use**

```bash
$ enter file................ 
```
**we will use the directory of the file later.**

```bash
$ enter password....
```
**remember this pass its key pass we gonna need it.**

```bash
$ cat ............. put the directory of ssh here
```
**after this copy the content of key and put it in github.**

```bash
$ ssh -T git@github.com
```
***To test our key.***

```bash
$ git remote add origin  "ur repo link here"
```
***To connect our local repo with remote at github.***

```bash
$ git fetch
```
***To retrieve the latest meta-data info from the original [remote repo]***
***To know the changes done in the remote repo/branch since your last pull.***

```bash
$ git diff <master branch_path> < origin remote_path>
```
***To follow fetch command to compare the local repo with remote so we can figure out the changes .***
    
**To check branch_path just [$git branch -a].**

```bash
$ git pull origin master
```
***clone/download  a copy of remote repo on local machine***

**git pull[doing two operations here] = git fetch + git merge within master branch.**

```bash
$ git branch <branch name>
```
***To create a branch.***

```bash
$ git checkout <branch name>
```
***To switch to a branch.***
```bash
$ git checkout -b <new branch name>
```
***To make new branch and switch to it.***

```bash
$ git branch -a
// or
$ git branch --list
```
***To show our branches***
```bash
$ git branch -d <branch name>
```
***To delete a branch from local repository.***
```bash
 $ git merge <feature branch>
 ```
***To merge changes of feature branch into current branch.***

**Use merge in cases where you want a set of commits to be clearly grouped together 
    in history.**
    
```bash
 $ git checkout <feature branch>
 $ git rebase master
 ```
* Do same thing like merge but order commits in a better way.
* Use rebase when you want to keep a linear commit history
* DON’T use rebase on a public/shared branch
