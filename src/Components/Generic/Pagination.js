import React from "react";
import { Pagination } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPaginationCategory } from "../../api.js";

function PaginationCategory() {
  const params = useParams();
  const { search } = useLocation();
  const [meta, setMeta] = useState();
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaginationCategory(params.id + search).then((data) => {
      setMeta(data.meta);
      setLoading(false);
    });
  }, [params.id]);

  const handleChange = (event, value) => {
    window.location = "/catalog/" + params.id + "?page=" + value;
  };

  if (!loading) {
    return (
      <div>
        <Pagination
          defaultPage={meta.current_page}
          count={meta.last_page}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return <div>Загрузка ...</div>;
  }
}

export default PaginationCategory;
