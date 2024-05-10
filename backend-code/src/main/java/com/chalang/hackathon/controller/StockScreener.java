package com.chalang.hackathon.controller;


import com.chalang.hackathon.dto.Stats;
import com.chalang.hackathon.dto.StatsDTO;
import com.chalang.hackathon.dto.TableView;
import com.chalang.hackathon.dto.TopStocks;
import com.chalang.hackathon.service.DataStorage;
import com.chalang.hackathon.service.StockScreenerService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))
@Slf4j
@CrossOrigin(origins = "http://localhost:5173/")
public class StockScreener {

  public final DataStorage str;
  public final StockScreenerService service;



  @GetMapping("/hello")
  public String helloWord() {
    return "Hello WOrld";
  }

  @PostMapping("/save")
  public void saveDataToDb(){
    str.saveDataToDb();

  }

  @GetMapping("/top/stocks")
  public TopStocks getTopStocksDetail(){
    return service.getTopStocksDetails();
  }

  @GetMapping("/search")
  public List<TableView> searchStocks(@RequestParam(value = "query", required = false) String query) {
    if (query != null && !query.isEmpty()) {
      return service.searchCompanies(query);
    } else {
      return service.getAllCompanies();
    }
  }

  @GetMapping("/company/search")
  public Stats searchByCompanies(@RequestParam(value = "companyName", required = false) String query) {
    return service.getByCompanyData(query);
  }
}
