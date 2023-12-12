
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Training from '../components/Training';
import Skelet from '../components/Skeleton';
import { fetchFormationsRequest, selectFormation } from '../redux/actions/formationsActions';
import useFormations from '../hooks/formations/useFormations';

export default function FormationsPage() {
  const { formations, loading } = useFormations();
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormations = async () => {
      dispatch(fetchFormationsRequest(auth.token));
    }
    auth.token && fetchFormations();
  }, [dispatch, auth.token]);

  const handleFormationClick = (formationId) => {
    navigate(`/formation-details/${formationId}`);
    dispatch(selectFormation(formationId));
  };

  return (
    <div className="sa4d25" style={{ marginBottom: 0 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="section3125">
              <div className="explore_search">
                <div className="ui search focus">
                  <div className="ui left icon input swdh11">
                    {/*TODO: Implement research*/}
                    <input className="prompt srch_explore" type="text" placeholder="Recherche..." />
                    <i className="uil uil-search-alt icon icon2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="_14d25">
              <div className="row">
                {!loading && formations.map((formation) => (
                  <Training training={formation} onClick={() => handleFormationClick(formation.id)} />
                ))}
                {loading && <Skelet />}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

