
# Tuto — Garder son fork à jour & gérer les conflits

1) Ajoutez le dépôt source comme `upstream`:
```bash
git remote add upstream https://github.com/Active-Solution-SN/AS-GitHub-HTMLCSSJS-ALGO-Dakar-2025.git
```
2) Récupérez les mises à jour:
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```
3) Conflits ? Ouvrez les fichiers marqués `<<<<<<` et résolvez-les, puis:
```bash
git add .
git commit
git push
```
