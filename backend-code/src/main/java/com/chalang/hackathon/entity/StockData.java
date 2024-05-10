package com.chalang.hackathon.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "stocks")
@Getter
@Setter
public class StockData {

  @Id
  @Column(name = "id")
  public String searchId;
  public String isin;
  public String growwContractId;
  public String companyName;
  public String companyShortName;
  public Integer industryCode;
  public Integer bseScriptCode;
  public String nseScriptCode;
  public Integer yearlyHighPrice;
  public Double yearlyLowPrice;
  public Double closePrice;
  public Long marketCap;
  @Column(length = 500)
  public String livePriceDto;
}
