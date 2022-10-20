import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  /* const params = useParams();
  console.log(params); */
  /*   const { id, ...rest } = useParams();
  console.log(id, rest); */
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);
  //  console.log(hero);
  /*  if (!hero) {
    return <>404 - Not found</>;
  } */

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeftBig">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};