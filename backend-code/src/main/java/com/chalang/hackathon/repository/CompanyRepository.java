package com.chalang.hackathon.repository;

import com.chalang.hackathon.entity.Company;
import com.chalang.hackathon.entity.StockData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository  extends JpaRepository<Company, String> {


}
