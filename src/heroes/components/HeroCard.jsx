import { Link } from "react-router-dom";

// esta será una tercera manera de hacerlo, con la creación de un componente dentro del componente
const CharactersByHero = ({ alter_ego, characters }) => {
  /*  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>; */
  // esta sería una cuarta manera:
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`; //la ruta hacen referencia a la carpeta public, es decir, parten de ella
  //const charactersByHero = <p>{characters}</p>; //esta es otra manera de hacerlo
  return (
    <>
      <div className="col  animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-tex">{alter_ego}</p>
                {/* {alter_ego !== characters && <p>{characters}</p>} */
                /* Esta sería una manera de hacerlo */}
                {/* {alter_ego !== characters && charactersByHero} */
                /* Esta sería otra manera de hacerlo */}
                {/* esta sería la tercera manera de hacerlo */}
                <CharactersByHero
                  characters={characters}
                  alter_ego={alter_ego}
                />
                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`}>Más...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
