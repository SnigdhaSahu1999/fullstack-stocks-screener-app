package com.chalang.hackathon.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Data;
import lombok.ToString;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class Stats {

  public StatsDTO stats;
  public List<Fundamentals> fundamentals;
  public Details details;
  public List<FinancialStatements> financialStatement;

}
