import { getHeroesByName } from "../../../heroes/helpers";

describe("Pruebas en el getHeroById", () => {
  test("Debe devolver el hero que coincida con el name en superhero", () => {
    const name = "dc-wonder";
    const expectedHero = {
      id: "dc-wonder",
      superhero: "Wonder Woman",
      publisher: "DC Comics",
      alter_ego: "Princess Diana",
      first_appearance: "All Star Comics #8",
      characters: "Princess Diana",
    };
    const heroes = getHeroesByName(name);
    console.log(heroes);
    expect(heroes[0]).toEqual(expectedHero);
  });
});
