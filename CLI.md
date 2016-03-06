# CLI (Command Line Interface)		

 	1  cd Desktop/ - change directory
    2  ls - list files in the folder
    3  nano index.html - "nano" - text editor, open index.html in nano 
    4  node -v - check nodeJS binary version (can be applied to any app to check version)
    5  git -v - same as above
    7  ls -al ~/.ssh - list all hidden files in folder .ssh
    8  mkdir .ssh - create folder .ssh
    9  cd .ssh - changed directory
   10  ssh-keygen -t rsa -b 4096 -C "yuriymamatov@gmail.com" 
   12  ssh-add id_rsa 
   13  mate . - open a file with textmate
   15  cd .. - change dir where . means to the folder in the same dir while .. means go one dir up ../../ two dir up etc ~ go to home directory
   16  mkdir webdev creade folder
   17  cd webdev/ 
   18  git clone git@github.com:yuriym1/webdev101.git - clone repository (folder)
   19  mate .
   20  ls
   21  cd webdev101
   22  git status - check repository
   23  git diff - check changes
   24  git add . - add contents of this folder to version control
   25  git commit -m "update style" - save all changes under the name update style
   26  git push origin - upload the working version to github
   27  ls
   28  cd webdev
   29  mate .
   30  node -v
   31  node -v
   32  history - show input history
   32  man - manual for each command (e.g man ls)
   33  open - open finder
   34  npm - node package manager, allows to install apps for working with the server