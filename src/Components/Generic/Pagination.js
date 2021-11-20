import React from "react";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPaginationCategory } from "../../api.js";

function PaginationCategory() {
  const params = useParams();
  const [meta, setMeta] = useState();
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaginationCategory(params.id).then((data) => {
      setMeta(data.meta);
      setLoading(false);
      console.log(data.meta);
    });
  }, [params.id]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (!loading) {
    return (
      <div>
        <Pagination count={meta.last_page} onChange={handleChange} />
      </div>
    );
  } else {
    return <div>Загрузка ...</div>;
  }
}

export default PaginationCategory;
