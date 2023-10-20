import React, { useState } from "react";
import "./PriceRangeSlider.css";
import { setPrice } from "../../../store/slices/home/filter/priceSlice";
import { useDispatch, useSelector } from "react-redux";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const dispatch = useDispatch();
  const priceGap = 1000;

  const handleRangeMinChange = (e) => {
    let newMinPrice = parseInt(e.target.value);
    if (newMinPrice + priceGap <= maxPrice) {
      setMinPrice(newMinPrice);
      dispatch(setPrice({ min: newMinPrice, max: maxPrice }));
    }
  };

  const handleRangeMaxChange = (e) => {
    let newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice - priceGap >= minPrice) {
      setMaxPrice(newMaxPrice);
      dispatch(setPrice({ min: minPrice, max: newMaxPrice }));
    }
  };

  return (
    <div className="d-flex">
      <div className="w-wrapper mb-4">
        <div className="price-input">
          <div className="field">
          <span style={{fontSize:".8rem"}}>Min</span>
            <input
              type="number"
              className="input-min"
              value={minPrice}
              disabled
              style={{ fontSize: ".8rem" }}
            />
          </div>
          <div className="separator">-</div>
          <div className="field">
          <span style={{fontSize:".8rem"}}>Max</span>
            <input
              type="number"
              className="input-max"
              value={maxPrice}
              style={{ fontSize: ".8rem" }}
              disabled
            />
          </div>
        </div>

        <div className="slider">
          <div
            className="progress"
            style={{
              left: `${(minPrice / 10000) * 100}%`,
              right: `${100 - (maxPrice / 10000) * 100}%`,
            }}
          ></div>
        </div>

        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min="0"
            max="10000"
            value={minPrice}
            step="100"
            onChange={handleRangeMinChange}
          />
          <input
            type="range"
            className="range-max"
            min="0"
            max="10000"
            value={maxPrice}
            step="100"
            onChange={handleRangeMaxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
