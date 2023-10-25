// src/players.js
const players = [
    {
      name: "Cristiano Ronaldo ",
      team: "Al-Nassr Football Club",
      nationality: "Portuguese",
      jerseyNumber: 7,
      age: 38,
      imageUrl: "data:image/jpeg;base64,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",
    },
    {
      name: "Lionel Messi ",
      team: "Miami B",
      nationality: "Argentina",
      jerseyNumber: 10,
      age: 36,
      imageUrl: "data:image/jpeg;base64,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",
    },
    {
      name: "Mohamed Salah",
      team: "Liverpool",
      nationality: "Egytian",
      jerseyNumber: 11,
      age: 31,
      imageUrl: "data:image/jpeg;base64,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",
    },
    {
      name: "Sadio Mané",
      team: "Al-Nassr",
      nationality: "Sénégal",
      jerseyNumber: 10,
      age: 31,
      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QFARXhpZgAASUkqAAgAAAADAA4BAgDqAAAAMgAAAJiCAgAcAAAAHAEAABIBAwABAAAAAQAAAAAAAABUT0tZTywgSkFQQU4gLSBKVUxZIDI2OiBTYWRpbyBNYW5lIG9mIEJheWVybiBNdW5pY2ggZHVyaW5nIHRoZSBwcmVzZWFzb24gZnJpZW5kbHkgbWF0Y2ggYmV0d2VlbiBNYW5jaGVzdGVyIENpdHkgYW5kIEJheWVybiBNdWVuY2hlbiBhdCBOYXRpb25hbCBTdGFkaXVtIG9uIEp1bHkgMjYsIDIwMjMgaW4gVG9reW8sIEphcGFuLiAoUGhvdG8gYnkgUm9iYmllIEpheSBCYXJyYXR0IC0gQU1BL0dldHR5IEltYWdlcykyMDIzIEFNQSBTcG9ydHMgUGhvdG8gQWdlbmN5/+0BWlBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAE+HAJQABhSb2JiaWUgSmF5IEJhcnJhdHQgLSBBTUEcAngA6lRPS1lPLCBKQVBBTiAtIEpVTFkgMjY6IFNhZGlvIE1hbmUgb2YgQmF5ZXJuIE11bmljaCBkdXJpbmcgdGhlIHByZXNlYXNvbiBmcmllbmRseSBtYXRjaCBiZXR3ZWVuIE1hbmNoZXN0ZXIgQ2l0eSBhbmQgQmF5ZXJuIE11ZW5jaGVuIGF0IE5hdGlvbmFsIFN0YWRpdW0gb24gSnVseSAyNiwgMjAyMyBpbiBUb2t5bywgSmFwYW4uIChQaG90byBieSBSb2JiaWUgSmF5IEJhcnJhdHQgLSBBTUEvR2V0dHkgSW1hZ2VzKRwCdAAcMjAyMyBBTUEgU3BvcnRzIFBob3RvIEFnZW5jeRwCbgAMR2V0dHkgSW1hZ2Vz/+EGGmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMjMgQU1BIFNwb3J0cyBQaG90byBBZ2VuY3kiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjE1NTY3NzcxMzMiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+Um9iYmllIEpheSBCYXJyYXR0IC0gQU1BPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5UT0tZTywgSkFQQU4gLSBKVUxZIDI2OiBTYWRpbyBNYW5lIG9mIEJheWVybiBNdW5pY2ggZHVyaW5nIHRoZSBwcmVzZWFzb24gZnJpZW5kbHkgbWF0Y2ggYmV0d2VlbiBNYW5jaGVzdGVyIENpdHkgYW5kIEJheWVybiBN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",
    },
  ];
  
  export default players;
  