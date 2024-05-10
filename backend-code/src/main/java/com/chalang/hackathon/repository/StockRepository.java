package com.chalang.hackathon.repository;

import com.chalang.hackathon.entity.StockData;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<StockData, String> {


  public Optional<StockData> findByCompanyName(String name);

}
