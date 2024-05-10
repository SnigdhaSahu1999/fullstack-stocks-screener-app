package com.chalang.hackathon.entity;

import lombok.Data;

@Data
public class LivePrice {

  public String type;
  public String symbol;
  public Long tsInMillis;
  public Double open;
  public Double high;
  public Double low;
  public Double close;
  public String ltp;
  public String dayChange;
  public Double dayChangePerc;
  public Double lowPriceRange;
  public Double highPriceRange;
  public Long volume;
  public Integer totalBuyQty;
  public Integer totalSellQty;
  public Integer oiDayChange;
  public Double oiDayChangePerc;
  public Integer lastTradeQty;
  public Long lastTradeTime;
}

/*
* "livePriceDto": {
        "type": "LIVE_PRICE",
        "symbol": "IRCTC",
        "tsInMillis": 1712312976,
        "open": 998,
        "high": 1010.95,
        "low": 993.85,
        "close": 998.15,
        "ltp": 1002.95,
        "dayChange": 4.800000000000068,
        "dayChangePerc": 0.4808896458448198,
        "lowPriceRange": 898.35,
        "highPriceRange": 1097.95,
        "volume": 1970844,
        "totalBuyQty": 1027,
        "totalSellQty": 0,
        "oiDayChange": 0,
        "oiDayChangePerc": 0,
        "lastTradeQty": 1,
        "lastTradeTime": 1712293176
      }*/