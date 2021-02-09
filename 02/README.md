> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` JavaScript: Podstawy - pętle

W pliku `app.js` są zadeklarowane dwie zmienne tj. `x` oraz `result`, do których odpowiednio zostały przypisane wartości `5` oraz `0`. Twoim zadaniem będzie obliczenie sumy wszystkich kolejnych liczb od `1` do `x`.

Deklaracja dla `x` została wykonana przy pomocy słowa kluczowego `const`, co oznacza, że jej wartość w trakcie działania programu nie będzie zmieniana. W przypadku `result` wykorzystałem `let` ponieważ ma ona przechowywać sumę kolejnych liczb od `1` do wartości `x` czyli `5`. Docelowo `result = 1 + 2 + 3 + 4 + 5` jeśli `x = 5`.

Do uzyskania kolejny liczb musisz użyć pętli `for`, która będzie generować poszczególne liczby. Liczby te będziesz dodawać do częściowej sumy całego wyniku. Każda iteracja pętli `for` to inna wartość dla `result`. Początkowo `result` będzie równe `0`, ale każda iteracja to nowa wartość tj.

1. result = 0 + 1
2. result = 1 + 2
3. result = 3 + 3
4. result = 6 + 4
5. result = 10 + 5

Ostatecznie `result = 15` czyli tyle co `result = 1 + 2 + 3 + 4 + 5` - mamy nasz wynik! Zwróć uwagę, że powyższym przykładzie pierwsza liczba to wartość `result` z poprzedniego działania (lub zero przy pierwszej iteracji), natomiast druga liczba to kolejna liczba większa o 1.

Teraz spróbuj przy pomocy pętli `for` uzyskać to rozwiązanie.

Jeśli wykonasz to zadanie to spróbuj to samo zrobić przy pomocy pętli `while`.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
