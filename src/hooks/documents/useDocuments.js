import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocumentsRequest } from "../../redux/actions/documentsActions";

export default function useDocuments() {
  const { documents, loading, purchasedDocuments } = useSelector((state) => state.documents);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    token && dispatch(fetchDocumentsRequest({ token }));
  }, [token, dispatch]);


  return {
    documents,
    loading,
    purchasedDocuments,
  }
}
