**[hub.naezith.com](https://hub.naezith.com)**

This is a hub website for Remnants of Naezith, made with **React** and **Node.js**. It displays Levels, Leaderboards, Players, and Global Rankings.

It fetches data from **Remnants of Naezith Server**.

**There are 5 pages in total**

**Three of them are main pages, are accessible from the navigation bar**

* Global Rankings - List of all players, sorted by their dominance %.
* World Records - This page has a leaderboard, shows the World Record holders, how many records they have. Page continues with the list of all levels, the world record for every level, showing when, by whom it was broken. 
* Search Players - Players are searchable by name or SteamID64, listing all the found players.

**Two of them are accessable from links in the main pages.**

* Level - General information about the level, and a list of all players who finished the level, sorted by lowest time they finished the level.
* Player - General information about the player, and a list of all levels he completed.

All these lists have high detail information.

**You need to have a secret.js file which includes a Steam Web API key**
