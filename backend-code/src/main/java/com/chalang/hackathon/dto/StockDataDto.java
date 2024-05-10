package com.chalang.hackathon.dto;

import com.chalang.hackathon.entity.LivePrice;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Data
@Getter
@Setter
@ToString
public class StockDataDto {

  public Integer id;
  public String isin;
  public String growwContractId;
  public String companyName;
  public String companyShortName;
  public String searchId;
  public Integer industryCode;
  public Integer bseScriptCode;
  public String nseScriptCode;
  public Integer yearlyHighPrice;
  public Double yearlyLowPrice;
  public Double closePrice;
  public Long marketCap;
  public LivePriceDto livePriceDto;
}
