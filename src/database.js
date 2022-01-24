import HotEatOne from "./assets/hotEat/hot-eat-1.jpg";
import HotEatTwo from "./assets/hotEat/hot-eat-2.jpg";
import HotEatThree from "./assets/hotEat/hot-eat-3.jpg";

import Chicken from "./assets/miniRolls/chicken.jpg";
import Filadelf from "./assets/miniRolls/filadelf.jpg";
import Ebi from "./assets/miniRolls/hotEbi.jpg";
import Ostin from "./assets/miniRolls/ostin.jpg";
import HotChiken from "./assets/miniRolls/hotChicken.jpg";
import Weague from "./assets/miniRolls/weague.jpg";
import Canzas from "./assets/miniRolls/canzas.jpg";
import Chicago from "./assets/miniRolls/chicago.jpg";
import Crim from "./assets/miniRolls/crim.jpg";
import Gaspe from "./assets/miniRolls/gaspe.jpg";

export const hotEat = [
  {
    id: 1,
    image: HotEatOne,
    title: "Горячий обед 1",
    description: `Кальцоне ( ветчина + сыр + чеснок) + салат "Цезарь с курицей" + напиток`,
    price: 230,
  },
  {
    id: 2,
    image: HotEatTwo,
    title: "Горячий обед 2",
    description: `Горячий ролл "Честер" ( рис, нори, пекин. капуста,краб, майонез,лосось, унаги, карт. "пай" ) + салат "греческий" + напиток`,
  },
  {
    id: 3,
    image: HotEatThree,
    title: "Горячий обед 3",
    description: `Удон с курицей+ салат Коул-Слоу + напиток`,
    price: 230,
  },
];

export const miniRolls = [
  {
    id: 4,
    image: Chicken,
    title: "Горячий мини ролл Чикен Микс",
    description:
      "-сыр виола  -огурец мар.   -томат   -куриное филе   -салат   -соус цезарь",
    price: 215,
  },
  {
    id: 5,
    image: Filadelf,
    title: "Мини ролл Филадельфия с креветкой и ананасом",
    description: "-сыр слив.    -креветки    -ананас    -лосось",
    price: 230,
  },
  {
    id: 6,
    image: Ebi,
    title: "Мини ролл Горячий Эби",
    description: "-сыр слив.   -креветки    -томат",
    price: 230,
  },
  {
    id: 7,
    image: Ostin,
    title: "Мини ролл Остин",
    description: "-лосось х/к    -огурец    -лук порей",
    price: 150,
  },
  {
    id: 8,
    image: HotChiken,
    title: "Мини ролл Острый с курицей",
    description: "-куриное филе копч.    -томат   -соус спайс",
    price: 125,
  },
  {
    id: 9,
    image: Weague,
    title: "Мини ролл Овощной",
    description: "-огурец    -томат    -перец    -салат   -бальзам.уксус",
    price: 125,
  },
  {
    id: 10,
    image: Canzas,
    title: "Канзас",
    description: "-креветки в темпуре    -сыр янтарь    -салат",
    price: 150,
  },
  {
    id: 11,
    image: Chicago,
    title: "Мини ролл Чикаго",
    description: "-слив.сыр    -креветки    -огурец",
    price: 150,
  },
  {
    id: 12,
    image: Crim,
    title: "Мини ролл Крым",
    description: "-лосось террияки    -сыр слив    -огурец    -красная тобика",
    price: 130,
  },
  {
    id: 13,
    image: Gaspe,
    title: "Мини ролл Гаспе",
    description: "-сыр слив.    -снеж.краб    -огурец    -лосось х/к",
    price: 125,
  },
];

export default {
  hotEat,
  miniRolls,
};
