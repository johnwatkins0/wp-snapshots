import { sourceUrlGenerator } from '../sourceUrlGenerator';

test('sourceUrlGenerator function', () => {
  const sourceUrl = sourceUrlGenerator();

  expect(sourceUrl()).toBe('/demo/src/images/300x200-1.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-1.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-2.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-2.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-3.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-3.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-4.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-4.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-5.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-5.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-6.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-6.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-7.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-7.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-7.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-7.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/300x200-6.jpg');
  expect(sourceUrl()).toBe('/demo/src/images/1024x683-6.jpg');
});
