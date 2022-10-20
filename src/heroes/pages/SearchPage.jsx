import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log({ location });
  //const query = queryString.parse(location.search);
  //console.log({ query });
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText:
      q /* al principio había puesto "" pero al recargar se perdía lo del input */,
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;
    //console.log({ searchText });
    navigate(`?q=${searchText}`);
    //onResetForm();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* esta sería una forma de hacer lo de los mensajes condicionales */}
          {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                There's no hero with <b>{q}</b>
              </div>
            )
          )} */}
          {/* otra forma de hacer lo de los mensajes condicionales sería con componentes y pasarles el mensaje y las clases */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            There's no hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
