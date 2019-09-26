import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function Paging(props) {
    const { lengthOfTodo, active,  noOfItems } = props

    let items = [];
    const len = lengthOfTodo%noOfItems === 0 ? lengthOfTodo/noOfItems : lengthOfTodo/noOfItems +1
    for(let number=1; number <= len; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={ number === active}
                onClick = {()=> props.changePageActive(number)}
             >
                {number}
            </Pagination.Item>
        );
    }

    const paginationBasic = (
        <div>
            <Pagination >{items}</Pagination>
            <br />
        </div>
    )


    return (
        <div>
            {paginationBasic}
        </div>
    )
}
