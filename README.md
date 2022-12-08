# git-config
git config --global user.name "Дмитрий Павлов"
git congig --global user.email "sarville@gmail.com"

git config --list

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main
git init # инициализация репозитория
git add . # добавить все файлы в track
git commit -m 'описание' # сделать commit
git status # показывает текущий статус
git diff --color-words # показывает изменения с подсветкой
git checkout . # вернуться к последнему коммиту
 
