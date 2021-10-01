import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featureInfo.css";

export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <div className="featuredLeft">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.14 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <div className="featuredRight">
            <i className="bx bxs-cart-download"></i>
          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyContainer">
          <div className="featuredLeft">
            <span className="featuredMoney">$4,321</span>
            <span className="featuredMoneyRate">
              -18.1 <ArrowDownward className="featuredIcon warning" />
            </span>
          </div>
          <div className="featuredRight warning">
            <i className="bx bxs-cart-download"></i>
          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <div className="featuredLeft">
            <span className="featuredMoney">$2,657</span>
            <span className="featuredMoneyRate">
              +2.6 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <div className="featuredRight positive">
            <i className="bx bxs-cart-add"></i>
          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
