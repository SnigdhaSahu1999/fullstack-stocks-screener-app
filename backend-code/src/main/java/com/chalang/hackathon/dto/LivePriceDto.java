package com.chalang.hackathon.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@ToString
public class LivePriceDto {


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
  public Double volume;
  public Integer totalBuyQty;
  public Integer totalSellQty;
  public Integer oiDayChange;
  public Double oiDayChangePerc;
  public Integer lastTradeQty;
  public Long lastTradeTime;
}
