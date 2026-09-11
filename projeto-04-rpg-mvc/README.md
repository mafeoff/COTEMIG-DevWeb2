# Projeto 04 — Jogo de RPG (Cotemig)

Jogo de RPG em PHP baseado em texto/imagens: escolha de classe de personagem (guerreiro, guerreira, mago, elfa branca, elfo negro, gatuna), mapa, NPCs e condições de vitória/derrota.

## Duas versões, mostrando a evolução do projeto
- **`v1-sem-model-04abr/`** (04/04/2023) — versão inicial, sem separação de "models": toda a lógica de personagem fica dentro do controller (`controllers/jogo.php`). O próprio nome original do arquivo (`cotemig-rpg-game-no-model`) já indica isso.
- **`v2-com-model-19abr/`** (19/04/2023) — versão refatorada para o padrão MVC completo: cada classe de personagem ganhou seu próprio arquivo em `models/` (`guerreiro.php`, `maga.php`, `elfa-branca.php`, etc.), com um `personagem.php` base e `carregar-models.php` para importar tudo.

Essa progressão (funcional sem MVC → refatorado com MVC/models) é visível diretamente nas datas dos arquivos.
