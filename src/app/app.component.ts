import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assessment';

  regionsDatas = [
    {
      name: 'Badacsony',
      isSelected: false,
    },
    {
      name: 'Nyitra',
      isSelected: false,
    },
    {
      name: 'Balaton-Felvidék',
      isSelected: false,
    },
    {
      name: 'Neszmély',
      isSelected: false,
    },
    {
      name: 'Balatonboglár',
      isSelected: false,
    },
    {
      name: 'Pécs',
      isSelected: false,
    },
    {
      name: 'Balatonfüred - Csopak',
      isSelected: false,
    },
    {
      name: 'Pannonhalma',
      isSelected: false,
    },
    {
      name: 'Bükk',
      isSelected: false,
    },
    {
      name: 'Sopron',
      isSelected: false,
    },
    {
      name: 'Csongrád',
      isSelected: false,
    },
    {
      name: 'Szekszárd',
      isSelected: true,
    },
    {
      name: 'Etyek - Buda',
      isSelected: false,
    },
    {
      name: 'Tokaj',
      isSelected: false,
    },
    {
      name: 'Eger',
      isSelected: true,
    },
    {
      name: 'Tolna',
      isSelected: false,
    },
    {
      name: 'Hajós - Baja',
      isSelected: false,
    },
    {
      name: 'Zala',
      isSelected: false,
    },
    {
      name: 'Kunság',
      isSelected: false,
    },
    {
      name: 'Villány',
      isSelected: false,
    },
    {
      name: 'Mátra',
      isSelected: false,
    },
  ];

  cardDatas = [
    {
      name: 'Borvacsora',
      isSelected: false,
      image: '../assets/dish.svg',
    },
    {
      name: 'Élmény',
      isSelected: true,
      image: '../assets/jeep.svg',
    },
    {
      name: 'Klasszik',
      isSelected: false,
      image: '../assets/classic.svg',
    },
    {
      name: 'Prémium',
      isSelected: false,
      image: '../assets/premium.svg',
    },
    {
      name: 'Szakmai',
      isSelected: false,
      image: '../assets/professional.svg',
    },
    {
      name: 'Piknik',
      isSelected: false,
      image: '../assets/picnic.svg',
    },
    {
      name: 'Workshop',
      isSelected: false,
      image: '../assets/workshop.svg',
    },
    {
      name: 'Online',
      isSelected: false,
      image: '../assets/online.svg',
    },
  ];

  tagsDatas = [
    { name: 'Családias', isSelected: false },
    { name: 'Érdekes sztorik a borásztól', isSelected: false },
    { name: 'Fantasztikus étel', isSelected: true },
    { name: 'Gyerekkel is ajánlott', isSelected: false },
    { name: 'Gyönyörű kilátás', isSelected: false },
    { name: 'Interaktív élmény', isSelected: false },
    { name: 'Különleges helyszín', isSelected: false },
    { name: 'Legény/lánybúcsú helyszín', isSelected: false },
    { name: 'Lenyűgöző pincerendszer', isSelected: false },
    { name: 'Prémium borok', isSelected: false },
    { name: 'Romantikus', isSelected: false },
    { name: 'Szállás lehetőség', isSelected: true },
    { name: 'Wellness lehetőség', isSelected: false },
  ];

  switchDatas = [
    {
      name: 'Akadálymentesített',
      isSelected: false,
      image: '../assets/toilet.svg',
    },
    {
      name: 'Wifi',
      isSelected: true,
      image: '../assets/wifi.svg',
    },
    {
      name: 'Parkolási lehetőség',
      isSelected: false,
      image: '../assets/parking.svg',
    },
    {
      name: 'Állatbarát',
      isSelected: false,
      image: '../assets/pawprint.svg',
    },
  ];

  foodDatas = [
    { name: 'Borkorcsolya', isSelected: true },
    { name: 'Gyümölcstál', isSelected: false },
    { name: 'Csokoládé', isSelected: false },
    { name: 'Hidegtál', isSelected: false },
    { name: 'Degusztációs menü', isSelected: true },
    { name: 'Sajttál', isSelected: false },
    { name: 'Desszert', isSelected: false },
    { name: '', isSelected: false },
    { name: 'Főétel', isSelected: false },
  ];

  groupSizeDates = [
    { name: 'Kicsi (1-4)', isSelected: true },
    { name: 'Közepes (5 - 12)', isSelected: false },
    { name: 'Nagy (13 - 24)', isSelected: false },
    { name: 'Rendezvény (25+)', isSelected: false }
  ]

  evaluationDates = [
    { name: 'Kiváló', isSelected: false },
    { name: 'Jó', isSelected: false },
    { name: 'Átlagos', isSelected: false },
    { name: 'Gyenge', isSelected: false },
    { name: 'Rossz', isSelected: false }
  ]
}
