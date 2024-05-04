import React, { useState } from "react";
import CatalogCollection from "pages/catalog/catalog-collection";
import Filters from "pages/catalog/filters";
import { filterProduct } from "common/data";

const Index = ({ name, cxxl, clg, cmd,cxl, products }: any) => {
    const [filterList, setFilterlist] = useState<any>(products);
    return (
        <React.Fragment>
            <Filters
                setFilterlist={setFilterlist}
                name={name}
            />
            <CatalogCollection
                filterList={filterList}
                cxxl={cxxl}
                clg={clg}
                cmd={cmd}
                cxl={cxl}
            />
        </React.Fragment>
    );
};

export default Index;
