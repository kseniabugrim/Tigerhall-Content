import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Title from "../../components/common/Title/Title";
import Input from "../../components/common/Input/Input";
import CardsWrappers from "../../components/CardsWrapper/CardsWrapper";

import { useLazyQuery } from "@apollo/client";
import { FILTER_CONTENT_CARDS } from "../../graphql/query/contentCards";

import useDebounce from '../../components/hooks/useDebounce';

function Homepage() {
  const [inputText, setInputText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [addVarFiller, dataContent] = useLazyQuery(FILTER_CONTENT_CARDS);
  const debouncedSearchTerm = useDebounce(inputText, 800);

  useEffect(() => {
    const { loading, data, error } = dataContent;

    if(loading || !loading) setLoading(loading);
    if(data) setContent(data.contentCards.edges);
    if(error) setError(error);

    setIsSearching(false);
  }, [dataContent]);

  useEffect(() => {
    if(debouncedSearchTerm) {
      setContent(null);
      setIsSearching(true);
      addVarFiller({
        variables: {
          filter: {
            limit: 20,
            keywords: inputText,
            types: ["PODCAST"],
          },
        },
      });
    } else {
      setContent(null);
    }
  }, [debouncedSearchTerm]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="homepage-wrapper">
      <div className="homepage-container">
        <Title text="Search" />
        <Input
          value={inputText}
          onChange={inputHandler}
          placeholder="Type any keyword"
        />
        <CardsWrappers
          loading={loading}
          cardsList={content}
          isSearching={isSearching}
        />
      </div>
    </div>
  );
}

export default Homepage;
