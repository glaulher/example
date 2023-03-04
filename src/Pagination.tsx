// import React, { useState } from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
// import './pagination.scss';

// interface Props {
//   //
//   totalCount: number
//   siblingCount?: number
//   currentPage: number
//   pageSize: number
//   className: string
// }

// const Pagination = ({
//   //onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
// }:Props) => {

//   const [_onPageChange, setOnPageChange] = useState(0)

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   if (currentPage === 0 || paginationRange!.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     setOnPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     setOnPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange![paginationRange!.length - 1];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange!.map(pageNumber => {
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }

//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => setOnPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;

import React from 'react'
import classnames from 'classnames'
import { usePagination, DOTS } from './usePagination'
import './pagination.scss'

type PaginationProps = {
  onPageChange: (page: number | string) => void
  totalCount: number
  siblingCount: number
  currentPage: number
  pageSize: number
  className: string
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange![paginationRange!.length - 1]
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  )
}

export default Pagination

// import React from 'react'

// // type ReturnType<PageItem> = {
// //   pageItems: PageItem[];
// //   currentPageNumber: number;
// //   numberOfPages: number;
// //   handlePageChange: (pageNumber: number, pageRef: HTMLSpanElement | undefined) => void;
// // };

// // type Parameters<PageItem> = {
// //   initialPageNumber?: number;
// //   itemsPerPage?: number;
// //   items: PageItem[];
// // };

// type PaginationProps = {
//   limit:number,
//   total:number,
//   offset:number,
//   setOffset:(page: number) => void
// }
// // limt: calcula o numero total de paginas
// // total: de itens
// // offset: os itens que serão ignorados

// const MAX_ITEMS = 9 // maximos de botões que serão exibidos
// const MAX_LEFT = (MAX_ITEMS -1)/2 //8/2 numero de botões para cada lado

// const Pagination = ({limit, total, offset, setOffset}:PaginationProps) => {
//   const current = offset?(offset / limit) + 1:1
//   //const pages = Math.ceil(total / limit);//Math.ceil arredonda pra cima
//   const first = Math.max(current - MAX_LEFT,1) // Math.max evitará números negativos

//   return (
//     <ul>
//       {Array.from({length:MAX_ITEMS})
//       .map((_,index)=> index + first)
//       .map((page)=>(
//         <li>
//         <button onClick={()=>setOffset((page -1)*limit)}>{page}</button>
//         </li>
//       ))
//       }
//     </ul>
//   )
// }

// export default Pagination
