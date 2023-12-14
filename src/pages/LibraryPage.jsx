import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Training from '../components/Training';
import Skelet from '../components/Skeleton';
import { fetchFormationsRequest, selectFormation } from '../redux/actions/formationsActions';
import useDocuments from '../hooks/documents/useDocuments';
import { SearchBar } from "../components";

export default function LibraryPage() {
  const { documents, loading } = useDocuments();

  const navigate = useNavigate();

  console.log(documents);


  const handleFormationClick = (formationId) => {
    //   navigate(`/formation-details/${formationId}`);
  };

  const handleSearchInput = (searchInput) => {
    // const result = documents.filter((formation) => formation.Theme.toLowerCase().includes(searchInput.toLowerCase()));
    //  setResultFormations(result);
  }

  useEffect(() => {
    // setResultFormations(formations);
    //{/*
    //<Training training={formation} onClick={() => handleFormationClick(formation.id)} />
    //*/}
  }, [documents]);

  return (
    <div className="sa4d25" style={{ marginBottom: 0 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="section3125">
              <SearchBar onChange={(e) => handleSearchInput(e.target.value)} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="_14d25">
              <div className="row">
                {!loading && documents.map((document) => (
                  <p>{document.id}</p>
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

