import { isArray } from "lodash";
import { cloneElement, useEffect, useState } from "react";
import { Column, Grid } from "./style";

export function Masonry({ children, ...props }) {
    const [itemsColumns, setItemsColumns] = useState([]);

    function divideIntoColumns(items, columnsNumber) {

        const itemsColumns = []

        let currentIndex = 0;
        items.forEach((item) => {

            if (!isArray(itemsColumns[currentIndex])) {

                itemsColumns[currentIndex] = [];
            }

            itemsColumns[currentIndex].push(item);

            if (currentIndex === columnsNumber - 1) {

                currentIndex = 0;

                return;
            }

            currentIndex++;
        });

        return itemsColumns;
    }

    useEffect(() => {
      
        const itemsColumns = divideIntoColumns(children, props.columns);

        setItemsColumns(itemsColumns);
    }, [])
    

    return (
        <Grid columns={props.columns}>
            {itemsColumns.map((items, key) => (
                <Column key={key}>
                    {items.map((item, key) => cloneElement(item, {key}))}
                </Column>
            ))}
        </Grid>
    );
}
