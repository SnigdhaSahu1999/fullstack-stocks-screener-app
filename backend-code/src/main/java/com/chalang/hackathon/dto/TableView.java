package com.chalang.hackathon.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TableView {

  public Double closePrice;
  public Long marketCap;
  public String companyName;
  public String searchId;
  private Double peRatio;

}