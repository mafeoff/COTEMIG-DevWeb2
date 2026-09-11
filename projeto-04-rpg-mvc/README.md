# Project 04 — RPG Game (COTEMIG)

Text- and image-based RPG game developed in PHP, featuring character class selection (warrior, female warrior, mage, white elf, dark elf, rogue), a map, NPCs, and victory/defeat conditions.

## Two Versions Showing the Project's Evolution

- **`v1-sem-model-04abr/`** (04/04/2023) — initial version without separate `models`: all character logic is contained in the controller (`controllers/jogo.php`). The original file name (`cotemig-rpg-game-no-model`) also indicates this structure.
- **`v2-com-model-19abr/`** (04/19/2023) — refactored into a complete MVC structure: each character class has its own file in `models/` (`guerreiro.php`, `maga.php`, `elfa-branca.php`, etc.), along with a base `personagem.php` and `carregar-models.php` to import the classes.

