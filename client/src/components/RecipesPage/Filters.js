import { useEffect, useState } from "react";
import { FILTER_COLLECTION } from "./constants"

export default function Filters({ filters, setFilters, inactiveFilters, setInactiveFilters }) {
  const [filterTypes, setFilterTypes] = useState(Object.keys(FILTER_COLLECTION));

  function handleAddFilter(type, filter) {
    let newActiveFilters = structuredClone(filters);

    if (!newActiveFilters[type]) newActiveFilters[type] = [];
    newActiveFilters[type].push(filter)
    newActiveFilters[type].sort((a,b) => a < b ? -1 : 1);

    setFilters(newActiveFilters);

    const tempInFilters = structuredClone(inactiveFilters);
    const delIndex = tempInFilters[type].findIndex(f => f === filter);
    tempInFilters[type].splice(delIndex, 1);

    setInactiveFilters(tempInFilters);

  }

  return (
    <>
    <h2>Filters</h2>
    {filterTypes.map(type => (
        <div key={type} className="filter-type-control">
            <h3 className="filter-type-name">{type.split("_").join(" ")}</h3>
            <div className="filter-type">
              {inactiveFilters[type].map(filter => (
                  <span
                      key={type+filter}
                      className="filter-bubble"
                      onClick={() => handleAddFilter(type, filter)}
                  >{filter}
                </span>
              ))}
            </div>
        </div>
    ))}
    </>
  );
}