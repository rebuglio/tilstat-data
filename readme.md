# Utilities per predisporre i dati di [TilStat](https://rebuglio.it/tilstat)

Per contribuire, leggi la [sezione apposita](#come-contribuire?).

## Cos'è?
Questo script è parte di [TilStat](https://rebuglio.it/tilstat), un tool che nasce per raccogliere **in modo non-ufficiale** varie statistiche sul **TIL**, il test d'ingresso del Politecnico di Torino; così come altre satistiche sul Politecnico stesso.


## Cosa c'è in questo repo?
Ci sono due notebook. `Tilstat scraper 17-18 20-21.ipynb` (poco commentato) consente di leggere le graduatorie fino al 2021 incluso, `Tilstat scraper 21-22.ipynb` (abbastanza commentato) legge le successive. `Tilstat merger.ipynb` legge gli output degli scraper e li trasforma in un formato json ridotto, leggibile da browser.


## Come contribuire?

**TL;DR**

Installa [Poetry](https://python-poetry.org/), un tool alternativo a venv e freeze:
```
curl -sSL https://install.python-poetry.org | python3 -
```

Aggiungi il comando `poetry` alla Path, poi esegui **nella root del progetto**:
```
poetry install
poetry run jupyter notebook
```

### Perché Poetry?


Il progetto usa [Poetry](https://python-poetry.org/), un tool per Python che gestisce sia dipendenze che virtual-env. Poetry non fa niente più rispetto a _virtualenv_ e _pip freeze_, ma nella mia limitata esperienza tende a farlo _meglio_ e con meno rogne. Dipendenze ed informazioni sul progetto sono salvate **tutte** in un'unico file, `pyproject.toml`, mentre `poetry.lock` è un file tenuto aggiornato automaticamente da Poetry che memorizza l'intera catena delle dipendenze, il che rende di solito indolore spostarsi di macchina. 

#### Crash course:


- Creare virtualenv ed installare le dipendenze: `poetry install`
  
- Attivare il virtualenv: **non serve.** Tutti gli script eseguiti con `poetry run` nella directory del progetto vengono interpretati nel giusto contesto.
 

- Runnare jupyter: `poetry run jupyter notebook`

- Runnare uno script qualsiasi: `poetry run python script.py`

- Aggiungere o rimuovere una dipendenza da pipy: `poetry add nome_dipendenza` oppure `poetry remove nome_dipendenza`

- Tutti i comandi sinora detti aggiornano in automatico la catena di dipendenza, e garantiscono la coerenza. Se vuoi farti del male puoi aggiornare le dipendenze modificando `pyproject.toml` a mano, ma devi comunicarlo a Poetry con il comando `poetry lock`

"# tilstat-data" 
