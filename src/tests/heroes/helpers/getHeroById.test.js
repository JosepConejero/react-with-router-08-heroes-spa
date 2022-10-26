import { getHeroById } from "../../../heroes/helpers";

describe("Pruebas en el getHeroById", () => {
  test("Debe devolver el hero que coincida con el id", () => {
    const id = "dc-wonder";
    const expectedHero = {
      id: "dc-wonder",
      superhero: "Wonder Woman",
      publisher: "DC Comics",
      alter_ego: "Princess Diana",
      first_appearance: "All Star Comics #8",
      characters: "Princess Diana",
    };
    const hero = getHeroById(id);
    expect(hero).toEqual(expectedHero);
  });
});
