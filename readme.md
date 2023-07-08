mongoimport --uri mongodb+srv://admin:gYHK4gF2dy9kEcPO@finvestfxdb.whwhkra.mongodb.net/recipeFxDb --collection recipes --file ./dumps.json --jsonArray

Feature:

Sorting applied on category basis on expnaded row - price column


TODO:

sync with latest data - since data is cached in local
stop price rerendering by adding validation on price save reset i.e nothing changed then dont spread
reordering data issue when save after sorting

![Table UI](https://res.cloudinary.com/rk22719/image/upload/v1688843874/Screenshot_2023-07-09_004741_uwszcg.png)

