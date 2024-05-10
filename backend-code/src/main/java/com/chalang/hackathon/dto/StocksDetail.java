package com.chalang.hackathon.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StocksDetail {

  public Double dayChangePerc;
  public Double price;
  public String companyName;
}
