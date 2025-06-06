// SearchAppBar.jsx에서 AutoComplete 리스트 (시간부족으로 하드코딩)
const flowers = [
    "개양귀비",
    "거베라",
    "관동화",
    "극락조화",
    "글라디올러스",
    "글로리오사",
    "금어초",
    "금매화",
    "금잔화",
    "금영화",
    "경엽두란",
    "꽃도라지",
    "꽃무",
    "나무양귀비",
    "나팔꽃",
    "나비바늘꽃",
    "네리네",
    "노랑꽃창포",
    "니겔라",
    "다투라",
    "다알리아",
    "달난초",
    "달리아(오렌지)",
    "대상화",
    "도라지꽃",
    "독일붓꽃",
    "동백나무",
    "디기탈리스",
    "라바테라",
    "매발톱",
    "목련",
    "무궁화",
    "무스카리",
    "미국능소화",
    "미나리아재비",
    "바람꽃",
    "범부채",
    "베르가못",
    "부겐베리아",
    "분홍낮달맞이꽃",
    "브로멜리아",
    "비단목메꽃",
    "비숍 달리아",
    "뻐꾹나리",
    "사막장미",
    "삼색제비꽃",
    "서양가시엉겅퀴",
    "서양민들레",
    "솔체꽃",
    "수련",
    "수선화",
    "수염패랭이꽃",
    "수잔루드베키아",
    "스위트피",
    "시계꽃",
    "시클라멘",
    "아마릴리스",
    "아스트란티아",
    "아카울리스용담",
    "아티초크",
    "알스트로메리아",
    "앵초",
    "어저귀",
    "에린지움",
    "연꽃",
    "영산홍",
    "오스테오스펄멈",
    "옥스아이데이지",
    "왕자의 깃털",
    "용왕꽃",
    "우창꽃",
    "자주천인국",
    "장미",
    "절굿대",
    "제라늄",
    "참나리",
    "천수국",
    "천인국",
    "크로커스",
    "칼라",
    "카네이션",
    "카우틀레이아 스피카타",
    "카틀레야 라비아타",
    "캄파눌라 미디움",
    "코스모스",
    "쿠르쿠마",
    "클레마티스",
    "태양국",
    "틸란드시아",
    "페튜니아",
    "포인세티아",
    "투구꽃",
    "플루메리아",
    "풀협죽도",
    "하와이무궁화",
    "한련화",
    "해바라기",
    "헬레보루스",
    "홍초",
    "홍학꽃",
    "홍화월도",
    "Alpine Sea Holly", 
    "Anthurium", 
    "Artichoke", 
    "Azalea",
    "Ball moss", 
    "Balloon flower",
    "Barbeton daisy",
    "Bearded Iris",
    "Bee Balm",
    "Bird of Paradise",
    "Bishop of Llandaff",
    "Black-eyed Susan",
    "Blackberry Lily", 
    "Blanket flower",
    "Bolero Deep Blue",
    "Bougainvillea",
    "Bromelia",
    "Buttercup",
    "California Poppy",
    "Camellia",
    "Canna Lily",
    "Canterbury Bells",
    "Cape flower",
    "Carnation",
    "Cautleya spicata",
    "Clematis", 
    "Colt's foot", 
    "Columbine",
    "Common dandelion",
    "Corn poppy",
    "Cyclamen",
    "Daffodil",
    "Desert Rose",
    "English Marigold",
    "Fire lily",
    "Foxglove",
    "Frangipani",
    "Fritillary",
    "Garden Phlox",
    "Gaura",
    "Gazania",
    "Geranium",
    "Giant White Arum lily",
    "Globe flower",
    "Globe Thistle",
    "Grape Hyacinth",
    "Great Masterwort",
    "Hard-leaved Pocket Orchid",
    "Hibiscus",
    "Hippeastrum",
    "Japanese Anemone",
    "King protea", 
    "Lenten Rose",
    "Lotus",
    "Love in a mist",
    "Magnolia",
    "Mallow", 
    "Marigold",
    "Mexican Aster",
    "Mexican Petunia",
    "Monkshood",
    "Moon Orchid",
    "Morning Glory",
    "Orange Dahlia",
    "Osteospermum",
    "Oxeye daisy",
    "Passion flower",
    "Pelargonium", 
    "Peruvian lily",
    "Petunia",
    "Pincushion flower",
    "Pink-Yellow Dahlia",
    "Pink Evening Primrose",
    "Poinsettia", 
    "Primula",
    "Prince-of-Wales Feather",
    "Purple coneflower",
    "Red Ginger",
    "Rose",
    "Ruby-Lipped Cattleya",
    "Siam tulip",
    "Silverbush",
    "Snapdragon",
    "Spear Thistle",
    "Spring Crocus",
    "Stemless Gentian",
    "Sunflower",
    "Sweetpea",
    "Sweet William",
    "Sword lily",
    "Thorn-apple",
    "Tiger lily",
    "Toad Lily",
    "Tree mallow",
    "Tree Poppy",
    "Trumpet Creeper",
    "Wallflower", 
    "Water Lily",
    "Watercress", 
    "Wild Pansy",
    "Wind flower",
    "Yellow iris"
]



export default flowers;