package com.chalang.hackathon.service;

import com.chalang.hackathon.dto.Stats;
import com.chalang.hackathon.dto.StatsDTO;
import com.chalang.hackathon.dto.StockDataDto;
import com.chalang.hackathon.dto.StocksDetail;
import com.chalang.hackathon.dto.TableView;
import com.chalang.hackathon.dto.TopStocks;
import com.chalang.hackathon.dto.Volume;
import com.chalang.hackathon.entity.Company;
import com.chalang.hackathon.entity.StockData;
import com.chalang.hackathon.exception.BadRequestException;
import com.chalang.hackathon.mapper.MapperClass;
import com.chalang.hackathon.repository.CompanyRepository;
import com.chalang.hackathon.repository.StockRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))

public class StockScreenerService {

  public final StockRepository stockRepository;
  public final MapperClass mapperClass;
  public final CompanyRepository companyRepository;
  private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

  public TopStocks getTopStocksDetails() {

    List<StockData> stockData = stockRepository.findAll();

    List<StockDataDto> stocks = mapperClass.toResources(stockData);

    List<Volume> volumn = stocks.stream()
        .sorted(Comparator.comparingDouble(data -> -data.getLivePriceDto().getVolume())).limit(5)
        .map(data -> Volume.builder().volumeValue(data.getLivePriceDto().getVolume())
            .companyName(data.companyName).build())
        .collect(Collectors.toList());

    List<StocksDetail> gainers = stocks.stream()
        .sorted((a, b) -> {
          double dataA = a.getLivePriceDto().getClose() - a.getLivePriceDto().getOpen();
          double dataB = b.getLivePriceDto().getClose() - b.getLivePriceDto().getOpen();
          return Double.compare(dataB, dataA);
        })
        .limit(5)
        .map(d -> StocksDetail.builder().price(d.getClosePrice() - d.getLivePriceDto().getOpen())
            .dayChangePerc(d.getLivePriceDto().dayChangePerc).companyName(d.companyName).build())
        .collect(Collectors.toList());

    List<StocksDetail> looser = stocks.stream()
        .sorted((a, b) -> {
          double dataA = a.getLivePriceDto().getClose() - a.getLivePriceDto().getOpen();
          double dataB = b.getLivePriceDto().getClose() - b.getLivePriceDto().getOpen();
          return Double.compare(dataA, dataB);
        })
        .limit(5)
        .map(d -> StocksDetail.builder().price(d.getClosePrice() - d.getLivePriceDto().getOpen())
            .companyName(d.companyName)
            .dayChangePerc(d.getLivePriceDto().dayChangePerc).build())
        .collect(Collectors.toList());
    return TopStocks.builder().volume(volumn).topGainer(gainers).topLooser(looser).build();



  }

  public List<TableView> searchCompanies(String query) {


    Optional<StockData> data = stockRepository.findByCompanyName(query);
    List<TableView> result = new ArrayList<>();

    if (data.isPresent()) {
      Optional<Company> value =
          companyRepository.findById(data.get().searchId);
      TableView tableView =
          TableView.builder().searchId(data.get().getSearchId()).marketCap(data.get()
                  .getMarketCap()).closePrice(data.get().getClosePrice())
              .companyName(data.get().companyName).build();
      if (value.isPresent()) {
        try {
          Map<String, Object> map = OBJECT_MAPPER.readValue(value.get().getStats(), Map.class);
          Map<String, Object> statsMap = (Map<String, Object>) map.get("stats");

          // Convert the "stats" object to DTO
          StatsDTO statsDTO = OBJECT_MAPPER.convertValue(statsMap, StatsDTO.class);
          tableView.setPeRatio(statsDTO.getPeRatio());
        } catch (JsonProcessingException e) {
          throw new BadRequestException("something fail");
        }
      } else {
        tableView.setPeRatio(Double.valueOf(10.0));
      }
      result.add(tableView);
      return result;
    } else {
      return new ArrayList<>();
    }
  }

  public List<TableView> getAllCompanies() {
    List<StockData> data = stockRepository.findAll();
    List<TableView> result = new ArrayList<>();
    for (StockData d : data) {

      Optional<Company> value =
          companyRepository.findById(d.searchId);
      TableView tableView = TableView.builder()
          .companyName(d.companyName).closePrice(d.closePrice)
          .marketCap(d.marketCap).searchId(d.getSearchId()).build();
      if (value.isPresent()) {
        try {
          System.out.println(value.get());
          Map<String, Object> map = OBJECT_MAPPER.readValue(value.get().getStats(), Map.class);
          Map<String, Object> statsMap = (Map<String, Object>) map.get("stats");

          // Convert the "stats" object to DTO
          StatsDTO statsDTO = OBJECT_MAPPER.convertValue(statsMap, StatsDTO.class);
          tableView.setPeRatio(statsDTO.getPeRatio());
        } catch (JsonProcessingException e) {
          throw new BadRequestException("something fail", e);
        }
      } else {
        tableView.setPeRatio(Double.valueOf(10.0));
      }
      result.add(tableView);
    }
    return result;
  }

  public Stats getByCompanyData(String query) {
    StockData companyData = stockRepository.findByCompanyName(query).get();
    Optional<Company> result = companyRepository.findById(companyData.getSearchId());
    if (result.isPresent()){
      try {
        // Convert the "stats" object to DTO
        return OBJECT_MAPPER.readValue(result.get().getStats(), Stats.class);
      } catch (JsonProcessingException e) {
        throw new BadRequestException("something fail", e);
      }
    }
    return new Stats();
  }
}
