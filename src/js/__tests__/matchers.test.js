import getSortedHeroes from '../matchers';

test('check sort heroes', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(getSortedHeroes(input)).toEqual(sortedHeroes);
});

test('sort heroes with equal health', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лунтик', health: 80 },
  ];
  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лунтик', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(getSortedHeroes(input)).toEqual(sortedHeroes);
});
