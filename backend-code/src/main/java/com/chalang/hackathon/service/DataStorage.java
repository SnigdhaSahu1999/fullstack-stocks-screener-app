package com.chalang.hackathon.service;

import com.chalang.hackathon.dto.Stats;
import com.chalang.hackathon.dto.StockDataDto;
import com.chalang.hackathon.entity.Company;
import com.chalang.hackathon.entity.StockData;
import com.chalang.hackathon.exception.BadRequestException;
import com.chalang.hackathon.mapper.MapperClass;
import com.chalang.hackathon.repository.CompanyRepository;
import com.chalang.hackathon.repository.StockRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))
public class DataStorage {

  public final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  private final StockRepository stockRepository;
  private final CompanyRepository companyRepository;
  private final MapperClass mapper;

  public void saveDataToDb() {

    String url = "https://groww.in/v1/api/stocks_data/v1/all_stocks";
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
    headers.set("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
    headers.set("x-app-id", "growwWeb");
    String requestBody = "{\"listFilters\":{\"INDUSTRY\":[],\"INDEX\":[]},\"objFilters\":{\"CLOSE_PRICE\":{\"max\":100000,\"min\":0},\"MARKET_CAP\":{\"min\":0,\"max\":2000000000000000}},\"page\":\"1\",\"size\":\"100\",\"sortBy\":\"NA\",\"sortType\":\"ASC\"}";
    HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

    ResponseEntity<String> response =  restTemplate.exchange(
        url,
        HttpMethod.POST,
        requestEntity,
        String.class
    );
    System.out.println(response.getStatusCode());
    String responseBody = response.getBody();

    List<StockData> data =  saveStocksDataToDb(responseBody);
    saveStockDetails(data);
  }

  private void saveStockDetails(List<StockData> data) {

    for (StockData stockData : data) {

      HttpHeaders headers = new HttpHeaders();
      headers.set("accept", "application/json, text/plain, */*");
      headers.set("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
      headers.set("x-device-type", "desktop");
      headers.set("x-platform", "web");
      headers.set("Cookie",
          "__cf_bm=SftLdt5BODruKZyzebA_gI77Cp5HXOeq4ozSjirVgko-1712385574-1.0.1.1-Y9s_Q0w6Up1K.ySI.Z28BZlgvf6bhRKej4DknvlVWji0fh43IcSGvKZfGYLSs34q7WL.3I9oQOOo9XpC5gH2_A; __cfruid=caa693e2eeb705a0750cd26e46b5780f8e3c3c34-1712382636; _cfuvid=Mjzm8BwXwVvBV.c1BKzuS9_GO1GHyW9bGF_2A6PxI_I-1712382636725-0.0.1.1-604800000");

      // Create HttpEntity with headers
      HttpEntity<String> entity = new HttpEntity<>(headers);

      // Set the URL for the request
      String url = String.format("https://groww.in/v1/api/stocks_data/v1/company/search_id/%s?page=0&size=100", stockData.searchId);
      // Make the HTTP GET request
      ResponseEntity<String> response =
          restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
      // Print the response body
     // System.out.println(response.getBody());
      String responseBody = response.getBody();
      try {
        Stats stats = objectMapper.readValue(responseBody, Stats.class);
        System.out.println(stats);

        ObjectMapper OBJECT_MAPPER = new ObjectMapper();
        try {
          String result = OBJECT_MAPPER.writeValueAsString(stats);
          Company company = Company.builder().searchId(stockData.searchId).stats(result).build();
          companyRepository.save(company);
        } catch (Exception var2) {
          throw new BadRequestException("Exception occurred while processing JSON", var2);
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
      }
  }

  private List<StockData> saveStocksDataToDb(String responseBody) {
    try {
      JsonNode rootNode = objectMapper.readTree(responseBody);
      JsonNode recordsNode = rootNode.get("records");

      List<StockDataDto> dtoList = new ArrayList<>();
      for (JsonNode recordNode : recordsNode) {
        StockDataDto dto = objectMapper.treeToValue(recordNode, StockDataDto.class);
        dtoList.add(dto);
      }
      List<StockData> data = mapper.toEntity(dtoList);
      stockRepository.saveAll(data);
      return data;
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }
}
