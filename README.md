# Corrections
## General
- Structurer le projet dans des dossiers separes :
```
├── index.html
├── 📂 css
 	├── style.css
 	└── style.scss
├── 📂 img
 	├── fond.png
 	├── gitlab.png
 	└── ...
```
## HTML

- Utiliser la structure en grid de Bootstrap : [Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)

Exemple:
 ``` html
<div class="container">
	<div class="row">
		<div class="col-sm-6">
			...
		</div>
		<div class="col-sm-6">
			...
		</div>
	</div>
</div>
 ```

## SCSS
- Utiliser les variables scss
- Utiliser l'imbrication

Exemple:
``` SCSS
.card {
	p {
		color: red;
	}
}
```