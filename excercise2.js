/*
Exercise 2

const data =
[
  {
    name: ‘Alpha’,
    class: ‘Dragon’,
    club: ['Bola', 'Bulutangkis']
  },
  {
    name: Beta,
    class: ‘Lizard’,
    club: ['Membaca', 'Bulutangkis']
  },
]

Tampilkanlah seperti ini
Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

*/

const data =
[
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"]
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"]
  },
]



console.log(data[0].name +" ada di kelas "+ data[0].class +", dia mengikuti club "+ data[0].club[0] +", "+ data[0].club[1]);
console.log(data[1].name +" ada di kelas "+ data[1].class +", dia mengikuti club "+ data[1].club[0] +", "+ data[1].club[1]);