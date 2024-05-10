package com.chalang.hackathon.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TopStocks {

  public List<StocksDetail> topGainer;
  public List<StocksDetail> topLooser;
  public List<Volume> volume;
}
