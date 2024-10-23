import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  set,
  currentPage,
  support
}) => {
  const [news, setNews] = useState(0);
  const [old, setOld] = useState(3);

  // Ensure postsPerPage is greater than 0 to avoid division by zero
  const validPostsPerPage = Math.max(1, postsPerPage);
  const totalPages = Math.max(1, Math.ceil(totalPosts / validPostsPerPage));

  const PageNumbers = [...Array(totalPages)].map((_, i) => i + 1);
  const recent = PageNumbers.slice(news, old);

  const backward = () => {
    if (news > 0) {
      const newNews = Math.max(0, news - 3);
      setNews(newNews);
      setOld(Math.min(newNews + 3, totalPages));
    }
  };

  const forward = () => {
    if (old < totalPages) {
      const newNews = Math.min(totalPages - 3, news + 3);
      setNews(newNews);
      setOld(Math.min(newNews + 3, totalPages));
    }
  };

  return (
    <Flex support={support}>
      {totalPosts === 0 ? (
        ""
      ) : (
        <>
          <div className="show">
            <span className="titles">Showing</span>
            <div className="current">
              {(currentPage + 1) * validPostsPerPage > totalPosts
                ? totalPosts
                : (currentPage + 1) * validPostsPerPage}
            </div>
            <span className="total">of</span>
            <span className="total">{totalPosts}</span>
          </div>
          <ul className="arrange">
            <div className="prev" onClick={backward}>
              {/* SVG for previous button */}
            </div>
            {recent.map((page) => (
              <span
                key={page}
                className={`paging ${set === page ? "sums" : ""}`}
                onClick={() => paginate(page)}
              >
                {page}
              </span>
            ))}
            <div className="next" onClick={forward}>
              {/* SVG for next button */}
            </div>
          </ul>
        </>
      )}
    </Flex>
  );
};

const Flex = styled.div`
  background-color: white;
  display: flex;
  flex-direction: ${(props) => (props.support ? "column" : "row")};
  justify-content: ${(props) => (props.support ? "center" : "space-between")};
  align-items: ${(props) => (props.support ? "center" : "")};
  gap: ${(props) => (props.support ? "10px" : "")};
  padding: 10px 20px;

  .show {
    display: flex;
    align-items: center;
    gap: 5px;
    .titles {
      font-size: 15px;
      font-weight: 500;
      color: #8d9196;
    }
    .current {
      padding-left: 5px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      height: 29px;
      width: 43px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .total {
      font-size: 15px;
      font-weight: 500;
      color: #8b909a;
    }
  }

  .arrange {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    .prev,
    .next {
      width: 24px;
      height: 24px;
      background: #f3f6ff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      cursor: pointer;
    }

    .paging {
      background: #f3f6ff;
      color: #8d9196;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 7px;
      border-radius: 6px;
      width: 29px;
      height: 29px;
    }

    .sums {
      background: #8d9196; /* Active background color */
      color: #ffffff; /* Active text color */
    }
  }
`;

export default Pagination;
